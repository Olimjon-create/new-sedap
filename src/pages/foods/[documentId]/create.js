import FoodForm from "@/components/pages-components/foods/FoodForm";

const FoodCreatePage = () => {
  const restaurant = { documentId: "abc123" };

  return (
    <FoodForm
      title="Create Food"
      btnText="Submit"
      food={null}
      restaurant={restaurant}
    />
  );
};

export default FoodCreatePage;
