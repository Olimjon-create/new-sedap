import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from "../../styles/foods.module.css";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogContentText from "@mui/material/DialogContentText";

const initialFoods = [
  {
    id: 1,
    name: "Spicy Mozarella with Barbeque",
    category: "Food / Noodle",
    href: "#",
  },
  {
    id: 2,
    name: "Burger Jumbo Special With Spicy",
    category: "Food / Burger",
    href: "#",
  },
  {
    id: 3,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
    href: "#",
  },
  {
    id: 4,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
    href: "#",
  },
  {
    id: 5,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
    href: "#",
  },
  {
    id: 6,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
    href: "#",
  },
];

export default function New() {
  const [foods, setFoods] = useState(initialFoods);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleDeleteClick = (food) => {
    setSelectedFood(food);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFood(null);
  };

  const handleConfirmDelete = () => {
    setFoods((prevFoods) =>
      prevFoods.filter((food) => food.id !== selectedFood.id)
    );
    setOpenDialog(false);
    setSelectedFood(null);
  };

  return (
    <>
      <Head>
        <title>Foods List</title>
        <meta name="description" content="Manage your food items" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.live}>
          <div className={styles.inputCustomerSearch}></div>
          <div className="colum">
            <h1 className={styles.text8}>Foods</h1>
            <p className={styles.text9}>
              Here is your menus summary with graph view
            </p>
          </div>
        </div>

        <div className={styles["food-cards"]}>
          {foods.map((food) => (
            <Link key={food.id} href={food.href || "#"} passHref>
              <div className={styles["card_button"]}>
                <div className={styles["radius_button"]}></div>
                <h1 className={styles["text_5"]}>{food.name}</h1>
                <p className={styles["text_6"]}>
                  <span className={styles["text_7"]}>Food</span> {food.category}
                </p>
                <div className={styles["ddd"]}>
                  <div className={styles["food_button"]}>
                    <Image src="/view.png" alt="View" width={28} height={28} />
                    <p>views</p>
                  </div>
                  <div className={styles["food_button"]}>
                    <Image
                      src="/stories.png"
                      alt="Edit"
                      width={28}
                      height={28}
                    />
                    <p>Edit</p>
                  </div>
                  <div
                    className={styles["food_button"]}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteClick(food);
                    }}
                  >
                    <Image
                      src="/delete.png"
                      alt="Delete"
                      width={28}
                      height={28}
                    />
                    <p>Delete</p>
                  </div>
                  <div className={styles["food_button"]}>
                    <Image
                      src="/dublicate.png"
                      alt="Duplicate"
                      width={28}
                      height={28}
                    />
                    <p>Duplicate</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete the item{" "}
              <strong>{selectedFood?.name}</strong>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

New.getLayout = (pageProps) => (
  <MainLayout>
    <New {...pageProps} />
  </MainLayout>
);
