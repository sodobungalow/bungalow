interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-6 ${centered ? "text-center" : ""}`}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.625rem",
          fontWeight: 700,
          color: "var(--navy)",
          lineHeight: 1.2,
          marginBottom: subtitle ? "0.375rem" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "var(--gray-mid)",
            fontSize: "0.9rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
