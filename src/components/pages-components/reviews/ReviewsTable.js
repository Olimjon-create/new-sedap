import React from "react";
import styles from "../../../styles/Reviews.module.css";

function ReviewsTable() {
  const ReviewArr = [
    {
      name: "Chicken Curry Special with Cucumber",
      firstName: "MAIN COURSE",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      RoleName: "Roberto Jr.",
      RoleSurName: "Graphic Design",
      CategoryImg: "/star.png",
      number: "4.5",
    },
    {
      name: "Chicken Curry Special with Cucumber",
      firstName: "MAIN COURSE",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      RoleName: "Roberto Jr.",
      RoleSurName: "Graphic Design",
      CategoryImg: "/star.png",
      number: "4.5",
    },
    {
      name: "Spicy Chicken Wings",
      firstName: "APPETIZER",
      Text: "Lorem Ipsum is simply dummy text of the printing and   typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      RoleName: "Alex Doe",
      RoleSurName: "Chef",
      CategoryImg: "/star.png",
      number: "4.2",
    },
    {
      name: "Beef Steak with Potatoes",
      firstName: "MAIN COURSE",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      RoleName: "John Smith",
      RoleSurName: "Sous Chef",
      CategoryImg: "/star.png",
      number: "4.8",
    },
  ];

  return (
    <div className={styles.reviewAgain}>
      <div className={styles.reviewManagement}>
        <div className={styles.reviewPart}>
          <h1>Reviews</h1>
          <p>Dashboard / Customer Reviews</p>
        </div>
        <div className={styles.reviewPartRight}>
          <button>
            Filter Periode <br /> 17 April 2020 - 21 May 2020
          </button>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {ReviewArr.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardCircle}></div>
            <div className={styles.content}>
              <div className={styles.headerLine}>
                <div className={styles.title}>{item.name}</div>
                <div className={styles.subtitle}>{item.firstName}</div>
              </div>
              <div className={styles.text}>{item.Text}</div>
              <div className={styles.footer}>
                <div className={styles.circleSm}></div>
                <div className={styles.info}>
                  <div className={styles.name}>{item.RoleName}</div>
                  <div className={styles.role}>{item.RoleSurName}</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.star}>
                    <img src={item.CategoryImg} alt="star" />
                  </div>
                  <span>{item.number}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsTable;
