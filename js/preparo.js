// 1. DADOS (fica no topo)
const pratos = [
    {
        titulo: "PURÊ DE MANDIOQUINHA AO MOLHO PESTO",
        descricao: "Purê de batata baroa cremoso acompanhado de molho pesto fresco e aromático.",
        tempo: "Tempo de preparo: 35-40 minutos",
        porcoes: "Rende 10 porções",
        ingredientes: [
            "2,5kg de mandioquinha/batata baroa",
            "3l de água",
            "350g de manteiga sem sal em temperatura ambiente",
            "500ml de leite de coco",
            "1 cebola média picada",
            "3 ramos de alecrim",
            "Sal a gosto",
            "Pimenta branca a gosto",
            "Pimenta do reino a gosto",
            "Noz-moscada a gosto",
            "2,5 xícaras de folhas de manjericão fresco (40g)",
            "2/3 xícara de castanhas de caju (80g)",
            "2/3 xícara de azeite de oliva(160ml)",
            "8 dentes de alho"
        ],
        preparo: [
            "1- Adicione a mandioquinha descascada e a água em uma panela grande. Cozinhe até que a mandioquinha esteja macia, cerca de 20-25 minutos. Enquanto isso, comece o preparo do molho pesto: pré-aqueça o forno em 200°C e asse as castanhas de caju e um confit de alho(alho e azeite) separados em uma assadeira até que estejam dourados e aromáticos. Reserve e deixe esfriar. Enquanto isso, em uma panela pequena, refogue a cebola picada em um pouco de azeite até que esteja translúcida. Reserve.",
            "2 - Separe a água do cozimento da mandioquinha, reservando a água para ajustar a consistência do purê, se necessário. Amasse a mandioquinha com um amassador de batatas ou um garfo, enquanto isso deixe o leite de coco fervendo em fogo baixo com o sal, a pimenta, a noz-moscada e um ramo de alecrim.",
            "3 - Quando todas as batatas estiverem amassadas, adicione metade da manteiga cortada em cubos e misture bem. Em seguida, adicione o leite de coco quente aos poucos, mexendo constantemente, até obter a consistência desejada. Alterne entre a manteiga e o leite de coco. Se o purê estiver muito grosso, adicione um pouco da água do cozimento reservada para ajustar a textura conforme o desejo.",
            "4 - Molho pesto: Em um processador de alimentos/pilão/liquidificador, combine as folhas de manjericão fresco, as castanhas de caju assadas, o confit de alho, o sal e a pimenta do reino a gosto. Processe até obter um molho homogêneo. Se necessário, adicione um pouco mais de azeite para alcançar a consistência desejada.",
            "5 - Sirva o purê de mandioquinha em um prato, regado com o molho pesto por cima. Decore com folhas de manjericão fresco e, se desejar, um fio de azeite de oliva extra virgem. Aproveite!"
        ],
        imagem: "img/pureMandioquinha.png"
    },
    {
        titulo: "FILÉ MIGNON NA MANTEIGA DE ERVAS COM BATATAS RÚSTICAS E AIOLI",
        descricao: "Medalhão de filé mignon suculento, grelhado e servido com uma manteiga de ervas aromática, acompanhado de batatas rústicas crocantes e um aioli cremoso.",
        tempo: "Tempo de preparo: 1 hora e 30 minutos",
        porcoes: "Rende 10 porções",
        ingredientes: [
            "1.5Kg de filé mignon",
            "250g de manteiga sem sal em temperatura de pasta",
            "3 Cabeças de alho",
            "4 ramos de alecrim",
            "2,5 ramos de tomilho",
            "Salsinha fresca a gosto",
            "Cebolinha fresca a gosto",
            "1/3 xícara de sálva fresca (10g)",
            "450 ml de azeite de oliva",
            "360ml de óleo de canola gelado",
            "3 gemas de ovo",
            "Caldo de 1,5 limão siciliano",
            "Sal a gosto",
            "Pimenta do reino a gosto",
            "Pimenta branca a gosto",
            "1,5kg de batata inglesa",
            "2l de água para cozinhar as batatas"
        ],
        preparo: [
            "1 - Pré-aqueça o forno a 200°C. Comece preparando o confit de alho, adicione o alho (separe dois crus e reserve) e 300ml de azeite em um bowl e leve ao forno, até dourarem. Depois, prepare as batatas rústicas: lave as batatas com casca e coloque-as em uma panela grande com água fria, cozinhe em temperatura média por cerca de 30 minutos ou até ficaram macias no meio. Evite furar as batatas.",
            "2 - Enquanto isso, tempere os filés mignon com sal e pimenta do reino a gosto. Aqueça uma frigideira grande em fogo alto, adicione 50g de manteiga, podendo colocar mais conforme o necessário e 4 fios de azeite. Adicione 2 dentes de alho, 1 ramo de alecrim e 1 ramo de tomilho, depois coloque os filés mignon e sele cada lado por cerca de 2-3 minutos até que estejam dourados. Transfira os filés para uma assadeira, coloque uma colher generosa da manteiga de ervas sobre cada filé e leve ao forno por cerca de 10-15 minutos para atingir o ponto desejado (malpassado, ao ponto ou bem passado). Vá cuidando das batatas até atingirem o ponto desejado",
            "3 - Escorra a água da batata e coloque-as em uma assadeira grande forrada com papel manteiga, de forma que sobre espaço entre elas. Corte as batatas em 4 partes, tempere com azeite, sal, pimenta branca e 1 ramo de alecrim fresco. Asse as batatas a 200°C por cerca de 30-40 minutos ou até que estejam douradas e crocantes por fora e macias por dentro.",
            "4 - Enquanto os filés estão no forno, prepare a manteiga de ervas: em uma tigela, misture a manteiga em temperatura de pasta com 3 dentes de alho do confit, 2 ramos de alecrim, 1,5 ramos de tomilho, sálvia, salsinha e cebolinha picadas. Tempere com sal e pimenta a gosto. Misture bem até que todos os ingredientes estejam incorporados. Reserve a manteiga de ervas na geladeira para que os sabores se desenvolvam enquanto os filés e as batatas estão assando.",
            "5 - Para o aioli, em uma tigela, combine as gemas e bata com um fouet adicionando 360ml do óleo aos poucos. É obrigatório colocar o óleo de fio em fio para o aioli não talhar. Quando o aioli emulsionar e atingir uma consistência mais dura e cremosa, adicione o resto do alho confitado e o suco de limão siciliano e misture para juntar os ingredientes. Por fim, ajuste o sal.",
            "6 - Sirva os filés mignon regados com a manteiga de ervas, acompanhados das batatas rústicas e do aioli. Aproveite!"
        ],
        imagem: "img/fileMignon.png"
    },
    {
        titulo: "BROWNIE DE CHOCOLATE",
        descricao: "Brownie de chocolate cremoso, com um sabor intenso de chocolate e uma textura levemente crocante por fora.",
        tempo: "Tempo de preparo: 40 minutos",
        porcoes: "Rende 12 porções",
        ingredientes: [
            "Chocolate meio amargo (120g)",
            "Chocolate amargo (170g)",
            "Cacau em pó amargo (40g)",
            "200g de manteiga sem sal (derretida em temperatura ambiente)",
            "1 xícara de açúcar refinado (200g)",
            "3 ovos (temperatura ambiemente)",
            "Essência de baunilha (1 colher de chá)",
            "1 xícara de farinha de trigo (60g)",
            "1 colher de café de sal fino",
            "1 colher de chá de café instantâneo",
            "Nozes picadas (opcional, 100g)"
        ],
        preparo: [
            "1 - Unte uma assadeira quadrada (22x22cm) com manteiga e forre com papel manteiga, deixando uma sobra nas laterais para facilitar na hora de desenformar. Pré-aqueça o forno a 180°C.",
            "2 - Corte o chocolate amargo em pequenos pedaços e reserve. Em uma panela, derreta toda manteiga em fogo baixo, até sentir um cheiro de nozes e ficar com uma cor de avelã torrada, transfira essa manteiga para um bowl e adicione o chocolate amargo picados, o cacau em pó e o café instantâneo. Misture até que o chocolate esteja completamente derretido e a mistura esteja homogênea. Deixe esfriar por alguns minutos.",
            "3 - Em outro bowl, bata os ovos com o açúcar até obter uma mistura clara e fofa (aproximadamente 8 minutos). Adicione a mistura de chocolate derretido aos poucos e a essência de baunilha, misturando delicadamente para incorporar os ingredientes. Peneire a farinha de trigo, o sal e o cacau em pó sobre a mistura e incorpore delicadamente com uma espátula, tomando cuidado para não perder o ar incorporado na massa. Depois, adicione o chocolete meio amargo picado e as nozes, se estiver usando, e misture delicadamente para distribuir uniformemente na massa.",
            "4 - Despeje a massa na assadeira preparada e alise a superfície com uma espátula. Asse no forno pré-aquecido por cerca de 20 a 24 minutos no máximo (não passe disso para manter a textura fudgy).",
            "5 - Retire do forno e deixe esfriar completamente na assadeira para firmar. Para cortar os quadrados, ferva um pouco de água e use para molhar uma faca grande, com ela, você faz as marcações de corte e depois, corte os quadrados de uma só vez, sem arrastar a faca. Sirva e aproveite!"
        ],
        imagem: "img/brownie.jpg"
    }
];

// 2. VARIÁVEIS
const arraySlides = document.querySelectorAll('.slide');
const ul = document.querySelector('.bullets');

let index = 0;

const nextButton = document.querySelector('.nextButton');
const prevButton = document.querySelector('.prevButton');

// cria bullets
for(let i = 0; i < pratos.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
}

const arrayBullets = document.querySelectorAll('.bullets li');
arrayBullets[0].classList.add("active");

// função principal
function renderSlide(index, primeiroLoad = false) {
    const prato = pratos[index];

    document.querySelector('.titulo').textContent = prato.titulo;
    trocarFundo(prato.imagem, primeiroLoad ? 300 : 0); // só uma chamada
    document.querySelector('.descricao').textContent = prato.descricao;
    document.querySelector('.tempo').textContent = prato.tempo;
    document.querySelector('.porcoes').textContent = prato.porcoes;

    const preparoContainer = document.querySelector('.preparo');
    preparoContainer.innerHTML = "";

    if (Array.isArray(prato.preparo)) {
        prato.preparo.forEach(passo => {
            const li = document.createElement("li");
            li.textContent = passo;
            preparoContainer.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = prato.preparo;
        preparoContainer.appendChild(li);
    }

    const lista = document.querySelector('.ingredientes');
    lista.innerHTML = "";

    prato.ingredientes.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });

    let activeBullet = document.querySelector('.bullets li.active');
    if (activeBullet) activeBullet.classList.remove("active");
    arrayBullets[index].classList.add("active");
}

function trocarFundo(imagem, delay = 0) {
    const fundo = document.querySelector('.fundo');

    fundo.style.transition = "none";
    fundo.style.transform = "scale(1)";
    fundo.style.backgroundImage = `url("${imagem}")`;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                fundo.style.transition = "transform 4s ease";
                fundo.style.transform = "scale(1.1)";
            }, delay);
        });
    });
}

// iniciar — passa true só no primeiro load
window.addEventListener('load', () => {
    renderSlide(index, true);
});

// eventos
nextButton.onclick = () => {
    index = (index + 1) % pratos.length;
    renderSlide(index); // primeiroLoad fica false por padrão
};

prevButton.onclick = () => {
    index = (index - 1 + pratos.length) % pratos.length;
    renderSlide(index);
};

arrayBullets.forEach((bullet, bulletIndex) => {
    bullet.onclick = () => {
        index = bulletIndex;
        renderSlide(index);
    }
});