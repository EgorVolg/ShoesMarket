import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Drawer from "./components/pages/Drawer/Drawer";
import Header from "./components/pages/Header/Header";
import Home from "./components/pages/Home/Home";
import { Favorites } from "./components/pages/Favorites/Favorites";

export default function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect( () => {
    async function fetchData() {
      //............................................... Корзина ...............................................
      const drawerResponce = await axios.get(
        "https://85756798b179ce34.mokky.dev/drawer"
      );

      //............................................... Избранное ...............................................
      const favResponce = await axios.get(
        "https://85756798b179ce34.mokky.dev/favorites"
      );

      //............................................... Кроссовки ...............................................
      const itemsResponce = await axios.get(
        "https://85756798b179ce34.mokky.dev/sneakers"
      );

      setCartItems(drawerResponce.data);
      setFavoriteItems(favResponce.data);
      setItems(itemsResponce.data);
    }
    fetchData()
  }, []);
  //............................................... Добавление в избранное ..............................................
  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((objFav) => objFav.id === obj.id)) {
        axios.delete(`https://85756798b179ce34.mokky.dev/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          "https://85756798b179ce34.mokky.dev/favorites",
          obj
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось отправить на бэк");
      console.log(error);
    }
  };
  //............................................... Удаление из избранного ..............................................
  // const onRemoveFavorite = (id) => {
  //   axios.delete(`https://85756798b179ce34.mokky.dev/favorites/${id}`);
  //   setFavoriteItems((prev) =>
  //     prev.filter((favoriteItems) => favoriteItems.id !== id)
  //   );
  // };

  //............................................... Добавление в корзину ...............................................
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://85756798b179ce34.mokky.dev/drawer", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  //............................................... Удаление из корзины ...............................................
  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  //............................................... Поиск ...............................................
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      <Header onClickCard={() => setCartOpened(!cartOpened)} />
      <Routes>
        <Route
          exact
          path="*"
          element={
            <Home
              searchValue={searchValue}
              items={items}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              cartItems={cartItems}
            />
          }
        />
        <Route
          exact
          path="/favorites"
          element={
            <Favorites
              favoriteItems={favoriteItems}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Routes>

      {cartOpened && (
        <Drawer
          onRemoveItem={onRemoveItem}
          items={cartItems}
          onClickClosed={() => setCartOpened(!cartOpened)}
        />
      )}
    </div>
  );
}
