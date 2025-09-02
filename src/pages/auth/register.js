import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Alert,
  IconButton,
  Stack,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setAvatarUrl("");
    }
  };

  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
    setAvatar(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!form.username || !form.email || !form.password) {
      setError("Barcha maydonlarni to'ldirishingiz kerak.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    setError(""); // clear previous error

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });

      const res = await response.json();

      if (response.ok) {
        // Check if the response body contains the user and jwt
        if (res && res.user && res.user.email) {
          const { user, jwt } = res; // Destructure only if the properties exist
          router.push(`/auth/login?email=${user.email}`);
        } else {
          setError("Ro'yxatdan o'tishda noto'g'ri ma'lumotlar.");
        }
      } else {
        // Handle error based on response status and message
        setError(res?.message || "Ro'yxatdan o'tishda xatolik yuz berdi.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Server bilan bog'lanishda xatolik yuz berdi.");
    }
  };

  return (
    <AuthLayout title="Ro'yxatdan o'tish">
      <Avatar
        sx={{ m: 1, bgcolor: "secondary.main", width: 56, height: 56 }}
        src={
          avatar ||
          "https://avatars.mds.yandex.net/i?id=d2161fd91a435a4528b4bdca7ab9a1149873d046-5847755-images-thumbs&n=13"
        }
      >
        {!avatar && <LockOutlinedIcon />}
      </Avatar>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ mb: 2, mt: 2 }}
      >
        <TextField
          label="Avatar URL"
          variant="outlined"
          size="small"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
          sx={{ width: "100%" }}
        />
        <label htmlFor="avatar-upload">
          <input
            hidden
            accept="image/*"
            type="file"
            id="avatar-upload"
            onChange={handleAvatarFileChange}
          />
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          required
          label="Ism"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          required
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          required
          label="Parol"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Ro'yxatdan o'tish
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/auth/login" passHref>
              <Button variant="text" size="small">
                Hisobingiz bormi? Kirish
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}
