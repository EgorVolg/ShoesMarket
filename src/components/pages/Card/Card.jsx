import React, { useState } from "react";
import styles from "./Card.module.scss";

export const Card = ({ name, id, imageUrl, price, onPlus, onFavorite, favorited = false }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ name, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onAddToFavorite = () => {
    onFavorite({ name, id, imageUrl, price })
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card} >
      <div className="card">
        <div className="likeImgDiv">
          <img
            onClick={onAddToFavorite}
            src={isFavorite ? "/image/liked.svg" : "/image/heart.svg"}
            alt="likedHeart"
          />
        </div>
        <img src={imageUrl} width={133} height={112} alt="cardimage" />
        <h5>{name}</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column align-center">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img
            onClick={onClickPlus}
            src={isAdded ? "/image/btn-checked.svg" : "/image/btn-plus.svg"}
            alt="plusimg"
            className={styles.plus}
          />
        </div>
      </div>
    </div>
  );
};
