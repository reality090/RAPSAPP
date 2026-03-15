import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/REALITY.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          padding: "40px",
          maxWidth: "520px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "24px",
          animation: "heroFadeUp 0.9s ease-out",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "8px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          TURNING RAW THOUGHTS INTO REALITY.
        </h1>

        <p
          style={{
            fontStyle: "italic",
            fontSize: "18px",
            marginBottom: "24px",
            opacity: 0.9,
          }}
        >
          "live and shape reality"
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {/* primary CTA – smooth scroll to #contact */}
          <a
            href="#contact"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#38bdf8",
              color: "#020617",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
              boxShadow: "0 0 0 rgba(56,189,248,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(56,189,248,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 0 rgba(56,189,248,0)";
            }}
          >
            VIBE WITH US
          </a>

          {/* secondary CTA – email link */}
          <a
            href="mailto:youremail@example.com" // change to your real email
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid #ffffff",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              transition:
                "background-color 0.15s ease-out, transform 0.15s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.9)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            GET IN CONTACT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
