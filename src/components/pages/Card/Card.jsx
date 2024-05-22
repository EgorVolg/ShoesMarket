import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

export const Card = ({
  name,
  id,
  imageUrl,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ name, id, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onAddToFavorite = () => {
    onFavorite({ name, id, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};


