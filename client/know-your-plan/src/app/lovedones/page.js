"use client"; // This marks the component as a client-side component

import React, { useState } from "react";
import Link from "next/link"; // Don't forget to import Link from next/link

const FirstTimePage = () => {
  const [showCard, setShowCard] = useState(true);

  // Handle button click to hide the card
  const handleCloseCard = () => {
    setShowCard(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}>
      {/* Conditional rendering of the card */}
      {showCard && (
        <div
          style={{
            maxWidth: "100%",
            minHeight: "100vh",
            backgroundColor: "#f8f9fa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Header with button */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            {/* Link component wraps the button */}
            <Link href="/firsttime"> 
              <button
                onClick={handleCloseCard}
                style={{
                  backgroundColor: "#3366ff",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#2952cc")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#3366ff")}
              >
                For First-Timers
              </button>
            </Link>
          </div>

          {/* Content section */}
          <div
            style={{
              width: "100%",
              maxWidth: "800px",
              padding: "20px",
              boxSizing: "border-box",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                color: "#3366ff",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Supporting You and Loved Ones with Insurance Clarity
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#333",
                marginBottom: "40px",
                maxWidth: "700px",
              }}
            >
              KnowYourPlan simplifies complicated insurance policies so you and your loved ones can confidently make the best decisions — without worrying about hidden clauses, fees, or confusing fine print.
            </p>
            <button
              style={{
                backgroundColor: "#ff9933",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "15px 30px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e68a2e")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9933")}
            >
              Continue to Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstTimePage;
