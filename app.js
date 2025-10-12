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
    descricao: "Herança da culinária caipira com sabor caseiro.",
    historia: "Feito a partir do milho, é símbolo das festas juninas e da cozinha do interior.",
    indicacao: "Ideal para cafés da tarde e encontros em família.",
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
      "Bata ovos, açúcar e óleo.",
      "Adicione leite, fubá e farinha.",
      "Incorpore fermento e asse a 180°C por 35-40min."
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
      "Estoure o milho no óleo.",
      "Adicione manteiga e açúcar.",
      "Finalize com leite Ninho."
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
        <h2>${receita.nome}</h2>
        <img src="${receita.imagem}" alt="${receita.nome}">
        <p><strong>Descrição:</strong> ${receita.descricao}</p>
        <p><strong>História:</strong> ${receita.historia}</p>
        <p><strong>Indicação de Consumo:</strong> ${receita.indicacao}</p>
        <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
        <p><strong>Como preparar:</strong> ${receita.modoPreparo}</p>
  
    
      `;
    } else {
      detalheContainer.innerHTML = "<p>Receita não encontrada.</p>";
    }
  }
}