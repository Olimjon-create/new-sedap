import React from "react";
import styles from "../styles/Dashboard.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
const Dashboard = () => {
  return (
    <Box>
      <Box className={styles.nav}>
        <Box className={styles.navSection_left}>
          <h1 className={styles.nameDashboard}>Dashboard</h1>
          <p className={styles.nameDashboard2}>
            Hi, Samantha. Welcome back to Sedap Admin!
          </p>
        </Box>
        <Box className={styles.navSection_right}>
          <button className={styles.Dashboard_btn}>
            <img src="./img/Icon (4).png" alt="icon1" />
            Filter Periode <br />
            17 April 2020 - 21 May 2020
            <img src="./img/Icon (5).png" alt="icon2" />
          </button>
        </Box>
      </Box>

      <Box className={styles.black}>
        {[...Array(4)].map((_, index) => (
          <Box className={styles.Total_About} key={index}>
            <Box className={styles.Total_Orders}>
              <Box className={styles.img_src}>
                <Image
                  className={styles.Total_img}
                  src="./img/Icon_Order.svg"
                  alt="order icon"
                />
              </Box>
              <Box className={styles.Text_Orders}>
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
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
