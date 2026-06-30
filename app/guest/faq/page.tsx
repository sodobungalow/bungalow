import content from "../../content.json";
import AccordionItem from "@/components/AccordionItem";

const { faq } = content;

export default function FAQPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      {/* Header */}
      <div
        style={{
          background: "var(--sand)",
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
            color: "rgba(255,255,255,0.75)",
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
          FAQ
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.8)",
            marginTop: "6px",
          }}
        >
          Quick answers to common questions
        </p>
      </div>

      <div style={{ padding: "1.5rem" }}>
        {faq.map((section) => (
          <div key={section.category} style={{ marginBottom: "1.75rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.25rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--navy)",
                  margin: 0,
                }}
              >
                {section.category}
              </h2>
            </div>
            <div
              style={{
                background: "var(--white)",
                borderRadius: "12px",
                padding: "0 1rem",
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
              }}
            >
              {section.questions.map((qa) => (
                <AccordionItem key={qa.q} question={qa.q} answer={qa.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div
          style={{
            background: "var(--navy)",
            borderRadius: "14px",
            padding: "1.5rem",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "white",
              marginBottom: "6px",
            }}
          >
            Still have a question?
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1rem",
            }}
          >
            We respond to messages quickly — usually within the hour.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "var(--sage)",
              fontWeight: 600,
            }}
          >
            Message us through Airbnb or VRBO
          </p>
        </div>
      </div>
    </div>
  );
}
