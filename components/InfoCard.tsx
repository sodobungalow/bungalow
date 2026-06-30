interface InfoCardProps {
  icon?: string;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "highlight";
}

export default function InfoCard({ icon, title, children, variant = "default" }: InfoCardProps) {
  const styles = {
    default: {
      background: "var(--white)",
      border: "1px solid rgba(0,0,0,0.06)",
    },
    warning: {
      background: "#FFF8ED",
      border: "1.5px solid #F5A623",
    },
    highlight: {
      background: "var(--sage-light)",
      border: "1.5px solid var(--sage)",
    },
  };

  return (
    <div
      style={{
        ...styles[variant],
        borderRadius: "12px",
        padding: "1.125rem",
        marginBottom: "1rem",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && <span style={{ fontSize: "1.25rem" }}>{icon}</span>}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: "var(--navy)",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          color: "#444",
          lineHeight: 1.6,
        }}
      >
        {children}
      </div>
    </div>
  );
}
