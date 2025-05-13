import { useState } from "react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/utils/axiosInstance";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    router.push("/sedap");

    try {
      const response = await axiosInstance.post("/auth/local", {
        identifier: email,
        password: password,
      });

      console.log("✅ Kirish muvaffaqiyatli:", response.data);
    } catch (error) {
      console.error(
        "❗ Kirishda xatolik:",
        error.response?.data || error.message
      );
      // alert("Email yoki parol xato.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Your Logo</h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "2rem",
          }}
        >
          Sign in to your account
        </h2>

        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <label>
            Email
            <input
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </label>

          <div style={{ fontSize: "0.875rem" }}>
            <a href="#" style={{ color: "#cce", textDecoration: "underline" }}>
              Forgot password?
            </a>
          </div>

          <button type="submit" style={submitButtonStyle}>
            Sign in
          </button>
        </form>

        <div style={{ textAlign: "center", margin: "1.5rem 0", color: "#ccc" }}>
          or sign in with
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button style={iconButtonStyle}>
            <a href="https://www.google.com">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                style={iconStyle}
              />
            </a>
          </button>
          <button style={iconButtonStyle}>
            <a href="https://www.youtube.com" target="_blank">
              <img
                src="https://img.icons8.com/color/48/youtube.png"
                alt="Youtebe"
                style={iconStyle}
              />
            </a>
          </button>
          <button style={iconButtonStyle}>
            <a href="https://www.github.com">
              <img
                src="https://img.icons8.com/ios-filled/50/github.png"
                alt="GitHub"
                style={iconStyle}
              />
            </a>
          </button>
          <button style={iconButtonStyle}>
            <a href="https://www.facebook.com">
              <img
                src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                alt="Facebook"
                style={iconStyle}
              />
            </a>
          </button>

          <button style={iconButtonStyle}>
            <a href="https://www.telegram.com">
              <img
                src="https://img.icons8.com/ios-filled/50/telegram.png"
                alt="Facebook"
                style={iconStyle}
              />
            </a>
          </button>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "0.9rem",
            color: "#ccc",
          }}
        >
          Don’t have an account?{" "}
          <Link
            href="https://www.jotform.com/form-templates/category/registration"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundImage: 'url("/blue-effect.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "1rem",
};

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(12px)",
  padding: "2rem",
  borderRadius: "1rem",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  color: "#fff",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "8px",
  border: "none",
  marginTop: "0.25rem",
};

const submitButtonStyle = {
  backgroundColor: "#00509e",
  color: "#fff",
  padding: "0.75rem",
  borderRadius: "8px",
  border: "none",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "0.5rem",
};

const iconButtonStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  border: "none",
  padding: "0.5rem",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  cursor: "pointer",
};

const iconStyle = {
  width: "24px",
  height: "24px",
};
