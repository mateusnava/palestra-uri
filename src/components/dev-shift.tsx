const shifts = [
  { before: "Escrever", after: "Orientar" },
  { before: "Esperar", after: "Entregar" },
  { before: "Executar", after: "Julgar" },
];

export function DevShift() {
  return (
    <figure className="dev-shift">
      <div className="dev-shift-head">
        <span>Antes</span>
        <span aria-hidden />
        <span>Agora</span>
      </div>
      <ol>
        {shifts.map((row) => (
          <li key={row.before}>
            <span className="dev-shift-before">{row.before}</span>
            <span className="dev-shift-arrow" aria-hidden />
            <span className="dev-shift-after">{row.after}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
