import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/OrderDetail.module.css";

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
  const orderItems = [
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
  ];

  return (
    <>
      <div className={styles.live}>
        <div className={styles.inputCustomerSearch}>
          <div className={styles.search}>
            <input type="search" placeholder="Search here" />
          </div>
          <div className={styles.iconSearch}>
            <Image
              className={styles.imgTag}
              src="/alarmClock.png"
              alt="Search"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.iconSearch}>
            <Image
              className={styles.imgTag}
              src="/message.png"
              alt="List"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.iconSearch}>
            <Image
              className={styles.imgTag}
              src="/price.png"
              alt="Price"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.iconSearch}>
            <Image
              className={styles.imgTag}
              src="/settings.png"
              alt="Settings"
              width={28}
              height={28}
            />
          </div>

          <div className={styles.writeName}>
            <p className={styles.customerText}>Hello, Samantha</p>
          </div>
          <div className={styles["borders"]}></div>
        </div>
      </div>

      <Box className={styles.YourOrders}>
        <Box className={styles.yourDetail}>
          <Typography variant="h5" className={styles.texts6}>
            Order ID #5552351
          </Typography>
          <Typography variant="body2" className={styles.texts7}>
            Orders / Orders / Order Details
          </Typography>
        </Box>

        <Box className={styles.yourDetails}>
          <Button variant="outlined" color="error" className={styles.btn}>
            Cancel Order
          </Button>
          <Button variant="contained" color="success" className={styles.btn1}>
            On Delivery
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} className={styles.tableWrapper}>
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
                <strong>Total Price</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemCategory}>{item.category}</div>
                    <div className={styles.itemName}>{item.name}</div>
                    <div className={styles.rating}>⭐ ⭐ ⭐ ⭐</div>
                  </div>
                </TableCell>
                <TableCell>{item.qty}x</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>${item.totalPrice.toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton className={styles.remove}>
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className={styles.borderline}>
        <Image
          className={styles.mright}
          src="/map.png"
          width={760}
          height={380}
          alt="map"
        />
        <Typography variant="subtitle1" className={styles.fontSize}>
          Delivery by
        </Typography>

        <Box className={styles.df}>
          <Image src="/grayraur.png" width={60} height={60} alt="rider" />
          <Box className={styles.mtoptxt}>
            <Typography>Kevin Hobs Jr.</Typography>
            <Typography>ID - 412455</Typography>
          </Box>

          <Box className={styles.df22}>
            <PhoneIcon className={styles.mleft_img} />
            <Box className={styles.mleft}>
              <Link href="https://github.com/">Call</Link>
              <Typography>+12 345 5662 66</Typography>
            </Box>
          </Box>

          <Box className={styles.df12}>
            <StoreIcon className={styles.mleft_img} />
            <Box className={styles.mleft}>
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
