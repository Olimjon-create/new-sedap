import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Customer.module.css";

function Customer(props) {
  const arr = [
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
      buttonPrice: "$35.35",
    },
    {
      id: 2,
      name: "#C-004561",
      titleName: "28 March 2020, 12:42 AM",
      nameSelectName: "Rio Da Luca",
      nameSectionName: "Emerald Tower 6th, London",
      priceTitle: "$8.90",
      ImageTitle: "/border.png",
      buttonPrice: "$16.75",
    },
  ];

  return (
    <div>
      <div className={styles.headers}>
        <div className={styles.Customer}>
          <h1 className={styles.text}>General Customer</h1>
          <p className={styles.text1}>
            Here is your general customers list data
          </p>
        </div>
        <div className={styles.CustomerSection}>
          <button className={styles.btn} aria-label="Filter customers">
            <Image
              className={styles.photos}
              src="/Nest.png"
              alt="Filter"
              width={16}
              height={16}
            />
            Filter
            <Image
              className={styles.photo}
              src="/stay.png"
              alt="Stay"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      <div className={styles.Section}>
        <div className={styles.Select}>
          <ul>
            <li>Customer ID</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
            <li>Join Date</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
          </ul>
        </div>
        <div className={styles.Select}>
          <ul>
            <li>Customer Name</li>
            <li>Location</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
          </ul>
        </div>
        <div className={styles.Select}>
          <ul>
            <li>Total Spent</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
            <li>Last Order</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
          </ul>
        </div>
      </div>

      {arr.map((item) => (
        <div className={styles.Option} key={item.id}>
          <div className={styles.Value}>
            <ul>
              <li className={styles.text3}>{item.name}</li>
              <li className={styles.text4}>{item.titleName}</li>
            </ul>
          </div>
          <div className={styles.Value}>
            <ul>
              <li className={styles.text5}>{item.nameSelectName}</li>
              <li className={styles.text4}>{item.nameSectionName}</li>
            </ul>
          </div>
          <div className={styles.Value}>
            <ul>
              <li className={styles.text4}>{item.priceTitle}</li>
              <li>
                <button className={styles.btn2}>{item.buttonPrice}</button>
                <Image
                  className={styles.picture}
                  src={item.ImageTitle}
                  alt="Border Image"
                  width={16}
                  height={16}
                />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Customer;
