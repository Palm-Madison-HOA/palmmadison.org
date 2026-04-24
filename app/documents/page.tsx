const documents = [
  {
    title: "HOA Bylaws",
    description: "The governing bylaws that outline the rules and structure of the HOA.",
    href: "#",
  },
  {
    title: "Declaration of Covenants",
    description: "CC&Rs covering property rights, restrictions, and owner obligations.",
    href: "#",
  },
  {
    title: "Rules & Regulations",
    description: "Community policies covering parking, noise, common areas, and more.",
    href: "#",
  },
  {
    title: "Meeting Minutes",
    description: "Agendas and minutes from recent board and annual meetings.",
    href: "#",
  },
  {
    title: "Budget & Financials",
    description: "Annual budget reports and financial statements for unit owners.",
    href: "#",
  },
  {
    title: "Resident Forms",
    description: "Move-in/move-out forms, maintenance requests, and other resident forms.",
    href: "#",
  },
];

export default function DocumentsPage() {
  return (
    <section className="page-section">
      <h2 className="page-title">Documents</h2>
      <p className="page-text">
        Important HOA documents are available below for easy resident access.
      </p>
      <div className="documents-grid">
        {documents.map((doc) => (
          <div key={doc.title} className="doc-card">
            <span className="doc-card-title">{doc.title}</span>
            <span className="doc-card-desc">{doc.description}</span>
            <a className="doc-card-link" href={doc.href}>
              View / Download →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
