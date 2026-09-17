const steps = [
  { jargon: "prompt", meaning: "O que você escreveu." },
  { jargon: "token", meaning: "O texto partido em pedaços." },
  { jargon: "LLM", meaning: "A rede. Só prevê o próximo pedaço." },
  { jargon: "sample", meaning: "Escolhe um pedaço na lista de chances." },
  { jargon: "texto", meaning: "A resposta, um pedaço por vez." },
];

export function AiFlow() {
  return (
    <figure className="ai-flow">
      <ol className="ai-flow-steps">
        {steps.map((step, index) => (
          <li key={step.jargon} className="ai-flow-step">
            {index > 0 ? <span className="ai-flow-arrow" aria-hidden /> : null}
            <span className="ai-flow-node">
              <span className="ai-flow-n">{step.jargon}</span>
              <span className="ai-flow-label">{step.meaning}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="ai-flow-loop">
        Esse pedaço volta para o contexto. A janela cresce. Outro pedaço. Até
        parar.
      </p>
    </figure>
  );
}
