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
  | "close"
  | "columns";

export type TimelineRow = {
  year: string;
  event: string;
};

export type SlideColumn = {
  lines: string[];
  sub?: string;
  footer?: string;
};

export type Slide = {
  year?: string;
  kicker?: string;
  lines: string[];
  sub?: string;
  items?: string[];
  columns?: SlideColumn[];
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
  diagram?: "ai-flow" | "dev-shift" | "acq-chain" | "craft-shift";
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
      "Apaixonado por produtos que fazem sentido para quem usa",
      "Florianópolis — SC 🏖️",
      "Cofundador de duas startups: m2o e Catapulta",
    ],
    notes:
      "Quem você é. URI, 2006, produto, Floripa, duas startups. A foto é calor humano, não currículo.",
  },
  {
    variant: "list",
    kicker: "Hoje",
    lines: ["Objetivos", "nessa palestra"],
    items: [
      "Entender que a IA mudou radicalmente como se constrói software.",
      "Ser uma pessoa legal.",
    ],
    notes:
      "Objetivos da palestra, não da vida. Dois só. O primeiro é o ofício. O segundo é o caráter. Pessoa legal é o ponto. Desembala: parceiro, se importar, relações. Sem sermão. Segue a agenda.",
  },
  {
    variant: "list",
    kicker: "Hoje",
    lines: ["Agenda"],
    items: [
      "Uma história. 2006 até agora.",
      "A virada da IA no trabalho.",
      "O que não muda.",
    ],
    notes:
      "Três batidas. Sem horário. O ‘o que é’ entra na virada, raso de propósito. Aí o gelo. Depois Plutão.",
  },
  {
    variant: "statement",
    lines: ["Essa palestra não vai", "falar de assunto", "polêmico."],
    notes:
      "Cara séria. Um segundo. Não sorria. Vira o slide.",
  },
  {
    variant: "emphasis",
    kicker: "Primeiro assunto…",
    lines: ["Eleições 2026."],
    figure: "/urna-confirma.svg",
    figureAlt: "Botão Confirma da urna",
    figureWide: true,
    notes:
      "O soco. Primeiro assunto, Confirma. Deixa a sala rir. Não comente. Não opine. Próximo: Plutão.",
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
    variant: "columns",
    year: "2006",
    lines: ["A resposta vinha pelo correio.", "Eu lia manuais."],
    columns: [
      {
        lines: ["A resposta vinha", "pelo correio."],
        sub: "Google era escasso. Delphi Magazine era o caminho.",
      },
      {
        lines: ["Eu lia manuais."],
        sub: "O livro ficava aberto ao lado do código.",
      },
    ],
    notes:
      "Revista e livro no mesmo quadro. Calibrar velocidade. Não virar stand-up de antigamente. O ofício era ler — sem aula de “vocês têm que ler mais”.",
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
    lines: ["Maratona de programação."],
    sub: "Lógica, raciocínio rápido e adrenalina.",
    figure: "/maratona.jpg",
    figureAlt: "Recorte de jornal da Maratona de Programação da URI",
    figureShape: "plain",
    notes:
      "Maratona como jeito de pensar, não como troféu. O jornal é prova, não altar. Lógica, velocidade, adrenalina.",
  },
  {
    variant: "emphasis",
    lines: ["A teoria importa."],
    sub: "Você vai gastá-la em empregos que ainda não existem.",
    figure: "/teoria-lousa.png",
    figureAlt: "Lousa com grafos e geometria",
    figureWide: true,
    notes:
      "Não é ordem. É o que ficou de 2007. Se servir para alguém na sala, ótimo. Se não, também.",
  },
  {
    variant: "milestone",
    year: "2008",
    lines: ["A TV digital", "chegou ao Brasil."],
    sub: "Enquanto isso, eu caí na NF-e.",
    figure: "/tv-digital-2008.png",
    figureAlt: "Televisão e conversor digital",
    figureShape: "plain",
    notes:
      "Quebra-gelo de 2008. Conversor, antena, HD. A inauguração oficial foi em São Paulo, dezembro de 2007; 2008 é quando o país sentiu. Um segundo de reconhecimento. Aí a NF-e. Não vire aula de ISDB.",
  },
  {
    variant: "columns",
    year: "2008",
    lines: ["Cheguei como estagiário.", "Emitimos NF-e via Dataflex."],
    columns: [
      {
        lines: ["Cheguei como", "estagiário."],
        sub: "Me deram uma DANFE e falaram: é isso que você vai implementar.",
        footer: "Google existia. A resposta, não.",
      },
      {
        lines: ["Emitimos NF-e", "via Dataflex."],
        sub: "Integrações ousadas, escritas em C e BashScript.",
        footer: "Só codar não adianta. Precisa entender produto — e gente.",
      },
    ],
    notes:
      "A cena e o projeto no mesmo quadro. Estágio, DANFE, lei. Google existia, a resposta não. Dataflex, C e Bash são detalhe. O que ficou: produto, conversa, e que código sozinho não resolve.",
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
    variant: "columns",
    year: "2010",
    lines: ["Vivo.com.br PHP → Java", "Primeira empresa grande."],
    columns: [
      {
        lines: ["Vivo.com.br", "PHP → Java"],
        sub: "Um caos para outro caos 😂",
      },
      {
        lines: ["Primeira empresa", "grande."],
        sub: "Passei a viajar pra São Paulo. Conheci muita gente. Trabalhei num projeto gigante.",
      },
    ],
    notes:
      "Produto grande, legado, marca. Um caos para outro. Aí a escala: aeroporto, nomes novos, projeto gigante. Não transforme em tour de consultoria.",
  },
  {
    variant: "milestone",
    year: "2012",
    lines: ["O Instagram foi vendido", "por um bilhão."],
    sub: "Enquanto isso, eu comecei no Rails.",
    figure: "/instagram-2012.svg",
    figureAlt: "Ícone do Instagram em 2012",
    figureShape: "plain",
    notes:
      "Quebra-gelo de 2012. 9 de abril, o anúncio de um bilhão. Deixa a sala reconhecer o ícone. Aí o Rails. Não vire aula de valuation.",
  },
  {
    variant: "columns",
    year: "2012",
    lines: ["Rails. Ruby.", "RS On Rails."],
    columns: [
      {
        lines: ["Rails. Ruby."],
        sub: "Nasceu uma paixão pela simplicidade.",
      },
      {
        lines: ["RS On Rails."],
        sub: "O evento me conquistou.",
      },
    ],
    notes:
      "Paixão por Rails e Ruby, convertida: simplicidade como valor. A viagem, o amigo, o click. Não vire recap de palestra.",
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
    lines: ["O TikTok tomou", "o celular."],
    sub: "Enquanto isso, eu fui pra Porto Alegre — Gcom.",
    figure: "/tiktok-2019.svg",
    figureAlt: "Ícone do TikTok",
    figureShape: "plain",
    notes:
      "Quebra-gelo de 2019. O app virou o feed. Deixa a sala reconhecer o ícone. Aí o pivot: Porto Alegre, Gcom. Não explique o algoritmo.",
  },
  {
    variant: "columns",
    year: "2019",
    lines: ["Lembra do RS On Rails?", "A Globo era referência."],
    columns: [
      {
        lines: ["Lembra do", "RS On Rails?"],
        sub: "Foi lá que eu me apaixonei pela Globo. O palco estava cheio deles.",
      },
      {
        lines: ["A Globo era", "referência."],
        sub: "Desenvolvimento, na época. Foi simplesmente incrível.",
      },
    ],
    notes:
      "Fecha o loop de 2012. Fui por um amigo — ele já tinha ido, eu fui atrás. O evento plantou a empresa. Um segundo de admiração. Sem recap de palestra.",
  },
  {
    variant: "columns",
    year: "2019",
    lines: ["Mudei de cidade. Mudei de porte.", "Trabalhei com vídeo."],
    columns: [
      {
        lines: ["Mudei de cidade.", "Mudei de porte."],
        sub: "Porto Alegre. Uma gigante.",
      },
      {
        lines: ["Trabalhei com", "vídeo."],
        sub: "Tudo que saía do estúdio passava pelo software do nosso time antes de ir pra internet.",
      },
    ],
    notes:
      "A escala humana da mudança. Cidade, empresa, corpo. Aí a cena: estúdio → nosso software → internet. Sem salário, sem stack.",
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
      "/poa-time.jpg",
    ],
    notes:
      "Um mosaico da cidade. Arena, lago, corrida, cachorros, chuva no show, o time na sinuca. Deixa a sala ver a vida. Sem narrar cada foto.",
  },
  {
    variant: "statement",
    year: "2019",
    lines: ["As conexões", "importam demais."],
    sub: "Fiz muitos amigos em POA. Conexões pra vida. Conexões profissionais.",
    figure: "/poa-time.jpg",
    figureAlt: "O time em Porto Alegre",
    figureWide: true,
    notes:
      "Amizade e carreira. Sem pandemia. Sem aula de networking.",
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
    variant: "columns",
    year: "2021",
    lines: ["Virei tech lead.", "Codei muito em Rails."],
    columns: [
      {
        lines: ["Virei tech lead."],
        sub: "O motivo: comunicação excelente.",
      },
      {
        lines: ["Codei muito", "em Rails."],
        sub: "Amava esse trabalho.",
      },
    ],
    notes:
      "Não foi o Rails. Foi falar, escrever, alinhar. Fecha o inglês sem apontar o dedo. A paixão de 2012 ainda estava viva. Pessoas e casa, se couber na fala. Sem folder.",
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
      "O divisor. Daqui: o que é e como funciona. Depois a história segue em 2024.",
  },
  {
    variant: "list",
    year: "hoje",
    lines: ["O que é IA?"],
    items: [
      "Uma LLM. Um modelo treinado com muito texto.",
      "A tarefa: dado o que já está escrito, prever o que vem depois.",
      "Código, explicação, conversa. Tudo entra, porque tudo é texto.",
    ],
    notes:
      "Uma LLM é um modelo treinado com muito texto. No treino, a tarefa é sempre a mesma: dado o que já está escrito, prever o que vem em seguida. Assim ela aprende os padrões da linguagem. Código, explicação, conversa entram juntos, porque tudo isso é texto.",
  },
  {
    variant: "list",
    year: "hoje",
    lines: ["Como funciona?"],
    items: [
      "O treino já acabou. Você escreve um pedido.",
      "Ela lê e produz a resposta na hora, um pedaço de cada vez.",
      "Não busca numa base. Não tem um plano escrito antes.",
    ],
    footer: "Erra com segurança. A continuação mais plausível nem sempre é a verdadeira.",
    notes:
      "No uso, o treino já acabou. O pedido entra, a resposta sai na hora, um pedaço de cada vez. Por isso serve para resumir, traduzir, explicar, escrever código. E por isso erra com segurança: a continuação mais plausível nem sempre é a verdadeira. Uma função que não existe saiu porque parecia a sequência certa.",
  },
  {
    variant: "milestone",
    year: "2024",
    lines: ["A Rebeca ganhou", "o ouro em Paris."],
    sub: "Enquanto isso, eu entrei na primeira startup de SF.",
    figure: "/rebeca-paris-2024.jpg",
    figureAlt: "Rebeca Andrade no solo em Paris 2024",
    figureShape: "plain",
    notes:
      "Quebra-gelo de 2024. Solo, ouro, a sala reconhece. Um segundo de orgulho. Aí o pivot: primeira startup de SF. Não vire transmissão esportiva.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["Koala:", "Uma startup", "do Vale."],
    sub: "Trabalhar ali me deixou orientado: tudo estava mudando.",
    figure: "/sf-vale.jpg",
    figureAlt: "Golden Gate em São Francisco",
    figureWide: true,
    notes:
      "O nome primeiro. A ponte fala SF. Não vire folder do Vale. O que importa é a percepção: o chão se moveu.",
  },
  {
    variant: "statement",
    year: "2024",
    lines: ["Passei a trabalhar", "orientado a prompt."],
    sub: "Cursor foi a ferramenta escolhida.",
    notes:
      "O ofício, não o produto. Orientado a prompt, como orientado a objeto. Cursor foi a escolha, não o ponto. Sem feature list.",
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
    lines: ["A regra era", "entregar. Rápido."],
    sub: "A startup era 100% isso. IA acelerando tudo.",
    notes:
      "Velocidade como cultura, não como slogan. Entregar. A IA no meio do caminho. Sem glamourizar burnout.",
  },
  {
    variant: "emphasis",
    lines: ["O desenvolvimento", "virou outra coisa."],
    diagram: "dev-shift",
    notes:
      "A frase segura a sala. O quadro só aponta o deslocamento: escrever, esperar, executar. Sem ler em voz alta. Depois o julgamento.",
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
    figure: "/miro-board.jpg",
    figureAlt: "Um board do Miro, com um roadmap e o time na chamada",
    figureWide: true,
    notes:
      "O que é a casa, sem folder. O board na tela: deixa a sala ver o quadro. Lousa, colaboração, escala. Sem valuation.",
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
    figure: "/miro-codigo.png",
    figureAlt: "Um cânion de código, com uma luz lendo um trecho",
    figureWide: true,
    notes:
      "Legado, regra, gente nova. A luz no meio do cânion: a IA como lanterna, não como autor. Sem demo.",
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
    diagram: "acq-chain",
    notes:
      "A sequência é a piada. Não leia os nomes. A sala já viu as três. O título segura. Sem deal.",
  },
  {
    variant: "milestone",
    year: "hoje",
    lines: ["A IA mudou como", "a gente pensa e", "constrói software."],
    figure: "/hoje-ia.jpg",
    figureAlt: "Wafer de silício",
    notes:
      "A porta do fecho. O disco é a ferramenta da era, não uma aula de chip. Sem AGI. Sem aula de 40 minutos.",
  },
  {
    variant: "list",
    year: "2006 — 2026",
    lines: ["O que eu vi", "se repetir"],
    items: ["Clareza.", "Simplicidade.", "Responsabilidade.", "Gentileza."],
    footer: "Aqui ou na Califórnia.",
    notes:
      "Não é “precisa ir embora”. Não é “façam como eu”. Em SF, gente com quem dava para construir era mais rara que talento.",
  },
  {
    variant: "list",
    year: "hoje",
    lines: ["O que se usa", "agora"],
    items: [
      "Cursor — editor, índice do repo, o modelo no loop.",
      "Claude Code — agente no terminal.",
      "Codex — o agente da OpenAI.",
      "Copilot — completion no editor.",
    ],
    footer: "A casca muda. Embaixo é o mesmo modelo.",
    notes:
      "Arquitetura, não review. IDE+index, CLI agente, autocomplete. Sem demo. Sem ranking.",
  },
  {
    variant: "statement",
    year: "hoje",
    lines: ["A mudança", "que eu vi."],
    diagram: "craft-shift",
    figure: "/ciclo-oficio-v2.png",
    figureAlt: "Ferramentas em volta; no centro, pessoas e base de conhecimento",
    notes:
      "O quadro é a palestra em miniatura. 2006 contra hoje. Não leia as quatro. Aponta o abismo. O ciclo ao lado: o anel muda, o centro não. Um segundo.",
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
    sub: "Perguntas?",
    notes: "Agradeça. Abra pergunta. Desça do palco cedo.",
  },
];
