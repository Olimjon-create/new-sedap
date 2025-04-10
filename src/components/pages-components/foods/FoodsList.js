import React from "react";
import PageTitle from "@/components/common/PageTitle";
import FoodsTable from "./FoodsTable";
import styles from "@/styles/order.module.css";
import FoodsFilter from "./FoodsFilter";

export default function CustomersList() {
  return (
    <>
      <div className={styles["orderDiv"]}>
        <PageTitle title="" subtitle="" />
        <div className={styles["calendar"]}>
          <FoodsFilter />
        </div>
      </div>
      <div className={"tableData"}>
        <FoodsTable />
      </div>
      {/* <PageTitle

      />
      <CustomerTable /> */}
    </>
  );
}
