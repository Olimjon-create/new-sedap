import React from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import Head from "next/head";
import FoodForm from "@/components/pages/foods/FoodForm";
import { useRouter } from "next/router";
import useFetchApiItem from "@/hooks/useFetchApiItem";

export default function FoodEdit() {
  const router = useRouter();
  const { documentId } = router.query;

  const [food, isLoading] = useFetchApiItem(
    `/foods/${documentId}?populate[type][populate][0]=category`
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!food) {
    return <p>Food not found</p>;
  }

  return (
    <>
      <Head>
        <title>Food Edit</title>
      </Head>
      <FoodForm title="Edit food" food={food} btnText="Edit Food" />
    </>
  );
}

FoodEdit.getLayout = (pageProps) => (
  <MainLayout>
    <FoodEdit {...pageProps} />
  </MainLayout>
);
