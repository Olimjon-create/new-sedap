import React from "react";
import styles from "../styles/Dashboard.module.css";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.navSection_left}>
          <h1 className={styles.nameDashboard}>Dashboard</h1>
          <p className={styles.nameDashboard2}>
            Hi, Samantha. Welcome back to Sedap Admin!
          </p>
        </div>
        <div className={styles.navSection_right}>
          <button className={styles.Dashboard_btn}>
            <img src="./img/Icon (4).png" alt="icon1" />
            Filter Periode <br />
            17 April 2020 - 21 May 2020
            <img src="./img/Icon (5).png" alt="icon2" />
          </button>
        </div>
      </div>

      <div className={styles.black}>
        {[...Array(4)].map((_, index) => (
          <div className={styles.Total_About} key={index}>
            <div className={styles.Total_Orders}>
              <div className={styles.img_src}>
                <Image
                  className={styles.Total_img}
                  src="./img/Icon_Order.svg"
                  alt="order icon"
                />
              </div>
              <div className={styles.Text_Orders}>
                <h2 className={styles.your_text}>75</h2>
                <p className={styles.your_text2}>Total Orders</p>
                <h2 className={styles.percentage}>
                  <Image
                    className={styles.Total_img2}
                    src="./img/Icon (6).png"
                    alt="percentage icon"
                  />
                  4% (30 days)
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
