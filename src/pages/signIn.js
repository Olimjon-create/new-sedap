// SignInPage.js
import React, { useState } from "react";
import Link from "next/link"; // Use Next.js Link for routing

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission (sign-in)
  const handleSignIn = (event) => {
    event.preventDefault();
    // Add your sign-in logic here (e.g., call to an API or authentication service)
    console.log("Sign-in attempted with", { email, password });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: 'url("/blue-effect.png")',
        backgroundSize: "cover",
      }}
    >
      <div
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
          Sign In
        </h2>

        <form
          onSubmit={handleSignIn}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Email
          </h2>
          <input
            type="email"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              backgroundColor: "#fff",
              color: "black",
              border: "none",
            }}
          />

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Password
          </h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            style={{
              backgroundColor: "#003465",
              color: "white",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              fontFamily: "sans-serif",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.8)",
            marginTop: "1.5rem",
          }}
        >
          Don't have an account yet?{" "}
          <Link href="/signUp">Register for free</Link>
        </p>
      </div>
    </div>
  );
}
