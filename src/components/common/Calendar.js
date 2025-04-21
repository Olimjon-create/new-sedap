import React from "react";
import styles from "@/styles/order.module.css";
import Image from "next/image";
function Calendar() {
  return (
    <div>
      <div className={styles["status"]}>
        <Image src="./greencalendar.png" />
        <select>
          <option>Today</option>
          <option>Today1</option>
        </select>
      </div>
    </div>
  );
}

export default Calendar;
