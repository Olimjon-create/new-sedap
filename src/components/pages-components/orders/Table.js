import React from "react";
import styles from "@/styles/order.module.css";
import orderListData from "./Data";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Table() {
  return (
    <table className={styles["table"]}>
      <thead>
        <tr className={styles["tr"]}>
          <th className={styles["th"]}>
            <div>
              <p>Order ID</p>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/Vector1.png"
                  alt="Vector1"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/Vector2.png"
                  alt="Vector2"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <TableMap />
      </tbody>
    </table>
  );
}

function TableMap() {
  const route = useRouter();
  const navigateToOrderDetails = (id) => {
    route.push(`/orders/${id}`);
  };

  return (
    <>
      {orderListData.map((item, index) => (
        <tr
          key={`${item.userId}-${index}`}
          className={styles["tr2"]}
          onClick={() => navigateToOrderDetails(item.userId)}
        >
          <td className={styles["td"]}>#{item.userId}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.userName}</td>
          <td className={styles["td"]}>{item.location}</td>
          <td className={styles["td"]}>${item.amount}</td>
          <td className={styles["td"]}>
            {item.status === "On Delivery" && (
              <div className={styles["onDelivery"]}>{item.status}</div>
            )}
            {item.status === "New Order" && (
              <div className={styles["newOrder"]}>{item.status}</div>
            )}
            {item.status === "Delivered" && (
              <div className={styles["delivered"]}>{item.status}</div>
            )}
          </td>
        </tr>
      ))}
    </>
  );
}
