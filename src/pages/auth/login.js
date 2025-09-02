import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.100.113:1337/api",
});

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      if (res.status === 200) {
        const data = res.data;
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("jwt", data.jwt);
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err?.response?.data?.error || "Email yoki parol noto‘g‘ri.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: 'url("/blue-effect.png")',
        backgroundSize: "cover",
      }}
    >
      <Box
        style={{
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(1rem)",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "24rem",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
        >
          Your logo
        </h1>
        <h2
          style={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            marginBottom: "2rem",
          }}
        >
          Login
        </h2>

        {error && (
          <p
            style={{
              color: "#ff6b6b",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {error}
          </p>
        )}

        <form
          onSubmit={handleSignIn}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <label style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>
            Email
          </label>
          <input
            type="email"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              backgroundColor: "#fff",
              color: "black",
              border: "none",
            }}
          />
          <label style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              backgroundColor: "#fff",
              color: "black",
              border: "none",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? "#6c757d" : "#003465",
              color: "white",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              fontFamily: "sans-serif",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            {loading ? "Kirilmoqda..." : "Sign In"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/forgot-password" passHref></Link>

          <br />

          <Link href="/auth/register" passHref>
            <Button variant="text" size="small" style={{ color: "white" }}>
              {"Don't have an account? Sign up"}
            </Button>
          </Link>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.8)",
            marginTop: "1.5rem",
          }}
        >
          Don't have an account yet?{" "}
          <Link href="/signUp" passHref>
            Register for free
          </Link>
        </p>
      </Box>
    </Box>
  );
}
