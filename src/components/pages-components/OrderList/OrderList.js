import React from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "30px 0 20px 80px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              margin: 0,
            }}
          >
            Your Orders
          </h1>
          <p style={{ fontSize: "16px", color: "#777" }}>
            This is your order list data
          </p>
        </div>
        <div>
          <button style={buttonStyle}>All Status</button>
          <button
            style={{ ...buttonStyle, marginLeft: "10px", marginTop: "30px" }}
          >
            Today
          </button>
        </div>
      </div>

      <div style={{ width: "100%", overflowX: "auto", marginLeft: "80px" }}>
        <Grid
          container
          spacing={2}
          style={{
            padding: "10px 0",
            borderBottom: "2px solid #ccc",
            display: "flex",
            whiteSpace: "nowrap",
          }}
        >
          {columns.map((col) => (
            <Grid item xs={2} key={col.id} style={{ minWidth: "120px" }}>
              <p style={{ fontWeight: "bold" }}>{col.name}</p>
            </Grid>
          ))}
        </Grid>

        {orders.map((order, idx) => (
          <GridRow key={idx + order.id} item={order} router={router} />
        ))}
      </div>
    </>
  );
}

function GridRow({ item, router }) {
  const goToDetails = (id) => {
    router.push(`/orders/${id}`);
  };

  const getStatusStyle = (status) => {
    const baseStyle = {
      width: "150px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "15px",
      fontWeight: "bold",
    };
    if (status === "On Delivery") {
      return { ...baseStyle, backgroundColor: "#2d9cdb26", color: "#2d9cdb" };
    }
    if (status === "New Order") {
      return { ...baseStyle, backgroundColor: "#ff6d4d1a", color: "#ff6d4d" };
    }
    return { ...baseStyle, backgroundColor: "#00b07426", color: "#177556" };
  };

  return (
    <Grid
      container
      spacing={2}
      onClick={() => goToDetails(item.id)}
      style={{
        cursor: "pointer",
        padding: "10px 0",
        borderBottom: "1px solid #eee",
        alignItems: "center",
        display: "flex",
        whiteSpace: "nowrap",
      }}
    >
      <Grid item xs={2} style={{ minWidth: "120px" }}>{`#${item.id}`}</Grid>
      <Grid item xs={2} style={{ minWidth: "120px" }}>
        {item.date}
      </Grid>
      <Grid item xs={2} style={{ minWidth: "120px" }}>
        {item.customer.name}
      </Grid>
      <Grid item xs={2} style={{ minWidth: "120px" }}>
        {item.location}
      </Grid>
      <Grid item xs={2} style={{ minWidth: "120px" }}>{`$${item.amount}`}</Grid>
      <Grid item xs={2} style={{ minWidth: "120px" }}>
        <div style={getStatusStyle(item.status)}>{item.status}</div>
      </Grid>
    </Grid>
  );
}

const buttonStyle = {
  width: "212px",
  height: "68px",
  borderRadius: "12px",
  padding: "22px 16px",
  border: "none",
  outline: "none",
  backgroundColor: "#f4f4f4",
  fontFamily: "sans-serif",
  fontSize: "16px",
  color: "#3e4954",
};
