const boardMembers = [
  { name: "Vacant", role: "President" },
  { name: "Vacant", role: "Vice President" },
  { name: "Vacant", role: "Treasurer" },
  { name: "Vacant", role: "Secretary" },
  { name: "Vacant", role: "Member at Large" },
];

export default function BoardPage() {
  return (
    <section className="page-section">
      <h2 className="page-title">Board</h2>
      <p className="page-text">
        The HOA Board oversees community operations and long-term planning.
      </p>
      <div className="board-grid">
        {boardMembers.map((member) => (
          <div key={member.role} className="board-card">
            <div className="board-photo-placeholder" aria-hidden="true">
              👤
            </div>
            <span className="board-card-name">{member.name}</span>
            <span className="board-card-role">{member.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
