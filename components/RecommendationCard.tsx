interface RecommendationCardProps {
  emoji: string;
  name: string;
  type: string;
  description: string;
  hostPick?: boolean;
  distance?: string;
}

export default function RecommendationCard({
  emoji,
  name,
  type,
  description,
  hostPick = false,
  distance,
}: RecommendationCardProps) {
  return (
    <div
      style={{
        background: "var(--white)",
        borderRadius: "12px",
        padding: "1rem 1.125rem",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        border: hostPick
          ? "1.5px solid var(--sage)"
          : "1px solid rgba(0,0,0,0.06)",
        marginBottom: "0.75rem",
      }}
    >
      <div className="flex items-start gap-3">
        <span style={{ fontSize: "1.5rem", flexShrink: 0, lineHeight: 1 }}>
          {emoji}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--navy)",
              }}
            >
              {name}
            </span>
            {hostPick && (
              <span
                style={{
                  background: "var(--sage)",
                  color: "white",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  padding: "2px 7px",
                  borderRadius: "20px",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Host Pick
              </span>
            )}
            {distance && (
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
                {distance}
              </span>
            )}
          </div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--sage-dark)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              marginTop: "1px",
              marginBottom: "4px",
            }}
          >
            {type}
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#555",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
