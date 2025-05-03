import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import StoreIcon from "@mui/icons-material/Store";

function OrderDetail() {
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      category: "MAIN COURSE",
      name: "Watermelon juice with ice",
      qty: 5,
      price: 10.8,
      totalPrice: 54.0,
    },
    {
      id: 2,
      category: "MAIN COURSE",
      name: "Watermelon juice with ice",
      qty: 5,
      price: 10.8,
      totalPrice: 54.0,
    },
    {
      id: 3,
      category: "MAIN COURSE",
      name: "Watermelon juice with ice",
      qty: 5,
      price: 10.8,
      totalPrice: 54.0,
    },
  ]);

  const removeItem = (id) => {
    setOrderItems(orderItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",

          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div>
            <input
              type="search"
              placeholder="Search here"
              style={{
                width: "1468px",
                height: "56px",
                maxWidth: "500px",
                height: "56px",
                borderRadius: "8px",
                paddingLeft: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
                backgroundColor: "#fff",
                marginTop: "30px",
                margin: "0px 60px",
              }}
            />
          </div>
          {[
            "/alarmClock.png",
            "/message.png",
            "/price.png",
            "/settings.png",
          ].map((src, idx) => (
            <div
              key={idx}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                marginLeft: "10px",
                backgroundColor: "#2d9cdb26",
              }}
            >
              <Image
                className="imgTag"
                src={src}
                alt="Search"
                width={28}
                height={28}
              />
            </div>
          ))}
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "16px",
                color: "#464255",
                marginTop: "-20px",
                cursor: "pointer",
              }}
            >
              Hello, Samantha
            </p>
          </div>
        </div>
      </div>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1060px",
          margin: "30px auto",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
          margin: "0px 60px",
          marginTop: "30px",
        }}
      >
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            style={{ fontSize: "24px", color: "#2d3436", marginBottom: "6px" }}
          >
            Order ID #5552351
          </Typography>
          <Typography
            variant="body2"
            style={{ fontSize: "14px", color: "#636e72" }}
          >
            Orders / Orders / Order Details
          </Typography>
        </Box>

        <Box
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            color="error"
            style={{
              width: "234px",
              height: "58px",
              color: "#ff5b5b",
              padding: "10px 20px",
              fontSize: "14px",
              border: "none",
              borderRadius: "6px",
              border: "2px solid #ff5b5b",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
          >
            Cancel Order
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{
              width: "234px",
              height: "58px",
              backgroundColor: "#00b894",
              color: "#ffffff",
            }}
          >
            On Delivery
          </Button>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        style={{
          maxWidth: "1060px",
          margin: "20px auto",
          border: "2px solid #00b894",
          borderRadius: "10px",
          margin: "0px 60px",
          overflow: "hidden",
          marginTop: "30px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Items</strong>
              </TableCell>
              <TableCell>
                <strong>Qty</strong>
              </TableCell>
              <TableCell>
                <strong>Price</strong>
              </TableCell>
              <TableCell>
                <strong>Total Price</strong>
              </TableCell>
              <TableCell>
                <strong>Remove</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        color: "#00b894",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {item.category}
                    </div>
                    <div style={{ fontWeight: "bold", margin: "5px 0" }}>
                      {item.name}
                    </div>
                    <div style={{ color: "#636e72", fontSize: "12px" }}>
                      ⭐ ⭐ ⭐ ⭐
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.qty}x</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>${item.totalPrice.toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => removeItem(item.id)}
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        style={{
          backgroundColor: "#f0f8ff",
          padding: "20px",
          borderRadius: "10px",
          margin: "30px auto",
          width: "100%",
          maxWidth: "1060px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          margin: "0px 60px",
          marginTop: "30px",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
          src="/map.png"
          width={760}
          height={380}
          alt="map"
        />
        <Typography
          variant="subtitle1"
          style={{
            fontSize: "22px",
            fontWeight: "600",
            margin: "20px 0",
            color: "#2c3e50",
          }}
        >
          Delivery by
        </Typography>

        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Image src="/grayraur.png" width={60} height={60} alt="rider" />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography>Kevin Hobs Jr.</Typography>
            <Typography>ID - 412455</Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #2d9cdb",
              padding: "10px",
              borderRadius: "10px",
              minWidth: "220px",
              backgroundColor: "#ffffff",
              flex: 1,
            }}
          >
            <PhoneIcon style={{ marginRight: "10px" }} />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link href="https://github.com/">Call</Link>
              <Typography>+12 345 5662 66</Typography>
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #2d9cdb",
              padding: "10px",
              borderRadius: "10px",
              minWidth: "220px",
              backgroundColor: "#ffffff",
              flex: 1,
            }}
          >
            <StoreIcon style={{ marginRight: "10px" }} />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography>Delivery Time</Typography>
              <Typography>12:52</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OrderDetail;
