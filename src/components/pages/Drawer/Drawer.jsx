import React from "react";
import styles from "./Drawer.module.scss";

function Drawer({ onClickClosed, items = [], onRemoveItem }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className={styles.drawer_h2}>
          Корзина
          <img
            onClick={onClickClosed}
            className="removeBtn"
            src="/image/btn-remove.svg"
            alt="removebtn"
          />
        </h2>

        {items.length > 0 ? (
          <div className={styles.drawer_items}>
            {items.map((el) => (
              <div className="cartItem">
                <div
                  className="sneakersCart"
                  style={{ backgroundImage: `url(${el.imageUrl})` }}
                >
                </div>
                <div className="sneakers_cartname">
                  <p>{el.name}</p>
                  <b>{el.price} руб.</b>
                </div>
                <img
                  onClick={() => onRemoveItem(el.id)}
                  className="removeBtn"
                  src="/image/btn-remove.svg"
                  alt="removebtn"
                />
              </div>
            ))}

            <ul className={styles.drawer_items_ul}>
              <li className={styles.drawer_items_ul_li}>
                <span className={styles.drawer_items_ul_li_span}>Итого:</span>
                <div className={styles.drawer_items_ul_li_div}></div>
                <b className={styles.drawer_items_ul_li_b}>21 000 руб.</b>
              </li>
              <li className={styles.drawer_items_ul_li}>
                <span>Налог 5%:</span>
                <div className={styles.drawer_items_ul_li_div}></div>
                <b>1 000 руб.</b>
              </li>
            </ul>

            <button className={styles.takeOrderButton}>
              <div>Оформить заказ</div>
              <img
                className={styles.takeOrderArrow}
                src="/image/arrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
