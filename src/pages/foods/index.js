import Head from "next/head";
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import PageTitle from "@/components/common/PageTitle";

import FoodsMap from "@/components/pages-components/foods/FoodsMap";
import FoodMapSkeleton from "@/components/pages-components/foods/FoodMapSkeleton";
import FoodSearch from "@/components/pages-components/foods/FoodSearch";
import FoodBtn from "@/components/pages-components/foods/FoodBtn";
import NewBtn from "@/components/pages-components/foods/NewBtn";
import useFetchApiItems from "@/hooks/useFetchApilItems";

export default function Foods() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selected, setSelected] = useState("left");

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      let parsedUser = null;

      try {
        if (storedUser && storedUser !== "undefined") {
          parsedUser = JSON.parse(storedUser);
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }

      setUser(parsedUser);
    }
  }, []);

  // Fetch restaurants for the current user
  const [restaurants, isResLoading, refetchRes] = useFetchApiItems(
    user
      ? `/restaurants?filters[users][documentId][$eqi]=${user.documentId}`
      : null
  );

  const foundRestaurant = restaurants?.[0] ?? null;

  // Fetch foods for the found restaurant
  const [foods, isLoading, refetchFoods] = useFetchApiItems(
    foundRestaurant
      ? `/foods?filters[restaurant][documentId][$eq]=${foundRestaurant.documentId}&populate[type][populate]=category`
      : null
  );

  // Filter foods based on searchValue
  useEffect(() => {
    if (foods && searchValue.trim() !== "") {
      const filtered = foods.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredFoods(filtered);
    } else {
      setFilteredFoods([]);
    }
  }, [searchValue, foods]);

  // Refetch foods when restaurant changes
  useEffect(() => {
    if (refetchFoods) {
      refetchFoods();
    }
  }, [foundRestaurant, refetchFoods]);

  return (
    <>
      <Head>
        <title>Foods</title>
      </Head>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <PageTitle
            title="Foods"
            subtitle="Here is your menus summary with graph view"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
            }}
          >
            <FoodSearch onChange={setSearchValue} />
            <FoodBtn selected={selected} onSelect={setSelected} />
            <NewBtn />
          </div>
        </div>

        {!isLoading && foundRestaurant ? (
          searchValue.length > 0 ? (
            filteredFoods.length > 0 ? (
              <FoodsMap data={filteredFoods} />
            ) : (
              <h1 style={{ textAlign: "center" }}>Food topilmadi!</h1>
            )
          ) : (
            <FoodsMap data={foods} refetch={refetchFoods} selected={selected} />
          )
        ) : (
          <FoodMapSkeleton count={3} />
        )}
      </div>
    </>
  );
}

Foods.getLayout = (pageProps) => (
  <MainLayout>
    <Foods {...pageProps} />
  </MainLayout>
);
