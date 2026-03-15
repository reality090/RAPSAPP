

import React from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <section
        id="contact"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "60px 20px 80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            borderRadius: "24px",
            border: "1px solid rgba(148,163,184,0.4)",
            padding: "32px 28px",
            background:
              "radial-gradient(circle at top, rgba(56,189,248,0.12), transparent 55%), #020617",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            CONTACT REALITY
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#e5e7eb",
              marginBottom: "24px",
            }}
          >
            Drop a message if you want to collaborate, get feedback on a project,
            or just vibe about ideas.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted! (You can wire this to backend later.)");
            }}
            style={{ display: "grid", gap: "16px" }}
          >
            <div style={{ display: "grid", gap: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: 500 }}>
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                style={{
                  padding: "10px 12px",
                  borderRadius: "999px",
                  border: "1px solid #64748b",
                  backgroundColor: "#020617",
                  color: "white",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: 500 }}>
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                style={{
                  padding: "10px 12px",
                  borderRadius: "999px",
                  border: "1px solid #64748b",
                  backgroundColor: "#020617",
                  color: "white",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: 500 }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me what you want to build or discuss..."
                style={{
                  padding: "10px 12px",
                  borderRadius: "18px",
                  border: "1px solid #64748b",
                  backgroundColor: "#020617",
                  color: "white",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: "6px",
                padding: "10px 18px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#38bdf8",
                color: "#020617",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              SEND TO REALITY
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
