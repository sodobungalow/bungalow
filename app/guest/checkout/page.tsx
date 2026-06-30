import content from "../../content.json";

const { checkout } = content;

export default function CheckoutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--navy) 0%, #2A4F7E 100%)",
          padding: "2.5rem 1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🌴</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.875rem",
            fontWeight: 700,
            color: "white",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {checkout.heading}
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.75)",
            marginTop: "0.75rem",
            lineHeight: 1.6,
          }}
        >
          {checkout.message}
        </p>
      </div>

      <div style={{ padding: "1.5rem" }}>
        {/* Time Reminder */}
        <div
          style={{
            background: "var(--sand-light)",
            border: "2px solid var(--sand)",
            borderRadius: "12px",
            padding: "1rem 1.25rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.875rem",
          }}
        >
          <span style={{ fontSize: "1.75rem" }}>⏰</span>
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--sand)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "2px",
              }}
            >
              Checkout Time
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#4a3728",
                margin: 0,
              }}
            >
              11:00 AM
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "#7A5000",
                marginTop: "2px",
              }}
            >
              Late checkout available for a fee — message us in advance.
            </p>
          </div>
        </div>

        {/* Checklist */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "var(--navy)",
              marginBottom: "1rem",
            }}
          >
            Before You Go
          </h2>
          {checkout.checklist.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--white)",
                borderRadius: "12px",
                padding: "1rem 1.125rem",
                marginBottom: "0.625rem",
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <span style={{ fontSize: "1.375rem", flexShrink: 0 }}>{item.icon}</span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.925rem",
                  color: "var(--charcoal)",
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {item.item}
              </p>
            </div>
          ))}
        </div>

        {/* Septic Reminder */}
        <div
          style={{
            background: "#FFF3CD",
            border: "2px solid #F0A500",
            borderRadius: "12px",
            padding: "1rem 1.125rem",
            marginBottom: "1.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>⚠️</span>
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "#7A5000",
                marginBottom: "2px",
              }}
            >
              Septic System Reminder
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "#5C3A00",
                lineHeight: 1.5,
              }}
            >
              Please do not flush anything down the toilets or drains. All waste goes in the trash. Thank you for protecting this home!
            </p>
          </div>
        </div>

        {/* Review Request */}
        <div
          style={{
            background: "var(--sage)",
            borderRadius: "16px",
            padding: "1.5rem",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ fontSize: "2rem", marginBottom: "0.625rem" }}>⭐</p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "white",
              marginBottom: "0.625rem",
            }}
          >
            Loved your stay?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.6,
            }}
          >
            {checkout.reviewRequest}
          </p>
        </div>

        {/* Farewell */}
        <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.375rem",
              fontWeight: 600,
              color: "var(--navy)",
              fontStyle: "italic",
            }}
          >
            {checkout.farewell}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              color: "var(--gray-mid)",
              marginTop: "0.5rem",
            }}
          >
            — Carla &amp; Family, SODO Bungalow
          </p>
        </div>
      </div>
    </div>
  );
}
