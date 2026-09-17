const rows = [
  ["00412", "João da Silva", "Erechim", "Ativo"],
  ["00413", "Maria Souza", "Passo Fundo", "Ativo"],
  ["00414", "Pedro Almeida", "Getúlio Vargas", "Inativo"],
  ["00415", "Ana Paula Rocha", "Erechim", "Ativo"],
];

export function DelphiWindow() {
  return (
    <div className="xp-window">
      <div className="xp-title">
        <span className="xp-icon" aria-hidden />
        <span className="xp-title-text">Comercial.exe — Cadastro de Clientes</span>
        <span className="xp-caption">
          <i>_</i>
          <i>□</i>
          <i>×</i>
        </span>
      </div>
      <div className="xp-menu">
        <span>Arquivo</span>
        <span>Editar</span>
        <span>Consultar</span>
        <span>Relatórios</span>
        <span>Ajuda</span>
      </div>
      <div className="xp-body">
        <div className="xp-fields">
          <label>
            Código
            <input readOnly value="00412" />
          </label>
          <label className="xp-wide">
            Nome
            <input readOnly value="João da Silva" />
          </label>
          <label>
            Cidade
            <input readOnly value="Erechim" />
          </label>
          <label>
            Situação
            <input readOnly value="Ativo" />
          </label>
        </div>
        <table className="xp-grid">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Cidade</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row[0]} className={index === 0 ? "is-selected" : undefined}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="xp-buttons">
          <button type="button">Incluir</button>
          <button type="button">Alterar</button>
          <button type="button">Excluir</button>
          <button type="button">Consultar</button>
          <button type="button">Sair</button>
        </div>
      </div>
      <div className="xp-status">
        <span>Pronto</span>
        <span>INS</span>
        <span>NUM</span>
        <span>17/03/2006 14:32</span>
      </div>
    </div>
  );
}
