import React from "react";
import PageTitle from "@/components/common/PageTitle";
import CustomerTable from "./customerTable.js";
import styles from "@/styles/order.module.css";
import CustomerFilter from "./customerFilter";

export default function CustomersList() {
  return (
    <>
      <div className={styles["orderDiv"]}>
        <PageTitle title="" subtitle="" />
        <div className={styles["calendar"]}>
          <CustomerFilter />
        </div>
      </div>
      <div className={"tableData"}>
        <CustomerTable />
      </div>
      {/* <PageTitle

      />
      <CustomerTable /> */}
    </>
  );
}
