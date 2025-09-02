import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from "@mui/material";
import useFetchApiItems from "@/hooks/useFetchApilItems";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";

const foodInitialValues = {
  documentId: null,
  name: "",
  image: "",
  type: "",
  price: "",
  comment: "",
};

function FoodForm({ title, food, btnText }) {
  const router = useRouter();
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [formData, setFormData] = useState(foodInitialValues);
  const [category, setCategory] = useState("");
  const user = useCurrentUser();

  // Initial load
  useEffect(() => {
    if (food) {
      setFormData({
        documentId: food.documentId ?? null,
        name: food.name ?? "",
        image: food.image ?? "",
        type: food.type?.documentId ?? "",
        price: food.price ?? "",
        comment: food.comment ?? "",
      });
      setCategory(food.type?.category?.documentId ?? "");
    } else {
      setFormData(foodInitialValues);
      setCategory("");
    }
  }, [food]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [categories = [], isLoading] = useFetchApiItems(
    user?.restaurant?.documentId
      ? `/categories?filters[restaurant][documentId][$eq]=${user.restaurant.documentId}`
      : null
  );

  const [types = [], typesLoading] = useFetchApiItems(
    category ? `/types?filters[category][documentId][$eq]=${category}` : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      data: {
        name: formData.name,
        image: formData.image,
        price: formData.price,
        comment: formData.comment,
        type: {
          connect: [formData.type],
        },
        restaurant: user?.restaurant?.documentId ?? null,
      },
    };

    const isUpdate = !!formData.documentId;
    const method = isUpdate ? "PUT" : "POST";
    const url = isUpdate
      ? `http://192.168.100.113:1337/api/foods/${formData.documentId}`
      : `http://192.168.100.113:1337/api/foods`;

    if (!values.data.restaurant || !formData.type) {
      alert("Category va Type tanlanishi kerak");
      return;
    }

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res?.data?.documentId) {
          setIsSnackOpen(true);
          router.push(`/foods/${res.data.documentId}`);
        }
      })
      .catch((error) => console.error(error));
  };

  if (!formData) return null;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        margin: "auto",
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        marginTop: "30px",
      }}
    >
      <h1 style={{ color: "#00B074", marginBottom: "30px" }}>{title}</h1>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          {/* Category */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.documentId}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Type */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={formData.type}
                label="Type"
                onChange={(e) =>
                  handleChange({
                    target: { name: "type", value: e.target.value },
                  })
                }
              >
                {types.map((type) => (
                  <MenuItem key={type.id} value={type.documentId}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Price */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
          </Grid>

          {/* Image */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Grid>

          {/* Comment */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>

          {/* Submit */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#00B074",
                "&:hover": {
                  backgroundColor: "#009d60",
                },
                padding: "14px",
                fontSize: "16px",
              }}
            >
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackOpen}
        onClose={() => setIsSnackOpen(false)}
        message="Food successfully saved"
      />
    </Box>
  );
}

export default FoodForm;
