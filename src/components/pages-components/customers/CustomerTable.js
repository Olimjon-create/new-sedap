import React from "react";
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
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
          style={{
            height: "70px",
            backgroundColor: "white",
            cursor: "pointer",
            borderBottom: "1px solid #ddd",
          }}
          onClick={() => goToDetails(item.userId)}
        >
          <td style={{ padding: "0 40px", textAlign: "left" }}>
            #C-{item.userId}
          </td>
          <td style={{ padding: "0 40px", textAlign: "left" }}>{item.date}</td>
          <td style={{ padding: "0 40px", textAlign: "left" }}>
            {item.userName}
          </td>
          <td style={{ padding: "0 40px", textAlign: "left" }}>
            {item.location}
          </td>
          <td style={{ padding: "0 40px", textAlign: "center" }}>
            ${item.amount}
          </td>
          <td
            style={{
              padding: "0 40px",
              backgroundColor: "#4642551a",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            ${item.lastAmount}
          </td>
        </tr>
      ))}
    </>
  );
}

export default function CustomerTable() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <table
        style={{
          fontFamily: "'Barlow', sans-serif",
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr
            style={{
              height: "70px",
              backgroundColor: "#2d9cdb",
              color: "white",
              textAlign: "left",
            }}
          >
            {[
              "Customer ID",
              "Join Date",
              "Customer Name",
              "Location",
              "Total Spent",
              "Last Order",
            ].map((title) => (
              <th
                key={title}
                style={{ padding: "0 40px", fontWeight: "normal" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
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
    </div>
  );
}
