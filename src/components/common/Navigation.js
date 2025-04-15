// components/Navigation.js
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Aside.module.css";
import {
  IoIosHome,
  IoIosList,
  IoMdPeople,
  IoMdAnalytics,
  IoIosCalendar,
} from "react-icons/io";
import {
  Assessment,
  Comment,
  FoodBank,
  Person,
  Chat,
  Wallet,
} from "@mui/icons-material";

function Navigation() {
  const router = useRouter();

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: <IoIosHome />,
      href: "/",
    },
    {
      id: 2,
      linkName: "Order List",
      linkImg: <IoIosList />,
      href: "/OrderList",
    },
    {
      id: 3,
      linkName: "Order Detail",
      linkImg: <IoMdPeople />,
      href: "/OrderTop",
    },
    {
      id: 4,
      linkName: "Customers",
      linkImg: <IoMdAnalytics />,
      href: "/customers",
    },
    {
      id: 5,
      linkName: "Analytics",
      linkImg: <Assessment />,
      href: "/analis",
    },
    {
      id: 6,
      linkName: "Review",
      linkImg: <Comment />,
      href: "/review",
    },
    {
      id: 7,
      linkName: "Foods",
      linkImg: <FoodBank />,
      href: "/foods",
    },
    {
      id: 8,
      linkName: "Food Detail",
      linkImg: <FoodBank />,
      href: "/foodDetail",
    },
    {
      id: 9,
      linkName: "Customer Detail",
      linkImg: <Person />,
      href: "/CustomerTop",
    },
    {
      id: 10,
      linkName: "Calendar",
      linkImg: <IoIosCalendar />,
      href: "/OrderDetail",
    },
    {
      id: 11,
      linkName: "Chat",
      linkImg: <Chat />,
      href: "/chat",
    },
    {
      id: 12,
      linkName: "Wallet",
      linkImg: <Wallet />,
      href: "/wallet",
    },
  ];

  return (
    <>
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
            alt="Sedap Logo"
            width={167}
            height={49}
            className={styles["logo"]}
          />
          <p style={{ color: "#B9BBBD", fontSize: "18px" }}>
            Modern Admin Dashboard
          </p>
        </div>
        <div className={styles["buttonsMenu"]}>
          {links.map(({ id, href, linkName, linkImg }) => (
            <Links key={id} linkName={linkName} linkImg={linkImg} href={href} />
          ))}
        </div>
      </aside>
    </>
  );
}

function Links({ linkName, linkImg, href }) {
  const router = useRouter();
  return (
    <Link
      className={`${router.asPath === href ? styles.active : ""} ${
        styles.link
      }`}
      href={href}
    >
      {linkImg}
      {linkName}
    </Link>
  );
}

export default Navigation;
