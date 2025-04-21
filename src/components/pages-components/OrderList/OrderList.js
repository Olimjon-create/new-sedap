import React from "react";
import styles from "../../../styles/OrderList.module.css";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function GridTable() {
  const router = useRouter();

  const columns = [
    { id: "0", name: "Order ID" },
    { id: "1", name: "Date" },
    { id: "2", name: "Customer Name" },
    { id: "3", name: "Location" },
    { id: "4", name: "Amount" },
    { id: "5", name: "Status Order" },
  ];

  const orders = [
    {
      id: "5678",
      date: "2025-04-13",
      customer: { name: "Jane Smith" },
      location: "Los Angeles",
      amount: 180,
      status: "New Order",
    },
    {
      id: "9101",
      date: "2025-04-12",
      customer: { name: "Alex Johnson" },
      location: "Chicago",
      amount: 99,
      status: "On Delivery",
    },
    {
      id: "1234",
      date: "2025-04-14",
      customer: { name: "John Doe" },
      location: "New York",
      amount: 250,
      status: "Delivered",
    },

    {
      id: "5678",
      date: "2025-04-13",
      customer: { name: "Jane Smith" },
      location: "Los Angeles",
      amount: 180,
      status: "New Order",
    },
    {
      id: "9101",
      date: "2025-04-12",
      customer: { name: "Alex Johnson" },
      location: "Chicago",
      amount: 99,
      status: "On Delivery",
    },
    {
      id: "1234",
      date: "2025-04-14",
      customer: { name: "John Doe" },
      location: "New York",
      amount: 250,
      status: "Delivered",
    },
    {
      id: "9101",
      date: "2025-04-12",
      customer: { name: "Alex Johnson" },
      location: "Chicago",
      amount: 99,
      status: "On Delivery",
    },
  ];

  return (
    <>
      <div className={styles.blass}>
        <div className={styles.bllas_left}>
          <h1 className={styles.text14}>Your Orders</h1>
          <p className={styles.text15}>This is your order list data</p>
        </div>
        <div className={styles.bllas_right}>
          <button className={styles.btn1}>All Status</button>
          <button className={styles.btn2}>Today</button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <Grid
          container
          className={styles.gridHeader}
          spacing={2}
          style={{ padding: "10px 0", borderBottom: "2px solid #ccc" }}
        >
          {columns.map((col) => (
            <Grid item xs={2} key={col.id}>
              <p style={{ fontWeight: "bold" }}>{col.name}</p>
            </Grid>
          ))}
        </Grid>

        {orders.map((order) => (
          <GridRow key={order.id} item={order} router={router} />
        ))}
      </div>
    </>
  );
}

function GridRow({ item, router }) {
  const goToDetails = (id) => {
    router.push(`/orders/${id}`);
  };

  return (
    <Grid
      container
      spacing={2}
      className={styles.gridRow}
      onClick={() => goToDetails(item.id)}
      style={{
        cursor: "pointer",
        padding: "10px 0",
        borderBottom: "1px solid #eee",
        alignItems: "center",
      }}
    >
      <Grid item xs={2}>{`#${item.id}`}</Grid>
      <Grid item xs={2}>
        {item.date}
      </Grid>
      <Grid item xs={2}>
        {item.customer.name}
      </Grid>
      <Grid item xs={2}>
        {item.location}
      </Grid>
      <Grid item xs={2}>{`$${item.amount}`}</Grid>
      <Grid item xs={2}>
        <div
          className={
            item.status === "On Delivery"
              ? styles.onDelivery
              : item.status === "New Order"
              ? styles.newOrder
              : styles.delivered
          }
        >
          {item.status}
        </div>
      </Grid>
    </Grid>
  );
}
