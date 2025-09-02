import React from "react";

function FoodMapSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "130px",
      }}
    >
      {/* {items.map((food) => {
        return <Variants key={food.id} />;
      })} */}
    </div>
  );
}

export default FoodMapSkeleton;
