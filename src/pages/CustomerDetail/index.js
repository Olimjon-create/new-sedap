import Head from "next/head";
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from "@/styles/Home.module.css";
import Foods from "@/components/common/Foods";
// import CustomerDetail from "../../../components/pages-components/CustomerTop/CustomerDetail";

export default function Customers() {
  return (
    <>
      <Head>
        <title>CustomerDetailList</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{/* <CustomerDetail /> */}</div>
    </>
  );
}

Customers.getLayout = (pageProps) => (
  <MainLayout>{/* <CustomerDetail {...pageProps} /> */}</MainLayout>
);
