import React from "react";
import styles from "@/styles/customers.module.css";
import CustomerData from "./CustomerData";
import { useRouter } from "next/router";
import Image from "next/image";

export default function CustomerTable() {
  return (
    <table className={styles["table"]}>
      <thead>
        <tr className={styles["tr"]}>
          <th className={styles["th"]}>
            <div>
              <p>Customer ID</p>
              <div className={styles.iconContainer}>
                <Image
                  src="/Vector1.png"
                  alt="Vector Icon 1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/Vector2.png"
                  alt="Vector Icon 2"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </th>
          <th className={styles["th"]}>
            <div>
              <p>Join Date</p>
              <div className={styles.iconContainer}>
                <Image
                  src="/Vector1.png"
                  alt="Vector Icon 1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/Vector2.png"
                  alt="Vector Icon 2"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </th>
          <th className={styles["th"]}>
            <div>
              <p>Customer Name</p>
              <div className={styles.iconContainer}>
                <Image
                  src="/Vector1.png"
                  alt="Vector Icon 1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/Vector2.png"
                  alt="Vector Icon 2"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </th>
          <th className={styles["th"]}>
            <div>
              <p>Location</p>
              <div className={styles.iconContainer}>
                <Image
                  src="/Vector1.png"
                  alt="Vector Icon 1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/Vector2.png"
                  alt="Vector Icon 2"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </th>
          <th className={styles["th"]}>
            <div>
              <p>Total Spent</p>
              <div className={styles.iconContainer}>
                <Image
                  src="/Vector1.png"
                  alt="Vector Icon 1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/Vector2.png"
                  alt="Vector Icon 2"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </th>
          <th className={styles["th"]}>
            <div>
              <p>Last Order</p>
              <div className={styles.iconContainer}>
                <Image
                  src="/Vector1.png"
                  alt="Vector Icon 1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/Vector2.png"
                  alt="Vector Icon 2"
                  width={20}
                  height={20}
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
  const router = useRouter();

  const goToDetails = (id) => {
    router.push(`/${id}`);
  };

  return (
    <>
      {CustomerData.map((item) => (
        <tr
          key={item.userId}
          className={styles["tr2"]}
          style={{ cursor: "pointer" }}
          onClick={() => goToDetails(item.userId)}
        >
          <td className={styles["td"]}>#C-{item.userId}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.userName}</td>
          <td className={styles["td"]}>{item.location}</td>
          <td className={styles["td1"]}>${item.amount}</td>
          <td className={styles["td12"]}>${item.lastAmount}</td>
        </tr>
      ))}
    </>
  );
}
