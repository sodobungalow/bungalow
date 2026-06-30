import content from "../../content.json";
import RecommendationCard from "@/components/RecommendationCard";

const { localGuide } = content;

function PageHeader() {
  return (
    <div style={{ background: "var(--sage)", padding: "2.5rem 1.5rem 1.75rem" }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.7)",
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
        }}
      >
        Local Guide
      </h1>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          color: "rgba(255,255,255,0.8)",
          marginTop: "6px",
          fontStyle: "italic",
        }}
      >
        Carla&apos;s personal picks for the neighborhood
      </p>
    </div>
  );
}

function LocalSection({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.875rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid var(--sage-light)",
        }}
      >
        <span style={{ fontSize: "1.25rem" }}>{icon}</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "var(--navy)",
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default function LocalPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      <PageHeader />

      <div style={{ padding: "1.5rem" }}>
        {/* Host Pick callout */}
        <div
          style={{
            background: "var(--sage-light)",
            borderRadius: "10px",
            padding: "0.75rem 1rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <span
            style={{
              background: "var(--sage)",
              color: "white",
              fontSize: "0.65rem",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "20px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Host Pick
          </span>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              color: "var(--sage-dark)",
              margin: 0,
            }}
          >
            These are places Carla personally loves and recommends.
          </p>
        </div>

        {/* Walking Distance */}
        <LocalSection icon="🚶" title="Walking Distance">
          {localGuide.walkingDistance.map((place) => (
            <RecommendationCard key={place.name} {...place} type={place.type} />
          ))}
        </LocalSection>

        {/* Coffee & Breakfast */}
        <LocalSection icon="☕" title="Coffee & Breakfast">
          {localGuide.coffeeBreakfast.map((place) => (
            <RecommendationCard key={place.name} {...place} type={place.type} />
          ))}
        </LocalSection>

        {/* Lunch & Dinner */}
        <LocalSection icon="🍽️" title="Lunch & Dinner">
          {localGuide.lunchDinner.map((place) => (
            <RecommendationCard key={place.name} {...place} type={place.type} />
          ))}
        </LocalSection>

        {/* Mexican & Tacos */}
        <LocalSection icon="🌮" title="Mexican & Tacos">
          {localGuide.mexicanTacos.map((place) => (
            <RecommendationCard key={place.name} {...place} type={place.type} />
          ))}
        </LocalSection>

        {/* Groceries */}
        <LocalSection icon="🛒" title="Groceries & Essentials">
          {localGuide.groceries.map((place) => (
            <RecommendationCard key={place.name} {...place} type={place.type} />
          ))}
          <div
            style={{
              background: "var(--white)",
              borderRadius: "10px",
              padding: "0.875rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>🏪</span>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "var(--navy)",
                margin: "4px 0 2px",
              }}
            >
              7-Eleven
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "#555",
              }}
            >
              Walking distance for quick snacks, drinks, and essentials.
            </p>
          </div>
        </LocalSection>

        {/* Theme Parks */}
        <LocalSection icon="🎢" title="Theme Parks">
          {localGuide.themeparks.map((park) => (
            <div
              key={park.name}
              style={{
                background: "var(--white)",
                borderRadius: "12px",
                padding: "1rem 1.125rem",
                marginBottom: "0.75rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{park.emoji}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "var(--navy)",
                    }}
                  >
                    {park.name}
                  </span>
                  <span
                    style={{
                      background: "var(--sage-light)",
                      color: "var(--sage-dark)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "20px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {park.distance}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#555",
                    lineHeight: 1.5,
                    marginTop: "4px",
                  }}
                >
                  {park.description}
                </p>
              </div>
            </div>
          ))}
        </LocalSection>

        {/* Events & Venues */}
        <LocalSection icon="🎵" title="Events & Venues">
          {localGuide.events.map((event) => (
            <div
              key={event.name}
              style={{
                background: "var(--navy)",
                borderRadius: "12px",
                padding: "1rem 1.125rem",
                marginBottom: "0.75rem",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{event.emoji}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "white",
                    }}
                  >
                    {event.name}
                  </span>
                  <span
                    style={{
                      background: "var(--sage)",
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "20px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {event.distance}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.5,
                    marginTop: "4px",
                  }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </LocalSection>

        {/* Rainy Day */}
        <LocalSection icon="🌧️" title="Rainy Day Activities">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "var(--gray-mid)",
              marginBottom: "0.75rem",
              fontStyle: "italic",
            }}
          >
            Orlando summers bring afternoon showers — here&apos;s what to do when they hit.
          </p>
          {localGuide.rainyDay.map((place) => (
            <RecommendationCard
              key={place.name}
              emoji={place.emoji}
              name={place.name}
              type={place.type}
              description={place.description}
            />
          ))}
        </LocalSection>

        {/* Urgent Care & Hospitals */}
        <LocalSection icon="🏥" title="Urgent Care & Hospitals">
          {localGuide.urgentCare.map((place) => (
            <div
              key={place.name}
              style={{
                background: "var(--white)",
                borderRadius: "10px",
                padding: "0.875rem",
                marginBottom: "0.625rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{place.emoji}</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--navy)",
                    marginBottom: "2px",
                  }}
                >
                  {place.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#555",
                  }}
                >
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </LocalSection>
      </div>
    </div>
  );
}
