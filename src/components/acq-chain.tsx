const deals = [
  { from: "Koala", to: "Cursor" },
  { from: "Reforge", to: "Miro" },
  { from: "Miro", to: "Bending Spoons" },
];

export function AcqChain() {
  return (
    <figure className="acq-chain">
      <p className="acq-chain-kicker">Em sequência</p>
      <ol>
        {deals.map((deal, index) => (
          <li key={`${deal.from}-${deal.to}`}>
            <span className="acq-n">0{index + 1}</span>
            <span className="acq-from">{deal.from}</span>
            <span className="acq-arrow" aria-hidden />
            <span className="acq-to">{deal.to}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
