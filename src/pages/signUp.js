import React, { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      console.log("Sign Up:", { email, password });
      // Call your sign-up API here and handle the response
    }
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
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            width: "6rem",
            height: "6rem",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            top: "2.5rem",
            left: "2.5rem",
            filter: "blur(2rem)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "4rem",
            height: "4rem",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "50%",
            bottom: "5rem",
            right: "5rem",
            filter: "blur(1rem)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "8rem",
            height: "8rem",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            top: "33%",
            right: "25%",
            filter: "blur(3rem)",
          }}
        ></div>
      </div>

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
          Sign Up
        </h2>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#fff",
          }}
        >
          Email
        </h2>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              backgroundColor: "#fff",
              color: "white",
              border: "none",
              marginTop: "15px",
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
              color: "white",
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
            Confirm Password
          </h2>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              backgroundColor: "#fff",
              color: "white",
              border: "none",
            }}
          />
          {error && (
            <div
              style={{
                color: "red",
                fontSize: "0.875rem",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}
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
            Sign up
          </button>
        </form>

        <div
          style={{
            textAlign: "center",
            margin: "1rem 0",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          or continue with
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            style={{
              width: "80px",
              backgroundColor: "white",
              padding: "0.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border: "none",
            }}
          >
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              style={{ width: "1.5rem", height: "1.5rem", marginTop: "5px" }}
            />
          </button>
          <button
            style={{
              width: "80px",
              backgroundColor: "white",
              padding: "0.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border: "none",
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/github.png"
              alt="GitHub"
              style={{ width: "1.5rem", height: "1.5rem", marginTop: "5px" }}
            />
          </button>
          <button
            style={{
              width: "80px",
              backgroundColor: "white",
              padding: "0.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border: "none",
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/facebook-new.png"
              alt="Facebook"
              style={{ width: "1.5rem", height: "1.5rem", marginTop: "5px" }}
            />
          </button>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.8)",
            marginTop: "1.5rem",
          }}
        >
          Already have an account?{" "}
          <a href="#" style={{ textDecoration: "underline", color: "white" }}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
