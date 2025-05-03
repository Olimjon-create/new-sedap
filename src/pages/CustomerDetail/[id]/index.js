import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";

export default function CustomerDetail() {
  const foods = [
    {
      id: 1,
      name: "Medium Spicy Spaghetti Italiano",
      category: "SPAGHETTI",
      info: "Serves for 4 Persons, 24mins",
      price: "$12.56",
    },
    {
      id: 2,
      name: "Cheesy Baked Macaroni",
      category: "PASTA",
      info: "Serves for 3 Persons, 20mins",
      price: "$11.99",
    },
    {
      id: 3,
      name: "Grilled Chicken Pizza",
      category: "PIZZA",
      info: "Serves for 2 Persons, 18mins",
      price: "$14.50",
    },
    {
      id: 4,
      name: "Classic Cheeseburger",
      category: "BURGER",
      info: "Serves for 1 Person, 15mins",
      price: "$9.00",
    },
    {
      id: 5,
      name: "Refreshing Sprite",
      category: "DRINK",
      info: "500ml, Cold",
      price: "$2.99",
    },
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const randomOrders = days.map(() => Math.floor(Math.random() * 100) + 1);
    setOrders(randomOrders);
  }, []);

  const container = {
    padding: 20,
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  };

  const heading = {
    fontSize: 28,
    fontWeight: "bold",
  };

  const subHeading = {
    fontSize: 16,
    color: "gray",
  };

  const profileSection = {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    marginBottom: 40,
  };

  const profileCard = {
    background: "#fff",
    flex: "1 1 550px",
    borderRadius: 10,
    padding: 30,
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
  };

  const profileName = { fontSize: 32, fontWeight: 600 };
  const jobTitle = { color: "#00b074", fontSize: 18, marginBottom: 8 };
  const address = { color: "#888", fontSize: 14, marginBottom: 20 };
  const contactInfo = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
    color: "#444",
  };

  const card = {
    backgroundColor: "#00b074",
    color: "#fff",
    flex: "1 1 300px",
    borderRadius: 10,
    padding: 30,
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
  };

  const cardLabel = { fontSize: 14 };
  const cardAmount = { fontSize: 32, fontWeight: "bold", margin: "10px 0" };

  const cardInfo = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 16,
  };

  const cardHolder = { marginTop: 20 };

  const cardWrapper = {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    marginTop: 30,
  };

  const statCard = {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
    minWidth: 300,
  };

  const foodItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  };

  const foodImg = {
    width: 48,
    height: 48,
    backgroundColor: "#dfe6e9",
    borderRadius: 10,
  };

  const foodDetails = {
    display: "flex",
    gap: 10,
    alignItems: "center",
  };

  const loremText = {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  };

  const statsImg = {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 12,
    marginTop: 10,
  };

  const DayList = {
    display: "flex",
    gap: 10,
    marginTop: 16,
    padding: 0,
    listStyle: "none",
    flexWrap: "wrap",
  };

  const DayItem = {
    fontSize: 14,
    color: "#3e4954",
  };

  return (
    <div style={container}>
      <h1 style={heading}>Customer Detail</h1>
      <p style={subHeading}>Here is your Customer Detail Profile</p>

      <div style={profileSection}>
        <div style={profileCard}>
          <h2 style={profileName}>Eren Yeager</h2>
          <h3 style={jobTitle}>UX Designer</h3>
          <p style={address}>
            St. Kings Road 57th, Garden Hills, Chelsea - London
          </p>
          <div style={contactInfo}>
            <img src="/send.png" alt="email" width={16} height={16} />
            <span>eren.yeager@mail.co.id</span>
            <img src="/phone.png" alt="phone" width={16} height={16} />
            <span>+012 345 6789</span>
            <img src="/redSenf.png" alt="company" width={16} height={16} />
            <span>Highspeed Studios</span>
          </div>
        </div>

        <div style={card}>
          <p style={cardLabel}>Your Balance</p>
          <h1 style={cardAmount}>$9,425</h1>
          <div style={cardInfo}>
            <span>2451 **** **** ****</span>
            <span>02/21</span>
          </div>
          <div style={cardHolder}>
            <p>Name</p>
            <h3>Eren Yeager</h3>
          </div>
        </div>
      </div>

      <div style={cardWrapper}>
        <div style={statCard}>
          <h3>Most Ordered Food</h3>
          <p style={loremText}>Lorem ipsum dolor sit amet</p>
          {foods.map((item) => (
            <div key={item.id} style={foodItem}>
              <div style={foodDetails}>
                <div style={foodImg}></div>
                <div>
                  <strong>{item.name}</strong>
                  <p style={{ fontSize: 12, color: "#888" }}>
                    {item.category} • {item.info}
                  </p>
                </div>
              </div>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <div style={statCard}>
          <h3>Most Liked Food</h3>
          <p style={loremText}>Lorem ipsum dolor sit amet</p>
          <img style={statsImg} src="../stats.png" alt="stats" />
          <ul style={DayList}>
            {days.map((day, i) => (
              <li key={i} style={DayItem}>
                {day}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

CustomerDetail.getLayout = (pageProps) => (
  <MainLayout>
    <CustomerDetail {...pageProps} />
  </MainLayout>
);
