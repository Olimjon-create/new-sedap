import { useState } from "react";
import { useParams } from "next/navigation";
import orderListData from "@/components/pages-components/orders/Data";
import MainLayout from "@/components/common/layouts/MainLayout";

export default function New() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const route = useParams();
  const currentOrder = orderListData.find(
    (item) => item.userId === parseInt(route?.id)
  );

  console.log("OrderDetail", currentOrder);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ fontSize: 32, color: "#464255", marginLeft: 40 }}>
            Foods
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#a3a3a3",
              marginLeft: 40,
              marginTop: 15,
            }}
          >
            Here is your menus summary with graph view
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginLeft: 450,
          marginTop: -60,
        }}
      >
        <div style={{ position: "relative", width: 491, maxWidth: 500 }}>
          <img
            src="../search.png"
            alt="search"
            style={{
              position: "absolute",
              top: "50%",
              left: 18,
              transform: "translateY(-50%)",
              width: 20,
              height: 20,
            }}
          />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search here"
            style={{
              width: "100%",
              height: 68,
              backgroundColor: "#ffffff",
              borderRadius: 14,
              fontFamily: "sans-serif",
              fontSize: 18,
              paddingLeft: 50,
              border: "none",
              color: "#aaaaaa",
            }}
          />
        </div>

        <button
          style={{
            width: 68,
            height: 68,
            borderRadius: 15,
            backgroundColor: "#ffffff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="../grids.png" alt="grid" />
        </button>
        <button
          style={{
            width: 68,
            height: 68,
            borderRadius: 15,
            backgroundColor: "#ffffff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="../GreenGrids.png" alt="grid active" />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: 718,
          backgroundColor: "#fff",
          borderRadius: 10,
          marginLeft: 30,
          marginTop: 90,
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "100%" }}>
          <h2
            style={{
              fontFamily: "sans-serif",
              fontSize: 28,
              color: "#202020",
              cursor: "pointer",
              marginTop: 0,
            }}
          >
            Detail Menus
          </h2>
        </div>
        <div style={{ width: "100%" }}>
          <h2
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              color: "#a5a5a5",
              cursor: "pointer",
              textAlign: "center",
              marginLeft: 300,
              marginTop: -25,
            }}
          >
            Category: Food / <span style={{ color: "#00b074" }}>Burger</span>
          </h2>
        </div>

        <div style={{ display: "flex", gap: 30, marginTop: 30 }}>
          <div
            style={{
              width: 280,
              height: 214,
              backgroundColor: "#c4c4c4",
              borderRadius: 10,
            }}
          ></div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <h2
              style={{
                fontFamily: "sans-serif",
                fontSize: 12,
                color: "#00b074",
                marginTop: 8,
              }}
            >
              {" "}
              .Stock Available
            </h2>
            <h2
              style={{
                fontFamily: "sans-serif",
                fontSize: 28,
                color: "#464255",
                marginTop: 8,
              }}
            >
              Burger Jumbo Special <br /> with Spicy
            </h2>
            <p
              style={{
                fontFamily: "sans-serif",
                color: "#a3a3a3",
                fontSize: 12,
                marginTop: 8,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div style={{ marginTop: 20 }}>
              <div style={{ display: "flex", gap: 20 }}>
                <button
                  style={{
                    width: 157.3,
                    height: 44.2,
                    fontSize: 16,
                    fontFamily: "sans-serif",
                    borderRadius: 12,
                    backgroundColor: "#10b981",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Add Menu
                </button>
                <button
                  style={{
                    width: 157.3,
                    height: 44.2,
                    borderRadius: 12,
                    backgroundColor: "#e5e7eb",
                    color: "#585858",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Edit Menu
                </button>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h1
                style={{
                  marginTop: 40,
                  fontFamily: "sans-serif",
                  fontSize: 24,
                  color: "#464255",
                }}
              >
                Ingredients
              </h1>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 14,
                  color: "#a3a3a3",
                  marginTop: 10,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>

            <div style={{ marginTop: 20 }}>
              <h1
                style={{
                  marginTop: 40,
                  fontFamily: "sans-serif",
                  fontSize: 24,
                  color: "#464255",
                }}
              >
                Nutrition Info
              </h1>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 14,
                  color: "#a3a3a3",
                  marginTop: 10,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

New.getLayout = (pageProps) => (
  <MainLayout>
    <New {...pageProps} />
  </MainLayout>
);
