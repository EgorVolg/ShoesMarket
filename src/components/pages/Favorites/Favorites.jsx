import React from "react";
import styles from "./Favorites.module.scss";
import { Card } from "../Card/Card";

export const Favorites = ({ favoriteItems = [], onAddToFavorite }) => {
  return (
    <div className={styles.favorite_content}>
      <h3>Мои закладки</h3>
      {favoriteItems.length > 0 ? (
        <div className="d-flex flex-wrap">
          {favoriteItems.map((el) => (
            <Card
              key={el.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              favorited={true}
              {...el}
            />
          ))}
        </div>
      ) : (
        <div>Избранные отсутсвуют</div>
      )}
    </div>
  );
};
