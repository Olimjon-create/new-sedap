import React from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import { useRouter } from "next/router";

function MainLayout(props) {
  const router = useRouter();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div style={{ display: "flex", minWidth: "100wh" }}>
        <Navigation />
        {/* <h1 style={{ display: router.asPath === "/" ? "block" : "none" }}>
        </h1> */}
        <div style={{ display: router.asPath === "/" ? "block" : "none" }}>
          <h1 style={{ marginLeft: "20px" }}>Olimjon </h1>
          <h1 style={{ marginLeft: "20px" }}>
            {[date, "-", month, "-", year]}
          </h1>
        </div>
      </div>
      <div>{props.children}</div>
    </main>
  );
}

export default MainLayout;
