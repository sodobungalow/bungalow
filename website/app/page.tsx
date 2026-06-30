import Image from "next/image";

const AIRBNB_URL = "https://www.airbnb.com/rooms/1445236246524531495";
const VRBO_URL = "https://www.vrbo.com/4682025";

export default function PublicHomePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .pw {
          background: #FAF7F2;
          min-height: 100vh;
          font-family: 'Inter', system-ui, sans-serif;
          color: #2C2C2C;
        }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          padding: 0 1.5rem;
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 64px;
        }
        .nav-logo {
          font-family: 'Georgia', serif; font-size: 1rem; font-weight: 700;
          color: white; letter-spacing: 0.06em; text-transform: uppercase;
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
        }
        .nav-btns { display: flex; gap: 8px; }
        .btn-o {
          padding: 8px 16px; background: transparent; color: white;
          border: 1px solid rgba(255,255,255,0.65); border-radius: 3px;
          font-size: 0.72rem; font-weight: 500; text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .btn-s {
          padding: 8px 16px; background: white; color: #1E3A5F;
          border: 1px solid white; border-radius: 3px;
          font-size: 0.72rem; font-weight: 600; text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        /* ── HERO ── */
        .hero {
          position: relative; height: 100vh;
          min-height: 520px; overflow: hidden;
        }
        .hero-ov {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.22) 0%,
            rgba(0,0,0,0.0) 38%,
            rgba(0,0,0,0.68) 100%
          );
        }
        .hero-c {
          position: absolute; bottom: 0; left: 0; right: 0;
          max-width: 1200px; margin: 0 auto;
          padding: clamp(2rem, 5vw, 4rem) 1.5rem;
        }
        .hero-eye {
          font-family: 'Georgia', serif; font-size: 0.75rem;
          color: rgba(255,255,255,0.75); letter-spacing: 0.18em;
          text-transform: uppercase; margin-bottom: 0.75rem;
        }
        .hero-h1 {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 5.5vw, 4.25rem);
          font-weight: 400; color: white; line-height: 1.1;
          margin-bottom: 1.75rem; max-width: 640px;
        }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-ab {
          padding: 14px 30px; background: #FF5A5F; color: white;
          border-radius: 3px; font-size: 0.78rem; font-weight: 600;
          text-decoration: none; letter-spacing: 0.07em; text-transform: uppercase;
        }
        .btn-vb {
          padding: 14px 30px; background: transparent; color: white;
          border: 1px solid rgba(255,255,255,0.7); border-radius: 3px;
          font-size: 0.78rem; font-weight: 500; text-decoration: none;
          letter-spacing: 0.07em; text-transform: uppercase;
        }

        /* ── INTRO ── */
        .intro {
          max-width: 1200px; margin: 0 auto;
          padding: 4rem 1.5rem 3rem;
        }
        .intro-g {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: center;
        }
        .intro-q {
          font-family: 'Georgia', serif;
          font-size: clamp(1.2rem, 2.5vw, 1.9rem);
          font-weight: 400; color: #1E3A5F; line-height: 1.45;
        }
        .stats-g {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
        }
        .stat { border-top: 1px solid #C4956A; padding-top: 0.875rem; }
        .stat-v {
          font-family: 'Georgia', serif; font-size: 1.5rem;
          font-weight: 400; color: #1E3A5F;
        }
        .stat-l {
          font-size: 0.7rem; color: #999; margin-top: 3px;
          text-transform: uppercase; letter-spacing: 0.08em;
        }

        /* ── FULL-WIDTH IMAGE ── */
        .fi { width: 100%; display: block; height: auto; }

        /* ── KITCHEN + AMENITIES ── */
        .kitch-g {
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: start;
        }
        .kitch-p {
          background: #1E3A5F;
          padding: clamp(2.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3.5rem);
          display: flex; flex-direction: column; justify-content: center;
          min-height: 320px;
        }
        .kitch-t {
          font-family: 'Georgia', serif;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: white; line-height: 1.5; font-weight: 400;
          margin-bottom: 1.75rem;
        }
        .am-l { display: flex; flex-direction: column; gap: 0.75rem; }
        .am-i { display: flex; gap: 10px; align-items: flex-start; }
        .am-d {
          color: #7B9E87; font-size: 0.68rem;
          margin-top: 4px; flex-shrink: 0;
        }
        .am-t {
          font-size: 0.83rem; color: rgba(255,255,255,0.87); line-height: 1.5;
        }

        /* ── THREE PHOTOS ── */
        .three-g {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          gap: 3px; margin-top: 3px;
        }

        /* ── BEDROOM FEATURE ── */
        .bed-s {
          max-width: 1200px; margin: 0 auto;
          padding: 5rem 1.5rem;
        }
        .bed-g {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4.5rem; align-items: center;
        }
        .bed-tag {
          font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C4956A; font-family: 'Georgia', serif;
          display: block; margin-bottom: 1rem;
        }
        .bed-h2 {
          font-family: 'Georgia', serif;
          font-size: clamp(1.4rem, 2.5vw, 2.1rem);
          font-weight: 400; color: #1E3A5F; line-height: 1.3;
          margin-bottom: 1.25rem;
        }
        .bed-p {
          font-size: 0.85rem; color: #555; line-height: 1.8;
          margin-bottom: 0.875rem;
        }

        /* ── POOL / BACKYARD ── */
        .pool-s { position: relative; margin-top: 3px; }
        .pool-ov {
          position: absolute; inset: 0;
          background: linear-gradient(
            to right,
            rgba(30,58,95,0.72) 0%,
            transparent 62%
          );
          pointer-events: none;
        }
        .pool-c {
          position: absolute; left: clamp(1.5rem, 5vw, 4rem);
          top: 50%; transform: translateY(-50%);
          max-width: 340px;
        }
        .pool-h2 {
          font-family: 'Georgia', serif;
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 400; color: white; line-height: 1.3;
          margin-bottom: 0.875rem;
        }
        .pool-p {
          font-size: 0.82rem; color: rgba(255,255,255,0.87); line-height: 1.75;
        }

        /* ── STORY ── */
        .story-s {
          max-width: 1200px; margin: 0 auto;
          padding: 5rem 1.5rem; text-align: center;
        }
        .story-q {
          font-family: 'Georgia', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 400; color: #1E3A5F; line-height: 1.65;
          margin-bottom: 1.25rem;
          max-width: 580px; margin-left: auto; margin-right: auto;
        }
        .story-a {
          font-family: 'Georgia', serif;
          font-size: 0.88rem; font-style: italic; color: #C4956A;
        }

        /* ── LOCATION ── */
        .loc-s {
          border-top: 1px solid #e8e4de;
          border-bottom: 1px solid #e8e4de;
        }
        .loc-i {
          max-width: 1200px; margin: 0 auto;
          padding: 3.5rem 1.5rem;
        }
        .eye {
          font-family: 'Georgia', serif; font-size: 0.75rem;
          color: #7B9E87; letter-spacing: 0.15em;
          text-transform: uppercase; margin-bottom: 1.5rem;
        }
        .loc-g {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #e8e4de;
        }
        .loc-item {
          padding: 1.25rem 0.75rem 1.25rem 0;
          border-bottom: 1px solid #e8e4de;
        }
        .loc-ico { font-size: 1rem; }
        .loc-n {
          font-size: 0.83rem; font-weight: 600;
          color: #1E3A5F; margin-top: 0.4rem;
        }
        .loc-d {
          font-size: 0.7rem; color: #999; margin-top: 2px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* ── WHO STAYS ── */
        .who-s {
          max-width: 1200px; margin: 0 auto;
          padding: 5rem 1.5rem;
        }
        .who-g {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem; margin-top: 2.5rem;
        }
        .who-t {
          font-family: 'Georgia', serif; font-size: 1.05rem;
          font-weight: 400; color: #1E3A5F; margin-bottom: 0.6rem;
        }
        .who-d { font-size: 0.8rem; color: #666; line-height: 1.7; }

        /* ── BOOK CTA ── */
        .book-s {
          position: relative; background: #1E3A5F; overflow: hidden;
        }
        .book-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center 30%;
          opacity: 0.22;
        }
        .book-c {
          position: relative; z-index: 2;
          text-align: center; padding: 5.5rem 1.5rem;
        }
        .book-eye {
          font-family: 'Georgia', serif; font-size: 0.75rem;
          color: rgba(255,255,255,0.6); letter-spacing: 0.15em;
          text-transform: uppercase; margin-bottom: 1rem;
        }
        .book-h2 {
          font-family: 'Georgia', serif;
          font-size: clamp(1.75rem, 5vw, 3rem);
          font-weight: 400; color: white;
          margin-bottom: 2.25rem; line-height: 1.15;
        }
        .book-btns {
          display: flex; gap: 14px;
          justify-content: center; flex-wrap: wrap;
        }
        .btn-abl {
          padding: 16px 38px; background: #FF5A5F; color: white;
          border-radius: 3px; font-size: 0.8rem; font-weight: 600;
          text-decoration: none; letter-spacing: 0.07em; text-transform: uppercase;
        }
        .btn-vbl {
          padding: 16px 38px; background: transparent; color: white;
          border: 1px solid rgba(255,255,255,0.65); border-radius: 3px;
          font-size: 0.8rem; font-weight: 500; text-decoration: none;
          letter-spacing: 0.07em; text-transform: uppercase;
        }

        /* ── FOOTER ── */
        .foot {
          padding: 2.25rem 1.5rem; text-align: center; background: #FAF7F2;
        }
        .foot-b {
          font-family: 'Georgia', serif; font-size: 0.9rem;
          color: #1E3A5F; margin-bottom: 0.35rem;
        }
        .foot-c { font-size: 0.68rem; color: #bbb; }

        /* ── MOBILE 768px ── */
        @media (max-width: 768px) {
          .intro-g { grid-template-columns: 1fr; gap: 2.5rem; }

          .kitch-g { grid-template-columns: 1fr; }
          .kitch-p { min-height: unset; }

          .three-g { grid-template-columns: 1fr; gap: 3px; }

          .bed-g { grid-template-columns: 1fr; gap: 2rem; }
          .bed-s { padding: 3.5rem 1.5rem; }

          .pool-c {
            position: static; transform: none; max-width: 100%;
            background: rgba(30,58,95,0.9);
            padding: 2rem 1.5rem;
          }
          .pool-ov { display: none; }

          .loc-g { grid-template-columns: repeat(2, 1fr); }

          .who-g { grid-template-columns: 1fr; gap: 2rem; }
        }

        /* ── MOBILE 480px ── */
        @media (max-width: 480px) {
          .hero-h1 { font-size: 1.875rem; }
          .hero-btns { flex-direction: column; }
          .btn-ab, .btn-vb { text-align: center; padding: 13px 20px; }

          .stats-g { gap: 1.125rem; }

          .book-btns { flex-direction: column; align-items: center; }
          .book-btns a { width: 100%; max-width: 280px; text-align: center; }

          .loc-g { grid-template-columns: 1fr 1fr; }

          .nav-btns { gap: 6px; }
          .btn-o, .btn-s { padding: 7px 12px; font-size: 0.68rem; }
        }
      `}</style>

      <div className="pw">

        {/* NAV */}
        <nav className="nav">
          <div className="nav-inner">
            <span className="nav-logo">SODO Bungalow</span>
            <div className="nav-btns">
              <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="btn-o">Airbnb</a>
              <a href={VRBO_URL} target="_blank" rel="noopener noreferrer" className="btn-s">Book Now</a>
            </div>
          </div>
        </nav>

        {/* HERO — full bleed, intentionally cropped for cinematic impact */}
        <div className="hero">
          <Image
            src="/pool-hero.jpg"
            alt="SODO Bungalow private pool and outdoor living"
            fill
            style={{ objectFit: "cover", objectPosition: "center 55%" }}
            priority
          />
          <div className="hero-ov" />
          <div className="hero-c">
            <p className="hero-eye">Orlando, Florida</p>
            <h1 className="hero-h1">
              SODO Bungalow<br />in the Heart of Orlando
            </h1>
            <div className="hero-btns">
              <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="btn-ab">
                Book on Airbnb
              </a>
              <a href={VRBO_URL} target="_blank" rel="noopener noreferrer" className="btn-vb">
                Book on VRBO
              </a>
            </div>
          </div>
        </div>

        {/* INTRO */}
        <div className="intro">
          <div className="intro-g">
            <div>
              <p className="intro-q">
                A reimagined family home in the heart of Orlando — with a private pool,
                lush backyard, and everything you need to truly settle in.
              </p>
            </div>
            <div>
              <div className="stats-g">
                {[
                  ["5", "Sleep Spaces"],
                  ["8", "Max Guests"],
                  ["2 nights", "Minimum Stay"],
                  ["1 min", "to Lake Conway"],
                ].map(([v, l]) => (
                  <div key={l} className="stat">
                    <div className="stat-v">{v}</div>
                    <div className="stat-l">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LIVING ROOM — full width, natural proportions */}
        <Image
          src="/living-room.jpg"
          alt="Open-plan living and dining area"
          width={1400}
          height={934}
          className="fi"
        />

        {/* KITCHEN + AMENITIES */}
        <div className="kitch-g">
          <Image
            src="/kitchen.jpg"
            alt="Modern full kitchen"
            width={700}
            height={934}
            className="fi"
          />
          <div className="kitch-p">
            <p className="kitch-t">
              Designed for families who want more than a hotel room.
            </p>
            <div className="am-l">
              {[
                "Full kitchen — stove, fridge, blender, Nespresso",
                "Washer & dryer in-unit",
                "3 Roku TVs — living room, primary suite, junior suite",
                "Central A/C · Electric outdoor grill",
                "Driveway + covered carport parking",
              ].map((item) => (
                <div key={item} className="am-i">
                  <span className="am-d">—</span>
                  <span className="am-t">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THREE PHOTOS — bathroom, living kitchen, living room 2 */}
        <div className="three-g">
          <Image
            src="/bathroom.jpg"
            alt="Renovated bathroom with sage-tile walk-in shower"
            width={467}
            height={700}
            className="fi"
          />
          <Image
            src="/living-kitchen.jpg"
            alt="Kitchen bar seating area"
            width={467}
            height={700}
            className="fi"
          />
          <Image
            src="/living-room-2.jpg"
            alt="Living room with Roku TV"
            width={467}
            height={700}
            className="fi"
          />
        </div>

        {/* BEDROOM FEATURE — prominent dedicated section */}
        <div className="bed-s">
          <div className="bed-g">
            <Image
              src="/bedroom.jpg"
              alt="Primary suite with queen bed and curated furnishings"
              width={700}
              height={900}
              className="fi"
            />
            <div>
              <span className="bed-tag">Primary Suite</span>
              <h2 className="bed-h2">A sanctuary to come home to.</h2>
              <p className="bed-p">
                The primary suite is your private retreat — thoughtfully furnished with a
                queen bed, soft linens, a Roku TV, and its own dedicated bath. After a
                day at the parks or the pool, this is where you exhale.
              </p>
              <p className="bed-p">
                The junior suite sleeps two more comfortably, with the same curated
                care throughout. Every room was designed to feel like home — because a
                family vacation should never feel like a stopover.
              </p>
            </div>
          </div>
        </div>

        {/* BACKYARD / POOL */}
        <div className="pool-s">
          <Image
            src="/backyard.jpg"
            alt="Private fenced backyard with pool"
            width={1400}
            height={934}
            className="fi"
          />
          <div className="pool-ov" />
          <div className="pool-c">
            <h2 className="pool-h2">A private pool,<br />all yours.</h2>
            <p className="pool-p">
              Available 24 hours. Pool toys and floats included.
              Florida sunshine keeps it warm year-round.
            </p>
          </div>
        </div>

        {/* STORY */}
        <div className="story-s">
          <p className="story-q">
            &ldquo;This home has been in our family since the 1960s. After our grandparents
            passed, we lovingly remodeled it and decided to share it with the world.&rdquo;
          </p>
          <p className="story-a">— Carla &amp; Family</p>
        </div>

        {/* LOCATION */}
        <div className="loc-s">
          <div className="loc-i">
            <p className="eye">Location</p>
            <div className="loc-g">
              {[
                ["✈️", "MCO Airport", "10 minutes"],
                ["🏰", "Walt Disney World", "25 minutes"],
                ["🎬", "Universal Studios", "20 minutes"],
                ["🏥", "ORMC & MD Anderson", "4 miles"],
                ["🏟️", "Camping World Stadium", "15 minutes"],
                ["🎵", "Kia Center", "10 minutes"],
              ].map(([ico, n, d]) => (
                <div key={n as string} className="loc-item">
                  <span className="loc-ico">{ico}</span>
                  <div className="loc-n">{n}</div>
                  <div className="loc-d">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHO STAYS HERE */}
        <div className="who-s">
          <p className="eye">Who stays here</p>
          <div className="who-g">
            {[
              {
                title: "Medical families",
                desc: "ORMC, MD Anderson, Winnie Palmer, and Arnold Palmer hospitals are all within 4 miles. A private, comfortable home base when it matters most.",
              },
              {
                title: "Theme park families",
                desc: "Disney, Universal, and SeaWorld all within 25 minutes. Come home to your own pool and kitchen after a full day at the parks.",
              },
              {
                title: "Sports & concert fans",
                desc: "Camping World Stadium is 15 minutes away. Jaguars NFL games starting 2027. Kia Center year-round.",
              },
              {
                title: "Extended stays",
                desc: "Two-night minimum with discounts for longer visits. Full kitchen, laundry, and workspace make it easy to settle in.",
              },
            ].map((g) => (
              <div key={g.title}>
                <h3 className="who-t">{g.title}</h3>
                <p className="who-d">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOOK CTA */}
        <div className="book-s">
          <div
            className="book-bg"
            style={{ backgroundImage: "url('/living-room-2.jpg')" }}
          />
          <div className="book-c">
            <p className="book-eye">Book your stay</p>
            <h2 className="book-h2">Ready when you are.</h2>
            <div className="book-btns">
              <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="btn-abl">
                Book on Airbnb
              </a>
              <a href={VRBO_URL} target="_blank" rel="noopener noreferrer" className="btn-vbl">
                Book on VRBO
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="foot">
          <p className="foot-b">SODO Bungalow</p>
          <p className="foot-c">© 2025 SODO Bungalow · Orlando, Florida · All rights reserved</p>
        </footer>

      </div>
    </>
  );
}
