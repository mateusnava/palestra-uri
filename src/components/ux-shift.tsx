export function UxShift() {
  return (
    <figure className="ux-shift" aria-label="De CLI Clipper para chat e UI">
      <div className="ux-shift-frame ux-shift-clipper" aria-hidden>
        <div className="ux-shift-clipper-title">
          <span>SISTEMA COMERCIAL</span>
          <span>NF-e</span>
        </div>
        <div className="ux-shift-clipper-body">
          <p className="ux-shift-clipper-heading">Emissão de Nota Fiscal</p>
          <div className="ux-shift-clipper-fields">
            <div className="ux-shift-clipper-row">
              <span className="ux-shift-clipper-label">Cliente</span>
              <span className="ux-shift-clipper-field">João da Silva</span>
            </div>
            <div className="ux-shift-clipper-row">
              <span className="ux-shift-clipper-label">CNPJ</span>
              <span className="ux-shift-clipper-field">12.345.678/0001-90</span>
            </div>
            <div className="ux-shift-clipper-row">
              <span className="ux-shift-clipper-label">Valor</span>
              <span className="ux-shift-clipper-field is-active">
                1.250,00<span className="ux-shift-clipper-cursor" />
              </span>
            </div>
            <div className="ux-shift-clipper-row">
              <span className="ux-shift-clipper-label">Natureza</span>
              <span className="ux-shift-clipper-field">Prest. de serviço</span>
            </div>
          </div>
          <p className="ux-shift-clipper-keys">
            <span>F5 Gravar</span>
            <span>F8 Consultar</span>
            <span>Esc Sair</span>
          </p>
        </div>
        <div className="ux-shift-clipper-status">
          <span>INS</span>
          <span>Digite o valor e pressione F5</span>
          <span>14:32</span>
        </div>
      </div>
      <span className="ux-shift-arrow" aria-hidden />
      <div className="ux-shift-frame ux-shift-lovable" aria-hidden>
        <div className="ux-shift-chat">
          <p className="ux-shift-bubble is-user">
            Emite uma NF-e pro João da Silva, R$ 1.250,00
          </p>
          <p className="ux-shift-bubble is-bot">
            Ok — confere: CNPJ 12.345.678/0001-90, serviço de consultoria.
          </p>
          <p className="ux-shift-bubble is-user">Pode emitir</p>
          <p className="ux-shift-bubble is-bot">
            NF-e 004812 autorizada. Chave enviada por e-mail.
          </p>
        </div>
      </div>
    </figure>
  );
}
