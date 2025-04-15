import React from "react";
import styles from "@/styles/customers.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const customerData = [
  {
    userId: 101,
    date: "2024-04-01",
    userName: "Jane Doe",
    location: "New York",
    amount: 500.0,
    lastAmount: 75.0,
  },
  {
    userId: 102,
    date: "2024-03-20",
    userName: "John Smith",
    location: "Los Angeles",
    amount: 300.0,
    lastAmount: 50.0,
  },
  {
    userId: 103,
    date: "2024-02-10",
    userName: "Olimjon Xamraqulov",
    location: "Jizzax",
    amount: 700.0,
    lastAmount: 120.0,
  },
  {
    userId: 103,
    date: "2024-02-10",
    userName: "Olimjon Xamraqulov",
    location: "Jizzax",
    amount: 700.0,
    lastAmount: 120.0,
  },
  {
    userId: 103,
    date: "2024-02-10",
    userName: "Olimjon Xamraqulov",
    location: "Tashkent",
    amount: 700.0,
    lastAmount: 120.0,
  },
];

function SortIcons() {
  return (
    <div className={styles.iconContainer}>
      <Image src="/Vector1.png" alt="Sort Ascending" width={20} height={20} />
      <Image src="/Vector2.png" alt="Sort Descending" width={20} height={20} />
    </div>
  );
}

function TableMap() {
  const router = useRouter();

  const goToDetails = (id) => {
    router.push(`/CustomerDetail/${id}`);
  };

  return (
    <>
      {customerData.map((item) => (
        <tr
          key={item.userId}
          className={styles.tr2}
          style={{ cursor: "pointer" }}
          onClick={() => goToDetails(item.userId)}
        >
          <td className={styles.td}>#C-{item.userId}</td>
          <td className={styles.td}>{item.date}</td>
          <td className={styles.td}>{item.userName}</td>
          <td className={styles.td}>{item.location}</td>
          <td className={styles.td1}>${item.amount}</td>
          <td className={styles.td12}>${item.lastAmount}</td>
        </tr>
      ))}
    </>
  );
}

export default function CustomerTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {[
            "Customer ID",
            "Join Date",
            "Customer Name",
            "Location",
            "Total Spent",
            "Last Order",
          ].map((title) => (
            <th key={title} className={styles.th}>
              <div>
                <p>{title}</p>
                <SortIcons />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableMap />
      </tbody>
    </table>
  );
}
