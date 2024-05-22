import React from "react";
import styles from "./Home.module.scss";
import { Card } from "../Card/Card";

export default function Home({
  searchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavorite,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10)] : filterItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className={styles.content}>
      <div className={styles.search_block}>
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className={styles.search}>
          <img src="/image/search.svg" alt="search" />
          <input
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
            value={searchValue}
          />
        </div>
      </div>
      <div className={styles.content_items}>{renderItems()}</div>
    </div>
  );
}
