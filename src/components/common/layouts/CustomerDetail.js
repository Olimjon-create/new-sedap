import React from "react";
import styles from "../../../styles/customerDetail.module.css";

export default function CustomerDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Customer Detail</h1>
        <span>Hello, Samantha</span>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.profileCard}>
          <div className={styles.profilePic}></div>
          <div className={styles.profileInfo}>
            <h2>Eren Yeager</h2>
            <p className={styles.jobTitle}>UX Designer</p>
            <p>St. King’s Road Street, Garden Hill, Chelsea - London</p>
            <div className={styles.tags}>
              <span>eren.yeager@mail.co.id</span>
              <span>+012 345 6789</span>
              <span>Highspeed Studios</span>
            </div>
          </div>
        </div>

        <div className={styles.balanceCard}>
          <div>
            <p>Your Balance</p>
            <h2>$9,425</h2>
            <p>2451 ** **</p>
          </div>
          <div className={styles.balanceBottom}>
            <p>02/21</p>
            <p>Eren Yeager</p>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Most Ordered Food</h3>
          <div className={styles.orderItem}>
            <div className={styles.orderLeft}>
              <div className={styles.orderImg}></div>
              <div className={styles.orderText}>
                <p>Medium Spicy Spaghetti Italiano</p>
                <small>Spaghetti | 3 dishes</small>
              </div>
            </div>
            <p>$12.56</p>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Most Liked Food</h3>
          <div className={styles.chart}>
            <div className={styles.chartLabel}>
              <div className={styles.bar} style={{ height: "32px" }}></div>
              <span>Sun</span>
            </div>
            <div className={styles.chartLabel}>
              <div className={styles.bar} style={{ height: "48px" }}></div>
              <span>Mon</span>
            </div>
            <div className={styles.chartLabel}>
              <div className={styles.bar} style={{ height: "64px" }}></div>
              <span>Tue</span>
            </div>
            <div className={styles.chartLabel}>
              <div className={styles.bar} style={{ height: "56px" }}></div>
              <span>Wed</span>
            </div>
            <div className={styles.chartLabel}>
              <div className={styles.bar} style={{ height: "72px" }}></div>
              <span>Thu</span>
            </div>
            <div className={styles.chartLabel}>
              <div className={styles.bar} style={{ height: "96px" }}></div>
              <span>Fri</span>
            </div>
            <div className={styles.chartLabel}>
              <div className={styles.bar} style={{ height: "120px" }}></div>
              <span>Sat</span>
            </div>
          </div>
          <div className={styles.likesInfo}>763 Likes • Jan 23rd, 2020</div>
        </div>
      </div>
    </div>
  );
}
