import content from "../../content.json";

const { houseGuide } = content;

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div
      style={{
        background: "var(--navy)",
        padding: "2.5rem 1.5rem 1.75rem",
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--sage)",
          marginBottom: "6px",
        }}
      >
        SODO Bungalow
      </p>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2rem",
          fontWeight: 700,
          color: "white",
          margin: 0,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.65)",
            marginTop: "6px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function GuideSection({
  id,
  icon,
  title,
  children,
}: {
  id?: string;
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{
        background: "var(--white)",
        borderRadius: "14px",
        padding: "1.25rem",
        marginBottom: "1rem",
        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span style={{ fontSize: "1.375rem" }}>{icon}</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "var(--navy)",
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          color: "#444",
          lineHeight: 1.65,
        }}
      >
        {children}
      </div>
    </section>
  );
}

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol style={{ margin: 0, paddingLeft: "1.25rem" }}>
      {steps.map((step, i) => (
        <li key={i} style={{ marginBottom: "0.5rem", color: "#444" }}>
          {step}
        </li>
      ))}
    </ol>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "0.375rem", color: "#444" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function HousePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      <PageHeader
        title="House Guide"
        subtitle="Everything you need for a perfect stay"
      />

      <div style={{ padding: "1.5rem" }}>
        {/* Check-In */}
        <GuideSection id="checkin" icon="🔑" title="Check-In & Access">
          <StepList steps={houseGuide.checkin.steps} />
        </GuideSection>

        {/* WiFi */}
        <section
          id="wifi"
          style={{
            background: "var(--navy)",
            borderRadius: "14px",
            padding: "1.25rem",
            marginBottom: "1rem",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span style={{ fontSize: "1.375rem" }}>📶</span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "white",
                margin: 0,
              }}
            >
              Wi-Fi
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "var(--sage)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginTop: "0.75rem",
              marginBottom: "2px",
            }}
          >
            Network
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              color: "white",
              fontWeight: 600,
            }}
          >
            {houseGuide.wifi.network}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "var(--sage)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginTop: "0.625rem",
              marginBottom: "2px",
            }}
          >
            Password
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              color: "white",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            {houseGuide.wifi.password}
          </p>
        </section>

        {/* Bedrooms */}
        <GuideSection icon="🛏️" title="Bedrooms">
          {houseGuide.bedrooms.map((room) => (
            <div
              key={room.name}
              style={{
                borderBottom: "1px solid var(--gray-soft)",
                paddingBottom: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  color: "var(--navy)",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "2px",
                }}
              >
                {room.name}
              </p>
              <p style={{ color: "#555", margin: 0 }}>{room.description}</p>
            </div>
          ))}
          <p
            style={{
              background: "var(--sage-light)",
              borderRadius: "8px",
              padding: "0.625rem 0.875rem",
              color: "var(--sage-dark)",
              fontSize: "0.8rem",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Extra linens are stored in the office closet.
          </p>
        </GuideSection>

        {/* Kitchen */}
        <GuideSection id="kitchen" icon="🍳" title="Kitchen">
          <p style={{ marginBottom: "0.75rem" }}>
            {houseGuide.kitchen.description}
          </p>
          <p style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "0.375rem" }}>
            Appliances Available:
          </p>
          <BulletList items={houseGuide.kitchen.appliances} />
          <div
            style={{
              background: "var(--sand-light)",
              borderRadius: "8px",
              padding: "0.75rem",
              marginTop: "0.875rem",
              borderLeft: "3px solid var(--sand)",
            }}
          >
            <p style={{ margin: 0, color: "#4a3728", fontSize: "0.85rem" }}>
              {houseGuide.kitchen.notes}
            </p>
          </div>
        </GuideSection>

        {/* Pool */}
        <GuideSection id="pool" icon="🏊" title="Pool & Backyard">
          <p style={{ marginBottom: "0.75rem" }}>{houseGuide.pool.description}</p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "var(--sage-dark)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.375rem",
            }}
          >
            Access
          </p>
          <p style={{ marginBottom: "0.875rem", color: "#555" }}>
            {houseGuide.pool.access}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "var(--sage-dark)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.375rem",
            }}
          >
            Pool Rules
          </p>
          <BulletList items={houseGuide.pool.rules} />

          <div style={{ marginTop: "1.125rem" }}>
            <p
              style={{
                fontWeight: 600,
                color: "var(--navy)",
                marginBottom: "0.375rem",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Backyard Features
            </p>
            <BulletList items={houseGuide.backyard.features} />
            <p
              style={{
                marginTop: "0.75rem",
                color: "#555",
                fontStyle: "italic",
              }}
            >
              {houseGuide.backyard.grill}
            </p>
          </div>
        </GuideSection>

        {/* Laundry */}
        <GuideSection icon="👕" title="Laundry">
          <p style={{ marginBottom: "0.75rem" }}>{houseGuide.laundry.description}</p>
          <BulletList items={houseGuide.laundry.instructions} />
        </GuideSection>

        {/* TVs */}
        <GuideSection icon="📺" title="TVs & Entertainment">
          <p style={{ marginBottom: "0.75rem" }}>{houseGuide.tvs.description}</p>
          <p
            style={{
              fontWeight: 600,
              color: "var(--navy)",
              marginBottom: "0.375rem",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Locations:
          </p>
          <BulletList items={houseGuide.tvs.locations} />
          <p style={{ marginTop: "0.75rem", color: "#555" }}>
            {houseGuide.tvs.streaming}
          </p>
          <div
            style={{
              background: "var(--sage-light)",
              borderRadius: "8px",
              padding: "0.625rem 0.875rem",
              marginTop: "0.75rem",
            }}
          >
            <p style={{ margin: 0, color: "var(--sage-dark)", fontSize: "0.85rem" }}>
              💡 Tip: Remember to log out of your streaming accounts before checkout.
            </p>
          </div>
        </GuideSection>

        {/* Climate */}
        <GuideSection icon="🌡️" title="Climate & Thermostat">
          <p>{houseGuide.thermostat.description}</p>
          <p style={{ color: "var(--gray-mid)", fontSize: "0.82rem", marginTop: "4px" }}>
            {houseGuide.thermostat.location}
          </p>
        </GuideSection>

        {/* Supplies */}
        <GuideSection icon="🧺" title="Extra Supplies">
          {Object.entries(houseGuide.supplies).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: "flex",
                gap: "0.5rem",
                paddingBottom: "0.5rem",
                marginBottom: "0.5rem",
                borderBottom: "1px solid var(--gray-soft)",
              }}
            >
              <span style={{ color: "var(--sage)", fontWeight: 600, flexShrink: 0 }}>→</span>
              <p style={{ margin: 0, color: "#444" }}>{value}</p>
            </div>
          ))}
        </GuideSection>

        {/* Trash */}
        <GuideSection icon="🗑️" title="Trash & Recycling">
          <p style={{ marginBottom: "0.5rem" }}>{houseGuide.trash.description}</p>
          <p style={{ color: "var(--sage-dark)", fontWeight: 500 }}>
            📅 Pickup days: {houseGuide.trash.pickup}
          </p>
          <p style={{ marginTop: "0.5rem", color: "#555" }}>{houseGuide.trash.note}</p>
        </GuideSection>

        {/* Septic Warning */}
        <section
          style={{
            background: "#FFF3CD",
            border: "2px solid #F0A500",
            borderRadius: "14px",
            padding: "1.25rem",
            marginBottom: "1rem",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span style={{ fontSize: "1.375rem" }}>⚠️</span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#7A5000",
                margin: 0,
              }}
            >
              {houseGuide.septic.warning}
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#5C3A00",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {houseGuide.septic.description}
          </p>
        </section>
      </div>
    </div>
  );
}
