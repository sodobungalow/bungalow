import Image from "next/image";

const AIRBNB_URL = "https://www.airbnb.com/rooms/1445236246524531495";
const VRBO_URL = "https://www.vrbo.com/4682025";

export default function PublicHomePage() {
  return (
    <div style={{ background: "#FAF7F2", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", color: "#2C2C2C" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 2rem",
        background: "transparent",
        transition: "background 0.3s",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            SODO Bungalow
          </span>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: "9px 22px",
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "4px",
              fontSize: "0.78rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>Airbnb</a>
            <a href={VRBO_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: "9px 22px",
              background: "white",
              color: "#1E3A5F",
              border: "1px solid white",
              borderRadius: "4px",
              fontSize: "0.78rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>Book Now</a>
          </div>
        </div>
      </nav>

      {/* HERO — full bleed, tall */}
      <div style={{ position: "relative", height: "100vh", minHeight: "600px", maxHeight: "900px", overflow: "hidden" }}>
        <Image
          src="/pool-hero.jpg"
          alt="SODO Bungalow — private pool and outdoor living"
          fill
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
          priority
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "clamp(2rem, 5vw, 4rem) 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            Orlando, Florida
          </p>
          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 400,
            color: "white",
            lineHeight: 1.05,
            marginBottom: "2rem",
            maxWidth: "700px",
            letterSpacing: "-0.01em",
          }}>
            Your private<br />Orlando retreat.
          </h1>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: "16px 36px",
              background: "#FF5A5F",
              color: "white",
              borderRadius: "4px",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>Book on Airbnb</a>
            <a href={VRBO_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: "16px 36px",
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "4px",
              fontSize: "0.82rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>Book on VRBO</a>
          </div>
        </div>
        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2rem", right: "2rem", color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", writingMode: "vertical-rl" }}>
          Scroll
        </div>
      </div>

      {/* INTRO */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#1E3A5F",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}>
              A reimagined family home in the heart of Orlando — with a private pool, lush backyard, and everything you need to truly settle in.
            </p>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {[
                ["5", "Sleep Spaces"],
                ["8", "Max Guests"],
                ["2 nights", "Minimum Stay"],
                ["1 min", "to Lake Conway"],
              ].map(([val, label]) => (
                <div key={label} style={{ borderTop: "1px solid #C4956A", paddingTop: "1rem" }}>
                  <div style={{ fontFamily: "'Georgia', serif", fontSize: "1.75rem", fontWeight: 400, color: "#1E3A5F" }}>{val}</div>
                  <div style={{ fontSize: "0.75rem", color: "#888", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO FEATURE — living room full width */}
      <div style={{ position: "relative", height: "clamp(300px, 50vw, 680px)", overflow: "hidden" }}>
        <Image src="/living-room.jpg" alt="Open-plan living and dining" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
      </div>

      {/* TWO-COL: kitchen + text */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", alignItems: "stretch", margin: "1px 0" }}>
          <div style={{ position: "relative", minHeight: "420px" }}>
            <Image src="/kitchen.jpg" alt="Modern kitchen" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{
            background: "#1E3A5F",
            padding: "clamp(2rem, 5vw, 4rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", color: "white", lineHeight: 1.5, fontWeight: 400, marginBottom: "2rem" }}>
              Designed for families who want more than a hotel room.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                "Full kitchen — stove, fridge, blender, Nespresso",
                "Washer & dryer in-unit",
                "3 Roku TVs — living room, primary suite, junior suite",
                "Central A/C · Electric outdoor grill",
                "Driveway + covered carport parking",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "#7B9E87", fontSize: "0.7rem", marginTop: "5px", flexShrink: 0 }}>—</span>
                  <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THREE photos side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", margin: "1px 0" }}>
          {[
            { src: "/bathroom.jpg", alt: "Renovated bathroom with sage walk-in shower" },
            { src: "/bedroom.jpg", alt: "Junior suite" },
            { src: "/living-kitchen.jpg", alt: "Kitchen bar seating" },
          ].map((p) => (
            <div key={p.src} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>

        {/* Backyard full width */}
        <div style={{ position: "relative", height: "clamp(280px, 40vw, 560px)", overflow: "hidden", margin: "1px 0" }}>
          <Image src="/backyard.jpg" alt="Private fenced backyard with pool" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(30,58,95,0.6) 0%, transparent 60%)",
          }} />
          <div style={{
            position: "absolute",
            left: "clamp(1.5rem, 4vw, 3rem)",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "380px",
          }}>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.375rem, 3vw, 2rem)", fontWeight: 400, color: "white", lineHeight: 1.3, marginBottom: "1rem" }}>
              A private pool,<br />all yours.
            </h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              Available 24 hours. Pool toys and floats included. Florida sunshine keeps it warm year-round.
            </p>
          </div>
        </div>
      </div>

      {/* STORY */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)", fontWeight: 400, color: "#1E3A5F", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            &ldquo;This home has been in our family since the 1960s. After our grandparents passed, we lovingly remodeled it and decided to share it with the world.&rdquo;
          </p>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.9rem", fontStyle: "italic", color: "#C4956A" }}>
            — Carla &amp; Family
          </p>
        </div>
      </div>

      {/* LOCATION */}
      <div style={{ background: "#FAF7F2", borderTop: "1px solid #e8e4de", borderBottom: "1px solid #e8e4de" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.8rem", color: "#7B9E87", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Location
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0", borderTop: "1px solid #e8e4de" }}>
            {[
              ["✈️", "MCO Airport", "10 minutes"],
              ["🏰", "Walt Disney World", "25 minutes"],
              ["🎬", "Universal Studios", "20 minutes"],
              ["🏥", "ORMC & MD Anderson", "4 miles"],
              ["🏟️", "Camping World Stadium", "15 minutes"],
              ["🎵", "Kia Center", "10 minutes"],
            ].map(([icon, name, dist]) => (
              <div key={name as string} style={{ padding: "1.5rem 1rem 1.5rem 0", borderBottom: "1px solid #e8e4de" }}>
                <span style={{ fontSize: "1.25rem" }}>{icon}</span>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1E3A5F", marginTop: "0.5rem" }}>{name}</div>
                <div style={{ fontSize: "0.75rem", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{dist}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GUEST TYPES */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.8rem", color: "#7B9E87", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "3rem" }}>
          Who stays here
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "3rem" }}>
          {[
            { title: "Medical families", desc: "ORMC, MD Anderson, Winnie Palmer, and Arnold Palmer hospitals are all within 4 miles. A private, comfortable home base when it matters most." },
            { title: "Theme park families", desc: "Disney, Universal, and SeaWorld all within 25 minutes. Come home to your own pool and kitchen after a full day at the parks." },
            { title: "Sports & concert fans", desc: "Camping World Stadium is 15 minutes away. Jaguars NFL games starting 2027. Kia Center year-round." },
            { title: "Extended stays", desc: "Two-night minimum with discounts for longer visits. Full kitchen, laundry, and a workspace make it easy to settle in." },
          ].map((g) => (
            <div key={g.title}>
              <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.125rem", fontWeight: 400, color: "#1E3A5F", marginBottom: "0.75rem" }}>{g.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.7 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BOOK CTA */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image src="/living-room-2.jpg" alt="SODO Bungalow" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(30,58,95,0.82)" }} />
        <div style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "6rem 2rem",
        }}>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Book your stay
          </p>
          <h2 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "white",
            marginBottom: "2.5rem",
            lineHeight: 1.15,
          }}>
            Ready when you are.
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: "18px 44px",
              background: "#FF5A5F",
              color: "white",
              borderRadius: "4px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>Book on Airbnb</a>
            <a href={VRBO_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: "18px 44px",
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "4px",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>Book on VRBO</a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ padding: "2.5rem 2rem", textAlign: "center", background: "#FAF7F2" }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.95rem", color: "#1E3A5F", marginBottom: "0.375rem" }}>
          SODO Bungalow
        </p>
        <p style={{ fontSize: "0.72rem", color: "#bbb" }}>
          © 2025 SODO Bungalow · Orlando, Florida · All rights reserved
        </p>
      </footer>

    </div>
  );
}
