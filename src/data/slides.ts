export type SlideVariant =
  | "title"
  | "statement"
  | "emphasis"
  | "list"
  | "timeline"
  | "close";

export type TimelineRow = {
  year: string;
  event: string;
};

export type Slide = {
  year?: string;
  kicker?: string;
  lines: string[];
  sub?: string;
  items?: string[];
  footer?: string;
  timeline?: TimelineRow[];
  variant: SlideVariant;
  notes: string;
};

export const slides: Slide[] = [
  {
    variant: "title",
    kicker: "Uma caminhada",
    lines: ["O que mudou —", "e o que não mudou", "em 20 anos de software"],
    sub: "Mateus",
    notes:
      "Apresente-se em duas frases. Não abra o currículo. Já deixe no ar: isto é um relato, não um modelo.",
  },
  {
    variant: "statement",
    year: "2007 — 2011",
    lines: ["2007 — entrei.", "2011 — saí daqui."],
    notes: "Reconhecimento. Você é ex-aluno, não visitante de palco.",
  },
  {
    variant: "emphasis",
    lines: ["Não sou exemplo."],
    sub: "Vim só compartilhar o que aprendi nisso tudo.",
    notes:
      "Diga sem rodeio. Não é caminho para copiar. Não é sequência certa. O que a sala fizer com o relato é dela.",
  },
  {
    variant: "emphasis",
    lines: ["Tudo ficou irreconhecível."],
    sub: "O que me segurou em pé foi base, julgamento e gente.",
    notes:
      "O resto só ilustra o que você viu. Não peça que a sala grave como regra.",
  },
  {
    variant: "statement",
    year: "2006",
    lines: ["A resposta vinha", "pelo correio."],
    sub: "Desktop · Delphi · Delphi Magazine",
    notes:
      "Revista, escassez, sala do lado. Calibrar velocidade. Não virar stand-up de antigamente.",
  },
  {
    variant: "statement",
    year: "2006",
    lines: ["Informação escassa.", "Atalho nenhum."],
    sub: "O músculo era sentar com o problema.",
    notes:
      "A geração deles vive o contrário — resposta demais. O músculo que você foi forçado a ter hoje é escolha. Sem “vocês têm que”.",
  },
  {
    variant: "statement",
    year: "2007",
    lines: ["A universidade", "me deu o chão."],
    notes:
      "Entrada na graduação. Esta palestra não é um adeus à sala de aula.",
  },
  {
    variant: "statement",
    year: "2007",
    lines: ["Maratona.", "Conceito. Base."],
    sub: "A linguagem da vez nunca me carregou.",
    notes:
      "Maratona como jeito de pensar, não como troféu. Bases como passaporte entre stacks.",
  },
  {
    variant: "emphasis",
    kicker: "Ao Mateus de 2007",
    lines: ["Presta atenção", "na teoria."],
    sub: "Você vai gastá-la em empregos que ainda não existem.",
    notes:
      "É recado para você, o de 2007. Se servir para alguém na sala, ótimo. Se não, também.",
  },
  {
    variant: "statement",
    year: "2008",
    lines: ["Implementar NF-e."],
    sub: "Google existia. A resposta, não.",
    notes:
      "Java Web. O país inventando o documento em público. Manual, lei, time. Stack Overflow incipiente.",
  },
  {
    variant: "list",
    year: "2008",
    lines: ["O que aquele", "projeto ensinou"],
    items: ["Ler.", "Conversar.", "Entender a lei no detalhe."],
    footer: "O difícil não era Java.",
    notes:
      "Quem não entende o domínio vira digitador — em 2008 e agora. Plante a semente da IA sem nomeá-la ainda.",
  },
  {
    variant: "statement",
    year: "2010",
    lines: ["Vivo.com.br", "PHP → Java"],
    sub: "Não faltava informação. Sobrava sistema.",
    notes:
      "Produto grande, legado, marca, muita gente. Carreira como sequência de tipos de dificuldade, não de ferramentas.",
  },
  {
    variant: "statement",
    year: "2012",
    lines: ["Ruby on Rails"],
    sub: "Dali nasceu uma paixão que não é de linguagem.",
    notes:
      "Paixão por Rails e Ruby, convertida: simplicidade como valor. Qual linguagem eu uso? Não importa muito.",
  },
  {
    variant: "emphasis",
    lines: ["Isso precisa ser", "tão complicado?"],
    notes:
      "Essa pergunta viajou até o Miro e até a IA. É preferência sua, não conselho técnico.",
  },
  {
    variant: "timeline",
    kicker: "Vinte anos",
    lines: ["A velocidade"],
    timeline: [
      { year: "2006", event: "Desktop, revistas" },
      { year: "2007", event: "Graduação, maratona" },
      { year: "2008", event: "NF-e" },
      { year: "2010", event: "Vivo.com.br" },
      { year: "2012", event: "Rails" },
      { year: "2021", event: "Santa Monica" },
      { year: "2024", event: "SF → Cursor, Miro" },
      { year: "hoje", event: "IA" },
    ],
    notes:
      "Silêncio quase. Só nomeie. Deixe a sala ver a velocidade. Este é o único slide cheio.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["Santa Monica"],
    sub: "A praia não era o ponto. A gente, sim.",
    notes:
      "Carreira internacional = comunicação, inglês escrito, discordar com educação, rede. O repositório some; a rede fica.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["Duas startups.", "Duas vendas."],
    sub: "Uma para o Cursor. Uma para o Miro — onde estou hoje.",
    notes:
      "Dado antropológico, não troféu. Densidade, pressa, escrita, reputação que viaja. Linguagem do repo é detalhe.",
  },
  {
    variant: "list",
    year: "2021 — 2024",
    lines: ["O que eu vi", "se repetir"],
    items: ["Clareza.", "Simplicidade.", "Responsabilidade.", "Gentileza firme."],
    footer: "Aqui ou na Califórnia.",
    notes:
      "Não é “precisa ir embora”. Não é “façam como eu”. Em SF, gente com quem dava para construir era mais rara que talento.",
  },
  {
    variant: "statement",
    year: "hoje",
    lines: ["A IA mudou como", "a gente pensa e", "constrói software."],
    notes:
      "Anuncie o cuidado: palestra para acadêmicos. A frase da internet é preguiçosa.",
  },
  {
    variant: "emphasis",
    lines: ["Ainda se programa."],
    sub: "Mudou o centro de gravidade.",
    notes:
      "Ainda se lê, se revisa, se responde quando o sistema erra. Ficamos mais arquitetos sem deixar de construir. Gerar ficou barato. Julgar ficou caro.",
  },
  {
    variant: "statement",
    year: "hoje",
    lines: ["Quando gerar texto", "é barato, caro é saber", "se aquele texto", "deveria existir."],
    notes:
      "Na sua história, estar aqui não foi atraso. Foi o lugar que insistiu que entender vem antes de gerar.",
  },
  {
    variant: "list",
    kicker: "O que ficou para mim",
    lines: ["Não é caminho.", "É o que eu aprendi."],
    items: [
      "A base viajou. A stack, não.",
      "Simplicidade me salvou mais vezes.",
      "Gente com quem dá para pensar junto.",
    ],
    notes:
      "Repita: não sou exemplo. Três aprendizados seus, não regras da sala. A caminhada deles não precisa parecer com a sua.",
  },
  {
    variant: "close",
    lines: ["Obrigado."],
    sub: "Fico para conversar.",
    footer: "Mateus",
    notes: "Agradeça a quem convidou. Convide pergunta. Desça do palco cedo.",
  },
];
