import Head from "next/head";
import { useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import { TextField, Button, Box, Typography } from "@mui/material";
export default function New() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Orders List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Create a New Foods
          </Typography>

          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Category"
            variant="outlined"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Price"
            variant="standard"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Description"
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            sx={{ marginBottom: "20px" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: "10px",
              fontSize: "16px",
              fontFamily: "sans-serif",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

New.getLayout = (pageProps) => (
  <MainLayout>
    <New {...pageProps} />
  </MainLayout>
);
