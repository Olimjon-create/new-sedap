import React from "react";
import styles from "../../../styles/foods.module.css";
import Image from "next/image";
import Link from "next/link";
import { StyleRegistry } from "styled-jsx";
import MainLayout from "@/components/common/layouts/MainLayout";
function Navigation(props) {
  console.log("router", router.asPath);

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: "/home.png",
      href: "/",
      active: true,
    },
    {
      id: 2,
      linkName: "Order List",
      linkImg: "/list.png",
      href: "/orders",
      active: true,
    },
    {
      id: 3,
      linkName: "Order Detail",
      linkImg: "/order.png",
      href: "/orderDetail",
      active: true,
    },
    {
      id: 4,
      linkName: "Customers",
      linkImg: "/customer.png",
      href: "/customers",
      active: true,
    },
    {
      id: 5,
      linkName: "Analytics",
      linkImg: "/analis.png",
      href: "/analis",
      active: true,
    },
    {
      id: 6,
      linkName: "Review",
      linkImg: "/review.png",
      href: "/review",
      active: true,
    },
    {
      id: 7,
      linkName: "Foods",
      linkImg: "/food.png",
      href: "/food",
      active: true,
    },
    {
      id: 8,
      linkName: "Food Detail",
      linkImg: "/foodDetail.png",
      href: "/foodDetail",
      active: true,
    },
    {
      id: 9,
      linkName: "Customer Detail",
      linkImg: "/customerDetail.png",
      href: "/customerDetail",
      active: true,
    },
    {
      id: 10,
      linkName: "Calendar",
      linkImg: "/calendar.png",
      href: "/calendar",
      active: true,
    },
    {
      id: 11,
      linkName: "Chat",
      linkImg: "/chat.png",
      href: "/chat",
      active: true,
    },
    {
      id: 12,
      linkName: "Wallet",
      linkImg: "/wallet.png",
      href: "/wallet",
      active: true,
    },
  ];
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
        />
      </Head>

      <aside className={styles["aside"]}>
        <div className={styles["aside-header"]}>
          <Image
            src="/Sedap.png"
            alt=""
            className={styles["logo"]}
            width={167}
            height={49}
          />
          <p
            style={{
              color: "#B9BBBD",
              fontSize: "18px",
              backgroundColor: "unset",
            }}
          >
            Modern Admin Dashboard
          </p>
        </div>
        <div className={styles["buttonsMenu"]}>
          {links.map(({ id, href, linkName, linkImg, active }) => (
            <Links
              key={id}
              linkName={linkName}
              linkImg={linkImg}
              href={href}
              active={active}
            />
          ))}
        </div>
        <div className={styles["addMenus"]}>
          <div className={styles["addMenusText"]}>
            <p>Please, organize your menus through button bellow!</p>
            <button>+Add Menus</button>
          </div>
          <img src="./illustration.png" alt="" />
        </div>
        <div className={styles["about"]}>
          <p>Sedap Restaurant Admin Dashboard</p>
          <p>© 2020 All Rights Reserved</p>
          <p>Made with ♥ by Peterdraw</p>
        </div>
      </aside>
    </div>
  );
}

function Links(props) {
  const { linkName, linkImg, href, active } = props;
  const router = useRouter();
  return (
    <>
      <Link
        className={`${router.asPath === href ? styles.active : ""}`}
        href={href}
        style={{
          background: router.asPath === href ? "#00B07426" : "",
          color: router.asPath === href ? "#177556" : "",
        }}
      >
        <Image src={linkImg} alt={linkName} width={20} height={20} />
        {linkName}
      </Link>
    </>
  );
}
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
                </div>
                <div className={styles["food_button"]}>
                  <Image
                    className={styles.imgTag}
                    src="/stories.png"
                    alt="Price"
                    width={28}
                    height={28}
                  />
                </div>
                <div className={styles["food_button"]}>
                  <Image
                    className={styles.imgTag}
                    src="/delete.png"
                    alt="Price"
                    width={28}
                    height={28}
                  />
                </div>
                <div className={styles["food_button"]}>
                  <Image
                    className={styles.imgTag}
                    src="/dublicate.png"
                    alt="Price"
                    width={28}
                    height={28}
                  />
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
