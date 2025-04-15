import React from "react";
import PageTitle from "@/components/common/PageTitle";
import CustomerTable from "../customers/CustomerTable";
import styles from "@/styles/order.module.css";
import OrderFilter from "./OrderFilter";

export default function CustomerDetailList() {
  return (
    <>
      <div className={styles["orderDiv"]}>
        <PageTitle
          title="General Customer"
          subtitle="Here is your general customers list data"
        />
        <div className={styles["calendar"]}>
          <OrderFilter />
        </div>
      </div>
      <div className={"tableData"}>
        <CustomerTable />
      </div>
      {/* <PageTitle
        title="General Customer"
        subtitle="Here is your general customers list data"
      />
      <CustomerTable /> */}
    </>
  );
}
