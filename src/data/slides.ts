export type SlideVariant =
  | "title"
  | "intro"
  | "milestone"
  | "statement"
  | "emphasis"
  | "list"
  | "timeline"
  | "desktop"
  | "ai"
  | "finale"
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
  image?: string;
  imageAlt?: string;
  imageFocus?: string;
  imageOverlay?: string;
  figure?: string;
  figureAlt?: string;
  figureShape?: "circle" | "plain";
  figureWide?: boolean;
  gallery?: string[];
  timeline?: TimelineRow[];
  variant: SlideVariant;
  notes: string;
};

export const slides: Slide[] = [
  {
    variant: "title",
    kicker: "Palestra na URI",
    lines: ["20 anos de desenvolvimento", "de software:", "Mudanças e a IA"],
    notes:
      "O cartaz diz Inteligência Artificial. Abra no arco: vinte anos de ofício, as mudanças, a IA no centro.",
  },
  {
    variant: "intro",
    figure: "/familia.jpg",
    figureAlt: "Mateus com a família na praia",
    figureWide: true,
    lines: ["Mateus Nava"],
    items: [
      "Formado pela URI",
      "Comecei a trabalhar em 2006",
      "Apaixonado por produto que faz sentido para quem usa",
      "Florianópolis — SC 🏖️",
      "Cofundador de duas startups: m2o e Catapulta",
    ],
    notes:
      "Quem você é. URI, 2006, produto, Floripa, duas startups. A foto é calor humano, não currículo.",
  },
  {
    variant: "milestone",
    year: "2006",
    lines: ["Plutão deixou", "de ser planeta."],
    sub: "Enquanto isso, em Erechim, eu comecei a trabalhar.",
    figure: "/plutao.jpg",
    figureAlt: "Plutão",
    figureShape: "circle",
    notes:
      "Quebra-gelo. Deixa a sala rir com Plutão. Aí o pivot: Erechim, primeiro emprego, antes da graduação. Não explique o sistema solar.",
  },
  {
    variant: "statement",
    year: "2006",
    lines: ["Comecei a escrever código", "sem bem saber o que era."],
    sub: "Mas eu gostei. Muito.",
    notes:
      "A ponte humana. Desktop, Delphi, sem mapa. Deixa o gosto aparecer antes da escassez.",
  },
  {
    variant: "statement",
    year: "2006",
    lines: ["A resposta vinha", "pelo correio."],
    sub: "Google era escasso. Delphi Magazine era o caminho.",
    notes:
      "Agora sim a revista. Calibrar velocidade. Não virar stand-up de antigamente.",
  },
  {
    variant: "statement",
    year: "2006",
    lines: ["Eu lia manuais."],
    sub: "O livro ficava aberto ao lado do código.",
    notes:
      "O ofício era ler. Manual, livro, página marcada. Sem aula de “vocês têm que ler mais”. Só o que você fazia.",
  },
  {
    variant: "desktop",
    year: "2006",
    lines: ["Assim era a tela."],
    notes:
      "Deixa a sala reconhecer o Windows, o grid, o Incluir/Excluir. Um segundo. Depois a universidade.",
  },
  {
    variant: "milestone",
    year: "2007",
    lines: ["O iPhone nasceu."],
    sub: "Enquanto isso, em Erechim, eu entrei na universidade.",
    figure: "/iphone-2007.png",
    figureAlt: "O primeiro iPhone",
    figureShape: "plain",
    notes:
      "Quebra-gelo de 2007. O aparelho que mudou o bolso. Aí o pivot: você sentou na URI. Não vire review de produto.",
  },
  {
    variant: "list",
    year: "2007",
    lines: ["Conceitos."],
    items: [
      "Algoritmos",
      "Estrutura de dados",
      "Banco de dados",
      "Cálculo",
      "Raciocínio lógico",
      "Filosofia",
      "Truco",
    ],
    footer: "E muito mais…",
    notes:
      "A grade como chão. Filosofia entra sem pedir desculpa — você explica. Truco é a piada. Feche em e muito mais.",
  },
  {
    variant: "statement",
    year: "2007",
    lines: ["Maratona de programação.", "Conceito. Base."],
    sub: "A linguagem da vez nunca me carregou.",
    figure: "/maratona.jpg",
    figureAlt: "Recorte de jornal da Maratona de Programação da URI",
    figureShape: "plain",
    notes:
      "Maratona como jeito de pensar, não como troféu. O jornal é prova, não altar. Bases como passaporte entre stacks.",
  },
  {
    variant: "emphasis",
    lines: ["Presta atenção", "na teoria."],
    sub: "Você vai gastá-la em empregos que ainda não existem.",
    notes:
      "É recado para você, o de 2007. Se servir para alguém na sala, ótimo. Se não, também.",
  },
  {
    variant: "milestone",
    year: "2008",
    lines: ["Cielo ganhou o ouro", "em Pequim."],
    sub: "Enquanto isso, eu caí na NF-e.",
    figure: "/cielo-pequim-2008.png",
    figureAlt: "Medalha de ouro de Pequim 2008",
    figureShape: "plain",
    notes:
      "Quebra-gelo de 2008. Primeiro ouro da natação brasileira, 50m livre. Um segundo de orgulho. Aí a NF-e. Não vire transmissão esportiva.",
  },
  {
    variant: "list",
    year: "2008",
    lines: ["O que aquele", "projeto ensinou"],
    items: [
      "Ler.",
      "Conversar.",
      "Entender a lei no detalhe.",
      "Amigos para a vida.",
    ],
    footer: "O difícil não era o código.",
    notes:
      "Quem não entende o domínio vira digitador — em 2008 e agora. Amigos para a vida é o saldo. Sem discursinho.",
  },
  {
    variant: "statement",
    year: "2008",
    lines: ["Cheguei como estagiário."],
    sub: "Me deram uma DANFE e falaram: é isso que você vai implementar.",
    footer: "Google existia. A resposta, não.",
    notes:
      "A cena. Estágio, papel, lei. O país inventando o documento em público. Stack Overflow incipiente.",
  },
  {
    variant: "statement",
    year: "2008",
    lines: ["Emitimos NF-e", "via Dataflex."],
    sub: "Integrações Legalis, escritas em C.",
    footer: "Só codar não adianta. Precisa entender produto — e gente.",
    notes:
      "O projeto foi bacana. A stack é detalhe. O que ficou: produto, conversa, e que código sozinho não resolve.",
  },
  {
    variant: "milestone",
    year: "2010",
    lines: ["O Orkut ainda era", "a rede do Brasil."],
    sub: "Enquanto isso, eu migrava o Vivo.com.br.",
    figure: "/orkut-2010.png",
    figureAlt: "Comunidade do Orkut: Eu Odeio Acordar Cedo",
    figureShape: "plain",
    figureWide: true,
    notes:
      "Quebra-gelo de 2010. Recados, comunidades, scrap. Um segundo de reconhecimento. Aí o portal.",
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
    year: "2010",
    lines: ["Primeira empresa grande."],
    sub: "Passei a viajar pra São Paulo. Conheci muita gente. Trabalhei num projeto gigante.",
    notes:
      "Escala, aeroporto, nomes novos. O aprendizado foi real. Não transforme em tour de consultoria.",
  },
  {
    variant: "emphasis",
    lines: ["Trabalhar é uma parte", "da vida."],
    sub: "Hora extra e noite em claro não são carreira. Sou grato pelo que aprendi — e não quero que o trabalho seja o todo.",
    notes:
      "Primeira pessoa. Sem sermão. Vestir a camisa parecia virtude. Era desgaste. Agradeça e feche.",
  },
  {
    variant: "milestone",
    year: "2012",
    lines: ["O mundo ia acabar."],
    sub: "Enquanto isso, eu comecei no Rails.",
    figure: "/maia-2012.png",
    figureAlt: "Calendário maia",
    figureShape: "circle",
    notes:
      "Quebra-gelo de 2012. 21 de dezembro, calendário maia. Deixa rir. Aí o Rails. Não explique Mesoamérica.",
  },
  {
    variant: "statement",
    year: "2012",
    lines: ["Rails. Ruby.", "Simplicidade."],
    sub: "Dali nasceu uma paixão que não é de linguagem.",
    notes:
      "Paixão por Rails e Ruby, convertida: simplicidade como valor. Qual linguagem eu uso? Não importa muito.",
  },
  {
    variant: "statement",
    year: "2012",
    lines: ["RSOnRails.", "Porto Alegre."],
    sub: "Fui com um amigo. Eu já conhecia. O evento me conquistou.",
    notes:
      "A viagem. O amigo. O click. Não vire recap de palestra — o que importou foi o gosto pela simplicidade.",
  },
  {
    variant: "statement",
    year: "2012",
    lines: ["Abri minha primeira empresa.", "Inocode."],
    sub: "Outsourcing, ainda no Rails. Muitos projetos, muitas conexões. Aprendi demais. Foi um ótimo tempo.",
    notes:
      "Ainda na paixão do Rails. Primeira empresa, não pitch. Outsourcing como escola: projetos diferentes, gente, conexão. Fecha com carinho.",
  },
  {
    variant: "milestone",
    year: "2019",
    lines: ["A primeira foto", "de um buraco negro."],
    sub: "Enquanto isso, eu fui pra Porto Alegre — Gcom.",
    figure: "/buraco-negro-2019.jpg",
    figureAlt: "A primeira foto de um buraco negro",
    figureShape: "circle",
    notes:
      "Quebra-gelo de 2019. Deixa a sala reconhecer o anel. Aí o pivot: Porto Alegre, Gcom. Não explique relatividade.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["Fui por um amigo."],
    sub: "Ele já tinha ido. Eu fui atrás.",
    notes:
      "Influência concreta. Sem teoria de networking. Um nome na sala se você quiser.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["Lembra do RSOnRails?"],
    sub: "Foi lá que eu me apaixonei pela Globo. O palco estava cheio deles.",
    notes:
      "Fecha o loop de 2012. O evento plantou a empresa. Sem recap de palestra.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["A Globo era referência."],
    sub: "Desenvolvimento, na época. Foi simplesmente incrível.",
    notes:
      "O prestígio da casa, sem folder. Um segundo de admiração. Depois a mudança de vida.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["Mudei de cidade.", "Mudei de porte."],
    sub: "Porto Alegre. Uma gigante.",
    notes:
      "A escala humana da mudança. Cidade, empresa, corpo. Não vire comparativo de salário.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["Trabalhei com vídeo."],
    sub: "Tudo que saía do estúdio passava pelo software do nosso time antes de ir pra internet.",
    notes:
      "A cena concreta. Estúdio → nosso software → internet. O time no meio do caminho. Sem stack.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["Momentos em POA."],
    gallery: [
      "/poa-arena.jpg",
      "/poa-por-do-sol.jpg",
      "/poa-maratona.jpg",
      "/poa-cachorros.jpg",
      "/poa-show.jpg",
    ],
    notes:
      "Um mosaico da cidade. Arena, lago, corrida, cachorros, chuva no show. Deixa a sala ver a vida. Sem narrar cada foto.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["As conexões", "importam demais."],
    sub: "Fiz muitos amigos em POA. Veio a pandemia. As conexões ficaram.",
    notes:
      "Amizade primeiro, pandemia como corte, conexão como o que sobra. Sem aula de networking.",
  },
  {
    variant: "milestone",
    year: "2021",
    lines: ["A vacinação da covid", "começou."],
    sub: "Enquanto isso, eu trabalhei remoto pra SimplePractice — Santa Monica.",
    figure: "/vacina-2021.jpg",
    figureAlt: "Vacinação da covid",
    figureShape: "circle",
    notes:
      "Quebra-gelo de 2021. A fila, o braço, o alívio. Aí o pivot: remoto, SimplePractice, empresa de Santa Monica. Não diga que você se mudou.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["Um sonho antigo."],
    sub: "Trabalhar internacionalmente. Pela primeira vez.",
    notes:
      "O sonho, não o currículo. SimplePractice já está no marco. Aqui é o peito.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["O medo era o inglês."],
    sub: "Por isso eu ainda não tinha ido.",
    notes:
      "Medo da língua, não do código. Sem aula de inglês. Sem “vocês têm que”. Só o que te segurou.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["Meu time."],
    sub: "Evento presencial em Santa Monica.",
    figure: "/simplepractice-time.jpg",
    figureAlt: "O time da SimplePractice",
    figureWide: true,
    notes:
      "A foto fala. Nomeie se quiser. Sem org chart.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["Amizades."],
    figure: "/simplepractice-amigos.jpg",
    figureAlt: "Amigos da SimplePractice",
    figureWide: true,
    notes:
      "O escritório vira arquibancada. A rede que ficou. Sem discurso de networking.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["Pessoas incríveis."],
    sub: "Empresa incrível. Como sempre, eu valorizo isso demais.",
    notes:
      "Experiência, casa, gente. O valor é o mesmo de sempre. Sem folder da empresa.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["Virei tech lead."],
    sub: "O motivo: comunicação excelente.",
    notes:
      "Não foi o Rails. Foi falar, escrever, alinhar. Fecha o slide do inglês sem apontar o dedo.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["Codei muito em Rails."],
    sub: "Amava esse trabalho.",
    notes:
      "A paixão de 2012 ainda estava viva. Um segundo de gosto. Sem stack review.",
  },
  {
    variant: "statement",
    year: "2021",
    lines: ["GitHub Copilot."],
    sub: "Passei a produzir muito mais. A IA tinha chegado de vez. Era mágico: o autocomplete gerava código.",
    footer: "Na SimplePractice eu falei sobre isso. Virei heavy user. Aqui a história do desenvolvimento de software muda.",
    notes:
      "O primeiro contato de verdade. Copilot, não ChatGPT. Produção, palestra, vício. A virada da história. Sem demo.",
  },
  {
    variant: "ai",
    lines: ["Mas isso era", "só o começo."],
    sub: "Muita coisa estava por vir.",
    notes:
      "O divisor. Deixa o campo novo entrar. Não antecipe Cursor, Miro, agentes. Só o pressentimento.",
  },
  {
    variant: "milestone",
    year: "2024",
    lines: ["As enchentes no", "Rio Grande do Sul."],
    sub: "Enquanto isso, eu entrei na primeira startup de SF.",
    figure: "/enchente-rs-2024.jpg",
    figureAlt: "Enchentes no Rio Grande do Sul, 2024",
    figureShape: "plain",
    figureWide: true,
    notes:
      "2024 pesa. Maio, o Estado debaixo d’água. Um segundo de silêncio. Sem número, sem espetáculo. Aí o pivot: primeira startup de SF.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["Uma startup", "do Vale."],
    sub: "Trabalhar ali me fez perceber que tudo estava mudando.",
    notes:
      "O choque de densidade. Não vire folder do Vale. O que importa é a percepção: o chão se moveu.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["Passei a trabalhar", "orientando o prompt."],
    sub: "Cursor foi a ferramenta escolhida.",
    notes:
      "O ofício, não o produto. Dirigir pelo prompt. Cursor foi a escolha, não o ponto. Sem feature list.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["A IA escrevia código."],
    sub: "E de qualidade.",
    notes:
      "O click depois do Copilot. Não era mais autocomplete. Era código que servia. Sem demo.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["A regra era shipar."],
    sub: "A startup era 100% isso. IA acelerando tudo.",
    notes:
      "Velocidade como cultura, não como slogan. Shipar. A IA no meio do caminho. Sem glamourizar burnout.",
  },
  {
    variant: "emphasis",
    lines: ["O desenvolvimento", "virou outra coisa."],
    notes:
      "A mudança drástica, sem lista. Deixa a sala sentar com a frase. Depois o julgamento.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["Mais arquiteto", "que desenvolvedor."],
    sub: "Mas sem saber o que está sendo feito, não adianta.",
    notes:
      "O ofício mudou de centro. Arquitetura, julgamento. Código gerado sem entendimento é teatro. Sem sermão.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["Momentos em SF."],
    gallery: [
      "/sf-bar.jpg",
      "/sf-cozinha.jpg",
      "/sf-golden-gate.jpg",
      "/sf-pier.jpg",
    ],
    notes:
      "Evento presencial com o time. Cerveja, cozinha, Golden Gate, Pier 39. A cidade e a gente. Sem narrar cada foto.",
  },
  {
    variant: "ai",
    lines: ["A Koala foi adquirida", "pelo Cursor."],
    sub: "Acabou a minha história com a Koala.",
    notes:
      "A notícia. O corte. Gratidão sem troféu. Fecha o capítulo. O Miro vem depois, se vier.",
  },
  {
    variant: "statement",
    year: "2025",
    lines: ["Segunda startup de SF.", "Reforge."],
    sub: "Comecei uma jornada nova.",
    notes:
      "Depois da Koala. Segunda casa no Vale. O nome. Sem recap de produto.",
  },
  {
    variant: "statement",
    year: "2025",
    lines: ["IA construindo IA."],
    sub: "Uma ferramenta 100% IA.",
    footer: "Inception.",
    figure: "/reforge-build.png",
    figureAlt: "Reforge Build",
    figureWide: true,
    notes:
      "A piada do sonho dentro do sonho. A tela do Build fala. Sem architecture diagram.",
  },
  {
    variant: "statement",
    year: "2025",
    lines: ["Momentos em Dublin."],
    sub: "Evento presencial. A cidade ao lado de SF.",
    gallery: [
      "/reforge-salada.png",
      "/reforge-cao.png",
      "/reforge-golden-gate.jpg",
      "/reforge-carro.jpg",
      "/reforge-reuniao.jpg",
      "/reforge-time.jpg",
      "/reforge-jantar.jpg",
    ],
    notes:
      "Dublin, Califórnia — não a Irlanda. Time, mesa, rua, Golden Gate no fim de semana. Sem narrar cada foto.",
  },
  {
    variant: "list",
    year: "2025",
    lines: ["Virei superusuário", "de IA."],
    items: [
      "A base da faculdade virou diferencial.",
      "Comunicação — mesmo em inglês.",
    ],
    footer: "Só assim dava pra acompanhar o ritmo.",
    notes:
      "O ritmo exigiu IA. O que segurou em pé foi 2007 outra vez: base e fala. Sem aula de inglês. Sem “voltem pra faculdade”.",
  },
  {
    variant: "ai",
    year: "2026",
    lines: ["A Reforge foi adquirida", "pelo Miro."],
    sub: "É onde estou hoje.",
    notes:
      "A segunda notícia. Você chega na Miro pela porta da Reforge. Ainda não é o fim. Sem recap de deal.",
  },
  {
    variant: "milestone",
    year: "2026",
    lines: ["A Copa foi", "nas Américas."],
    sub: "Enquanto isso, eu comecei na Miro.",
    figure: "/bola-2026.svg",
    figureAlt: "Bola",
    figureShape: "circle",
    notes:
      "Quebra-gelo de 2026. O Mundial em casa das Américas. Um segundo. Aí o pivot: Miro. Sem placar.",
  },
  {
    variant: "statement",
    year: "2026",
    lines: ["A Miro é o quadro", "do mundo."],
    sub: "Mais de 100 milhões de pessoas. 250 mil empresas. Um lugar onde times pensam juntos.",
    notes:
      "O que é a casa, sem folder. Lousa, colaboração, escala. Sem valuation.",
  },
  {
    variant: "statement",
    year: "2026",
    lines: ["Funcionalidades", "para milhões."],
    sub: "Literalmente. De usuários.",
    notes:
      "O peso do ship. Um botão chega em milhões. Sem estatística de vanity.",
  },
  {
    variant: "statement",
    year: "2026",
    lines: ["A IA lê o código gigante."],
    sub: "Regras demais. O onboarding acelerou.",
    notes:
      "Legado, regra, gente nova. A IA como lanterna, não como autor. Sem demo.",
  },
  {
    variant: "ai",
    year: "2026",
    lines: ["A Miro foi adquirida", "pela Bending Spoons."],
    sub: "1,3 bilhão de dólares.",
    notes:
      "A terceira. Surpresa. Setembro, agora. Sem análise de deal. Deixa cair.",
  },
  {
    variant: "emphasis",
    lines: ["E agora?"],
    sub: "Não sei. Isso tudo é muito recente.",
    notes:
      "Primeira pessoa, sem pose. A sala vê que a história ainda está quente. Abre o fecho.",
  },
  {
    variant: "list",
    year: "2006 — 2026",
    lines: ["O que eu vi", "se repetir"],
    items: ["Clareza.", "Simplicidade.", "Responsabilidade.", "Gentileza firme."],
    footer: "Aqui ou na Califórnia.",
    notes:
      "Não é “precisa ir embora”. Não é “façam como eu”. Em SF, gente com quem dava para construir era mais rara que talento.",
  },
  {
    variant: "milestone",
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
    lines: ["Quando gerar código", "é barato, caro é saber", "se aquele código", "deveria existir."],
    notes:
      "O universo do código. Gerar ficou barato. Entender, otimizar, criticar — esse é o ofício.",
  },
  {
    variant: "finale",
    lines: ["Duas coisas", "não mudam."],
    sub: "Tudo muda o tempo todo. Com a IA, a cada segundo.",
    items: [
      "Base. Entender o porquê. Saber otimizar. Saber criticar o código que a IA fez.",
      "Relações. Pessoas importam mais que qualquer tecnologia. Construir para a vida. Construir para a carreira.",
    ],
    notes:
      "O fecho. Duas colunas. Sem terceira. Sem “façam como eu”. Agradeça e cale.",
  },
  {
    variant: "close",
    lines: ["Obrigado."],
    sub: "Fico para conversar.",
    notes: "Agradeça a quem convidou. Convide pergunta. Desça do palco cedo.",
  },
];
