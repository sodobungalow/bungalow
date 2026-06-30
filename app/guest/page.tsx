import Image from "next/image";
import Link from "next/link";
import content from "../content.json";

const quickLinks = [
  { href: "/guest/house/#wifi", icon: "📶", label: "Wi-Fi", sub: "SODO BUNGALOW" },
  { href: "/guest/house/#checkin", icon: "🔑", label: "Check-In", sub: "3:00 PM" },
  { href: "/guest/house/#pool", icon: "🏊", label: "Pool", sub: "Always ready" },
  { href: "/guest/faq/", icon: "❓", label: "FAQ", sub: "Quick answers" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "60vw", maxHeight: "420px", overflow: "hidden" }}>
        <Image
          src="/pool-hero.jpg"
          alt="SODO Bungalow Pool"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(30,58,95,0.15) 0%, rgba(30,58,95,0.7) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "4px",
            }}
          >
            Orlando, Florida
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            SODO Bungalow
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.85)",
              marginTop: "6px",
              fontStyle: "italic",
            }}
          >
            {content.welcome.subheading}
          </p>
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        {/* Quick Access Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                background: "var(--white)",
                borderRadius: "12px",
                padding: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.05)",
                textDecoration: "none",
                display: "block",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>{link.icon}</div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--navy)",
                }}
              >
                {link.label}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--gray-mid)",
                  marginTop: "2px",
                }}
              >
                {link.sub}
              </div>
            </Link>
          ))}
        </div>

        {/* Wi-Fi Highlight */}
        <div
          style={{
            background: "var(--navy)",
            borderRadius: "14px",
            padding: "1.25rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>📶</span>
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--sage)",
                marginBottom: "2px",
              }}
            >
              Wi-Fi Password
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "white",
                margin: 0,
              }}
            >
              {content.property.wifi.password}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.55)",
                marginTop: "2px",
              }}
            >
              Network: {content.property.wifi.network}
            </p>
          </div>
        </div>

        {/* Property Highlights */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--navy)",
              marginBottom: "1rem",
            }}
          >
            Your Home Base
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.625rem",
            }}
          >
            {content.highlights.map((h) => (
              <div
                key={h.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "10px",
                  padding: "0.875rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{h.icon}</span>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "var(--navy)",
                    margin: "4px 0 2px",
                  }}
                >
                  {h.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "var(--gray-mid)",
                  }}
                >
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About This Home */}
        <div
          style={{
            background: "var(--sand-light)",
            borderRadius: "14px",
            padding: "1.5rem",
            marginBottom: "2rem",
            borderLeft: "4px solid var(--sand)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "var(--navy)",
              marginBottom: "0.75rem",
            }}
          >
            About This Home
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "#4a3728",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {content.welcome.message}
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "var(--sand)",
              marginTop: "1rem",
              textAlign: "right",
            }}
          >
            — {content.welcome.hostName}
          </p>
        </div>

        {/* Guest Segment Cards */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--navy)",
              marginBottom: "1rem",
            }}
          >
            Perfectly Located For...
          </h2>
          {[
            {
              icon: "🏥",
              title: "Medical Families",
              desc: "ORMC, MD Anderson, Winnie Palmer & Arnold Palmer hospitals are all within 4 miles. We're glad to be a comfortable home base during difficult times.",
            },
            {
              icon: "🏰",
              title: "Theme Park Families",
              desc: "Disney is 25 minutes. Universal and SeaWorld are 20 minutes. Come home and cool off in the pool after a full day in the parks.",
            },
            {
              icon: "🏟️",
              title: "Sports & Concert Fans",
              desc: "Camping World Stadium (home of Jaguars 2027 season) is 15 minutes. Kia Center for Magic games and concerts is 10 minutes.",
            },
            {
              icon: "💼",
              title: "Extended Stay Guests",
              desc: "Traveling nurses, professionals, and long-term visitors love our central location, workspace, and home-away-from-home comfort.",
            },
          ].map((seg) => (
            <div
              key={seg.title}
              style={{
                background: "var(--white)",
                borderRadius: "12px",
                padding: "1rem 1.125rem",
                marginBottom: "0.625rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{seg.icon}</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--navy)",
                    marginBottom: "2px",
                  }}
                >
                  {seg.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#555",
                    lineHeight: 1.5,
                  }}
                >
                  {seg.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div
          style={{
            background: "var(--sage-light)",
            border: "1.5px solid var(--sage)",
            borderRadius: "12px",
            padding: "1.125rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--navy)",
              marginBottom: "4px",
            }}
          >
            Need Help?
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "var(--sage-dark)",
            }}
          >
            Message us anytime through Airbnb or VRBO. We respond quickly.
          </p>
        </div>
      </div>
    </div>
  );
}
