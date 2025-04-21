import React, { useEffect, useState } from "react";
import styles from "../../../styles/customerDetail.module.css";
import { Grid } from "@mui/material";

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
      name: "Cheesy Baked Macaroni",
      category: "PASTA",
      info: "Serves for 3 Persons, 20mins",
      price: "$11.99",
    },
    {
      id: 3,
      name: "Grilled Chicken Pizza",
      category: "PIZZA",
      info: "Serves for 2 Persons, 18mins",
      price: "$14.50",
    },
    {
      id: 4,
      name: "Classic Cheeseburger",
      category: "BURGER",
      info: "Serves for 1 Person, 15mins",
      price: "$9.00",
    },
    {
      id: 5,
      name: "Refreshing Sprite",
      category: "DRINK",
      info: "500ml, Cold",
      price: "$2.99",
    },
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const randomOrders = days.map(() => Math.floor(Math.random() * 100) + 1);
    setOrders(randomOrders);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text15}>Customer Detail</h1>
      <p className={styles.text16}>Here is your Customer Detail Profile</p>

      <div className={styles.profileSection}>
        <div className={styles.profileCard}>
          <h1 className={styles.profileName}>Eren Yeager</h1>
          <h2 className={styles.jobTitle}>UX Designer</h2>
          <p className={styles.address}>
            St. Kings Road 57th, Garden Hills, Chelsea - London
          </p>
          <div className={styles.contactInfo}>
            <img className={styles.icon} src="/send.png" alt="email" />
            <p>eren.yeager@mail.co.id</p>
            <img className={styles.icon} src="/phone.png" alt="phone" />
            <p>+012 345 6789</p>
            <img className={styles.icon} src="/redSenf.png" alt="company" />
            <p>Highspeed Studios</p>
          </div>
        </div>

        <Grid container spacing={2} className={styles.back}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div className={styles.balanceCard}>
              <p className={styles.balanceLabel}>Your Balance</p>
              <h1 className={styles.balanceAmount}>$9,425</h1>
              <div className={styles.cardInfo}>
                <h3>2451 **** **** ****</h3>
                <h3>02/21</h3>
              </div>
              <div className={styles.cardHolder}>
                <p>Name</p>
                <h3>Eren Yeager</h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <h3>Most Ordered Food</h3>
          <p className={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          {foods.map((item) => (
            <div key={item.id} className={styles.foodItem}>
              <div className={styles.foodItemLeft}>
                <div className={styles.foodImg}></div>
                <div>
                  <strong>{item.name}</strong>
                  <p className={styles.foodInfo}>
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
          <p className={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <img className={styles.statsImg} src="../stats.png" alt="stats" />
          <div className={styles.Days}>
            <div className={styles.DayLeft}>
              <ul>
                {days.map((day, index) => (
                  <li key={index}>{day}</li>
                ))}
              </ul>
            </div>
            <div className={styles.DayRight}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
