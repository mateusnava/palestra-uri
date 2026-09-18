const shifts = [
  { before: "O livro ao lado.", after: "O repo no contexto." },
  { before: "A resposta vinha pelo correio.", after: "A resposta vem agora." },
  { before: "Eu escrevia cada linha.", after: "Eu oriento o prompt." },
  { before: "Um form. Um grid.", after: "Um sistema. No ar." },
];

export function CraftShift() {
  return (
    <figure className="craft-shift">
      <div className="craft-shift-head">
        <span>2006</span>
        <span aria-hidden />
        <span>Hoje</span>
      </div>
      <ol>
        {shifts.map((row) => (
          <li key={row.before}>
            <span className="craft-shift-before">{row.before}</span>
            <span className="craft-shift-arrow" aria-hidden />
            <span className="craft-shift-after">{row.after}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
