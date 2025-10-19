const receitas = [
  {
    id: 1,
    nome: "Bolo de Chocolate",
    imagem: "img/bolo-de-chocolate.png",
    descricao: "Um clássico dos aniversários e encontros familiares.",
    historia: "Popularizado no século XIX, o bolo de chocolate é símbolo de celebração e carinho.",
    indicacao: "Perfeito para festas de aniversário, lanches da tarde e encontros em família.",
    ingredientes: [
      "3 ovos",
      "1 xícara de açúcar",
      "1/2 xícara de óleo",
      "1 xícara de leite",
      "2 xícaras de farinha de trigo",
      "1/2 xícara de cacau em pó",
      "1 colher de sopa de fermento"
    ],
    modoPreparo: [
      "Preaqueça o forno a 180°C.",
      "Bata ovos, açúcar e óleo até homogeneizar.",
      "Adicione leite, farinha, cacau e misture.",
      "Incorpore fermento e asse por 35-40min."
    ]
  },
  {
    id: 2,
    nome: "Minipizza",
    imagem: "img/minipizza.png",
    descricao: "Perfeita para festas e reuniões com amigos.",
    historia: "Inspirada na pizza napolitana, ganhou fama no Brasil nos anos 90 como lanche prático.",
    indicacao: "Ideal para festas infantis e eventos informais.",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "1/2 xícara de água morna",
      "1 colher de sopa de óleo",
      "1 pitada de sal",
      "Molho, queijo e orégano"
    ],
    modoPreparo: [
      "Misture massa com água, óleo e sal.",
      "Modele minipizzas, adicione molho e queijo.",
      "Asse a 180°C por 15-20min."
    ]
  },
  {
    id: 3,
    nome: "Empada",
    imagem: "img/empada.png",
    descricao: "Tradição portuguesa adaptada com recheios brasileiros.",
    historia: "Trazida pelos portugueses, ganhou diversos recheios e virou paixão nacional.",
    indicacao: "Ótima para coffee breaks, festas e piqueniques.",
    ingredientes: [
      "2 xícaras de farinha",
      "100g manteiga",
      "1 ovo",
      "Sal a gosto",
      "Recheio a gosto"
    ],
    modoPreparo: [
      "Misture massa com manteiga, ovo e sal.",
      "Modele forminhas e adicione recheio.",
      "Asse a 180°C por 25-30min."
    ]
  },
  {
    id: 4,
    nome: "Bolo de Fubá",
    imagem: "img/bolo de fuba.jpeg",
    descricao: "Herança da culinária caipira com sabor caseiro",
    historia: "Feito a partir do milho, é símbolo das festas juninas e da cozinha do interior",
    indicacao: "Ideal para cafés da tarde e encontros em família",
    ingredientes: [
      "3 ovos",
      "1 xícara de açúcar",
      "1/2 xícara de óleo",
      "1 xícara de leite",
      "1 xícara de fubá",
      "1 xícara de farinha",
      "1 colher de sopa fermento"
    ],
    modoPreparo: [
      "Bata ovos, açúcar e óleo",
      "Adicione leite, fubá e farinha",
      "Incorpore fermento e asse a 180°C por 35-40min"
    ]
  },
  {
    id: 5,
    nome: "Pipoca de Leite Ninho",
    imagem: "img/pipoca leite ninho.jpeg",
    descricao: "Uma explosão de doçura que conquistou as redes sociais.",
    historia: "Ficou popular nos anos 2010 e se tornou um sucesso em festas e cinemas.",
    indicacao: "Perfeita para festas, sessões de cinema e momentos de descontração.",
    ingredientes: [
      "1/2 xícara de milho",
      "3 colheres de óleo",
      "1/2 xícara de açúcar",
      "1/2 xícara de leite em pó",
      "1 colher de manteiga"
    ],
    modoPreparo: [
      "Estoure o milho no óleo",
      "Adicione manteiga e açúcar",
      "Finalize com leite Ninho"
    ]
  },
  {
    id: 6,
    nome: "Pão Caseiro",
    imagem: "img/pão frances.jpeg",
    descricao: "Símbolo de acolhimento e tradição nas famílias brasileiras.",
    historia: "Preparar o próprio pão sempre foi sinal de cuidado e união familiar.",
    indicacao: "Excelente para cafés da manhã e tardes aconchegantes.",
    ingredientes: [
      "3 xícaras farinha",
      "1 xícara água morna",
      "1 colher açúcar",
      "1 colher sal",
      "1 colher óleo",
      "10g fermento seco"
    ],
    modoPreparo: [
      "Ative o fermento na água com açúcar.",
      "Adicione óleo, sal e farinha.",
      "Sove, deixe crescer e asse a 200°C por 25-35min."
    ]
  },
   {
    id: 7,
    nome: "Panqueca de Frango",
    imagem: "img/panqueca de frango.jpeg",
    descricao: "Uma refeição prática e deliciosa, perfeita para o almoço.",
    historia: "A panqueca se popularizou no Brasil por sua versatilidade e recheios variados.",
    indicacao: "Ideal para refeições rápidas e nutritivas.",
    ingredientes: [
      "2 ovos",
      "1 xícara de leite",
      "1 xícara de farinha de trigo",
      "1 pitada de sal",
      "1 colher (sopa) de óleo",
      "Recheio: frango desfiado, molho de tomate e temperos"
    ],
    modoPreparo: [
      "Bata os ingredientes da massa no liquidificador.",
      "Prepare as panquecas em uma frigideira antiaderente.",
      "Recheie, enrole e leve ao forno com molho por 10 minutos."
    ]
  },
  {
    id: 8,
    nome: "Coxinha Tradicional",
    imagem: "img/coxinha.jpeg",
    descricao: "O salgado mais amado do Brasil!",
    historia: "Criada no século XIX, a coxinha virou símbolo da culinária popular brasileira.",
    indicacao: "Perfeita para festas e lanches.",
    ingredientes: [
      "500g de peito de frango cozido e desfiado",
      "2 xícaras de caldo do cozimento",
      "2 xícaras de farinha de trigo",
      "1 colher de manteiga",
      "Farinha de rosca e ovos para empanar"
    ],
    modoPreparo: [
      "Refogue o frango com temperos.",
      "Ferva o caldo e adicione a farinha até desgrudar da panela.",
      "Modele, empane e frite até dourar."
    ]
  },
  {
    id: 9,
    nome: "Cookie",
    imagem: "img/cookie.jpeg",
    descricao: "Crosta crocante, interior macio e sabor irresistível!",
    historia: "Originado nos EUA, o cookie é hoje um clássico da confeitaria mundial.",
    indicacao: "Perfeito para acompanhar um café ou lanche da tarde.",
    ingredientes: [
      "2 xícaras de farinha de trigo",
      "1/2 colher de fermento",
      "1/2 colher de sal",
      "1 xícara de manteiga",
      "1 xícara de açúcar mascavo",
      "1 ovo",
      "1 xícara de gotas de chocolate"
    ],
    modoPreparo: [
      "Misture os secos e adicione manteiga, ovo e chocolate.",
      "Modele pequenas bolinhas.",
      "Asse a 180°C por 10-12 minutos."
    ]
  },
  {
    id: 10,
    nome: "Bolo de Cenoura",
    imagem: "img/bolo de cenoura.jpeg",
    descricao: "Um clássico dos cafés da tarde brasileiros.",
    historia: "Surgiu no Brasil adaptando receitas europeias com o toque tropical da cenoura.",
    indicacao: "Ideal para acompanhar o café da manhã.",
    ingredientes: [
      "3 cenouras médias",
      "3 ovos",
      "1 xícara de óleo",
      "2 xícaras de açúcar",
      "2 e 1/2 xícaras de farinha de trigo",
      "1 colher de fermento"
    ],
    modoPreparo: [
      "Bata cenoura, ovos e óleo no liquidificador.",
      "Misture o restante dos ingredientes.",
      "Asse por 40 minutos a 180°C e finalize com cobertura de chocolate."
    ]
  },
  {
    id: 11,
    nome: "Brigadeiro Gourmet",
    imagem: "img/brigadeir.jpeg",
    descricao: "O doce brasileiro mais famoso, em versão cremosa e intensa!",
    historia: "Criado nos anos 40, tornou-se símbolo das festas no Brasil.",
    indicacao: "Perfeito para sobremesas e comemorações.",
    ingredientes: [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "Granulado para enrolar"
    ],
    modoPreparo: [
      "Misture tudo em fogo baixo.",
      "Cozinhe até soltar do fundo da panela.",
      "Enrole e passe no granulado."
    ]
  },
  {
    id: 12,
    nome: "Lasanha à Bolonhesa",
    imagem: "img/lasanha.jpeg",
    descricao: "Camadas de sabor e conforto em um prato tradicional.",
    historia: "Inspirada na culinária italiana, é sucesso nas mesas brasileiras.",
    indicacao: "Prato principal para almoços de domingo.",
    ingredientes: [
      "500g de massa para lasanha",
      "400g de carne moída",
      "2 xícaras de molho de tomate",
      "200g de presunto",
      "200g de queijo mussarela",
      "Orégano a gosto"
    ],
    modoPreparo: [
      "Monte as camadas alternando massa, molho, carne e queijo.",
      "Finalize com queijo por cima e leve ao forno até gratinar."
    ]
  }
];


// Detecta se existe o container de receitas (index.html)
const listaReceitas = document.getElementById("lista-receitas");
if (listaReceitas) {
  receitas.forEach(receita => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.addEventListener("click", () => {
      window.location.href = `detalhe.html?id=${receita.id}`;
    });

    card.innerHTML = `
      <h2>${receita.nome}</h2>
      <img src="${receita.imagem}" alt="${receita.nome}">
      <p><strong>Descrição:</strong> ${receita.descricao}</p>
      <p><strong>Indicação de Consumo:</strong> ${receita.indicacao}</p>
    `;

    listaReceitas.appendChild(card);
  });
}

//passa para o detalhe html
const detalheContainer = document.getElementById("detalhamento");
if (detalheContainer) {
  const params = new URLSearchParams(window.location.search);
  const receitaId = Number(params.get("id"));

  if (receitaId) {
    const receita = receitas.find(r => r.id === receitaId);

    if (receita) {
      detalheContainer.innerHTML = `

  <img class="detalhe" src="${receita.imagem}" alt="${receita.nome}">
  <div class="texto-detalhe">
    <h2>${receita.nome}</h2>
    <p class="detalhe"><strong>Descrição:</strong> ${receita.descricao}</p>
    <p class="detalhe"><strong>História:</strong> ${receita.historia}</p>
    <p class="detalhe"><strong>Indicação de Consumo:</strong> ${receita.indicacao}</p>
    <p class="detalhe"><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
    <p class="detalhe"><strong>Como preparar:</strong> ${receita.modoPreparo}</p>
  </div>

    
      `;
    } else {
      detalheContainer.innerHTML = "<p>Receita não encontrada.</p>";
    }
  }
}
// Seleciona onde o conteúdo será inserido
const carouselInner = document.getElementById("carousel-inner");
const carouselIndicators = document.getElementById("carousel-indicators");

// Gera dinamicamente os slides e indicadores
receitas.forEach((receita, index) => {
  // Cria o indicador (os botõezinhos abaixo)
  const indicador = document.createElement("button");
  indicador.type = "button";
  indicador.setAttribute("data-bs-target", "#carouselExampleCaptions");
  indicador.setAttribute("data-bs-slide-to", index);
  if (index === 0) indicador.classList.add("active");
  carouselIndicators.appendChild(indicador);

  // Cria o item do carrossel
  const item = document.createElement("div");
  item.classList.add("carousel-item");
  if (index === 0) item.classList.add("active");

  item.innerHTML = `

    <img src="${receita.imagem}" class="d-block w-100" alt="${receita.titulo}">
    <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
      <h5>${receita.nome}</h5>
      <p>${receita.descricao}</p>
    </div>
  `;

  carouselInner.appendChild(item);
});