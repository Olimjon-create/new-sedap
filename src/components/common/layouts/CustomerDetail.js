import React from "react";
import styles from "../../../styles/.module.css";

export default function () {
  const arr3 = [
    {
      id: 1,
      name: "Medium Spicy Spaghetti Italiano",
      cost: "SPAGHETTI",
      constOurs: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 2,
      name: "Medium Spicy Spaghetti Italiano",
      cost: "SPAGHETTI",
      constOurs: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 3,
      name: "Medium Spicy Spaghetti Italiano",
      cost: "SPAGHETTI",
      constOurs: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 4,
      name: "Medium Spicy Spaghetti Italiano",
      cost: "SPAGHETTI",
      constOurs: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 5,
      name: "Medium Spicy Spaghetti Italiano",
      cost: "SPAGHETTI",
      constOurs: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 6,
      name: "Medium Spicy Spaghetti Italiano",
      cost: "SPAGHETTI",
      constOurs: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.profile}`}>
        <div className={styles.profileLeft}>
          <div className={styles.profileImg}></div>
          <div className={styles.profileInfo}>
            <h2>Eren Yeager</h2>
            <p style={{ color: "#10b981" }}>UX Designer</p>
            <p>St. Kings Road 57th, Garden Hills, Chelsea - London</p>
            <div className={styles.contact}>
              <span>eren.yeager@mail.co.id</span>
              <span>+012 345 6789</span>
              <span>Highspeed Studios</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.card} ${styles.balance}`}>
        <h2>Your Balance</h2>
        <p style={{ fontSize: "52px", fontFamily: "sans-serif" }}>$9,425</p>
        <p>245| ** **</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <span>02/21</span>
          <span>Eren Yeager</span>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Most Ordered Food</h3>
          {arr3.map((item) => (
            <div key={item.id} className={styles.foodItem}>
              <div className={styles.foodItemLeft}>
                <div className={styles.foodImg}></div>
                <div>
                  <strong>{item.name}</strong>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                    {item.cost} • {item.constOurs}
                  </p>
                </div>
              </div>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <div className={styles.card}>
          <h3>Most Liked Food</h3>
          <div className={styles.barChart}>
            <div className={`${styles.bar} ${styles.spaghetti}`}></div>
            <div className={`${styles.bar} ${styles.pizza}`}></div>
            <div className={`${styles.bar} ${styles.burger}`}></div>
            <div className={`${styles.bar} ${styles.sprite}`}></div>
            <div
              className={`${styles.bar} ${styles.spaghetti}`}
              style={{ height: "40%" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.pizza}`}
              style={{ height: "20%" }}
            ></div>
            <div className={`${styles.bar} ${styles.green}`}></div>
          </div>
          <p
            style={{
              textAlign: "right",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            763 Likes - Oct 14th, 2023
          </p>
        </div>
      </div>
    </div>
  );
}
