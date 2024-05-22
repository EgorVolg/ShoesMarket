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
}) {
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
      <div className={styles.content_items}>
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              added={cartItems.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
              loading={false}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
