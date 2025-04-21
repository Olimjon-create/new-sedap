import React from "react";
import styles from "../../../styles/foods.module.css";
import Image from "next/image";
import Link from "next/link";
import { StyleRegistry } from "styled-jsx";
import MainLayout from "@/components/common/layouts/MainLayout";

const foods = [
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
  },
  {
    id: 3,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
  },
  {
    id: 4,
    name: "Spicy Mozarella with Barbeque",
    category: "Food / Noodle",
  },
  {
    id: 5,
    name: "Sprite Flavour with Avocado Juice",
    category: "Drink / Sprite",
  },
  {
    id: 6,
    name: "Burger Jumbo Special With Spicy",
    category: "Food / Burger",
  },
  {
    id: 7,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
  },
  {
    id: 8,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
  },
];

function Foods() {
  return (
    <div>
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
                  <Image
                    className={styles.imgTag}
                    src="/view.png"
                    alt="Price"
                    width={28}
                    height={28}
                  />
                  <p>views</p>
                </div>
                <div className={styles["food_button"]}>
                  <Image
                    className={styles.imgTag}
                    src="/stories.png"
                    alt="Price"
                    width={28}
                    height={28}
                  />
                  <p>Edit</p>
                </div>
                <div className={styles["food_button"]}>
                  <Image
                    className={styles.imgTag}
                    src="/delete.png"
                    alt="Price"
                    width={28}
                    height={28}
                  />
                  <p>Delete</p>
                </div>
                <div className={styles["food_button"]}>
                  <Image
                    className={styles.imgTag}
                    src="/dublicate.png"
                    alt="Price"
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
    </div>
  );
}

Foods.getLayout = (pageProps) => (
  <MainLayout>
    <Foods {...pageProps} />
  </MainLayout>
);

export default Foods;
