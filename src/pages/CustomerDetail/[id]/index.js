import React from "react";
import styles from "../../../styles/customerDetail.module.css";

export default function CustomerDetail() {
  const foods = [
    {
      id: 1,
      name: "Medium Spicy Spaghetti Italiano",
      category: "SPAGHETTI",
      info: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 2,
      name: "Medium Spicy Spaghetti Italiano",
      category: "SPAGHETTI",
      info: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 3,
      name: "Medium Spicy Spaghetti Italiano",
      category: "SPAGHETTI",
      info: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 4,
      name: "Medium Spicy Spaghetti Italiano",
      category: "SPAGHETTI",
      info: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 5,
      name: "Medium Spicy Spaghetti Italiano",
      category: "SPAGHETTI",
      info: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.text15}>Customer Detail</h1>
      <p className={styles.text16}>Here your Customer Detail Profile</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 70,
        }}
      >
        <img style={{ marginRight: 30 }} src="/tort.png" alt="" />
        <div
          style={{
            marginRight: 200,
            background: "#f4f4f4",
            width: "972px",
            height: "293px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1
              style={{
                marginRight: 140,
                marginTop: "70px",
                marginLeft: "30px",
              }}
            >
              Eren Yeager
            </h1>
            <img style={{ marginRight: 20 }} src="../info.png" alt="" />
            <img src="/edit.png" alt="" />
          </div>
          <h2
            style={{ color: "#00B074", marginBottom: 20, marginLeft: "30px" }}
          >
            UX Designer
          </h2>
          <p style={{ color: "#A3A3A3", marginBottom: 20, marginLeft: "30px" }}>
            St. Kings Road 57th, Garden Hills, Chelsea - London
          </p>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: 30, marginLeft: "30px" }}>
              eren.yeager@mail.co.id
            </p>
            <p style={{ marginRight: 30 }}>+012 345 6789</p>
            <p>Highspeed Studios</p>
          </div>
        </div>
        <div className="back">
          <p style={{ marginBottom: 30, marginTop: 10 }}>Your Balance</p>
          <h1 style={{ marginBottom: 20 }}>$ 9,425</h1>
          <div style={{ display: "flex" }}>
            <h3 style={{ marginRight: 200, marginBottom: 70 }}>
              2451 **** **** ****
            </h3>
            <h3>02/21</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 250 }}>
              <p style={{ marginBottom: 15 }}>Name</p>
              <h3>Eren Yeager</h3>
            </div>
            <img src="/master.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Most Ordered Food</h3>
          {foods.map((item) => (
            <div key={item.id} className={styles.foodItem}>
              <div className={styles.foodItemLeft}>
                <div className={styles.foodImg}></div>
                <div>
                  <strong>{item.name}</strong>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                    {item.category} • {item.info}
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
            style={{ textAlign: "right", fontSize: "14px", marginTop: "10px" }}
          ></p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <img src="../chart.png" alt="" />
        </div>
      </div>
    </div>
  );
}
