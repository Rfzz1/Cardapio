// 1. DADOS (fica no topo)
const pratos = [
    {
        titulo: "PURÊ DE MANDIOQUINHA AO MOLHO PESTO",
        descricao: "Purê de batata baroa cremoso acompanhado de molho pesto fresco e aromático.",
        tempo: "Tempo de preparo: 40 minutos",
        porcoes: "Rende 4 porções",
        ingredientes: [
            "1kg de mandioquinha/batata baroa",
            "3l de água",
            "140g de manteiga em temperatura ambiente",
            "200ml de leite de coco",
            "1 ramo de alecrim",
            "Sal a gosto",
            "Pimenta branca a gosto",
            "Pimenta do reino a gosto",
            "Noz-moscada a gosto",
            "1 xícara de folhas de manjericão fresco",
            "1/4 xícara de castanhas de caju",
            "1/4 xícara de azeite de oliva",
            "3 dentes de alho"
        ],
        preparo: [
            "1- Adicione a mandioquinha descascada e a água em uma panela grande. Cozinhe até que a mandioquinha esteja macia, cerca de 20-25 minutos. Enquanto isso, comece o preparo do molho pesto: pré-aqueça o forno em 200°C e asse as castanhas de caju e um confit de alho(alho e azeite) separados em uma assadeira até que estejam dourados e aromáticos. Reserve e deixe esfriar.",
            "2 - Separe a água do cozimento da mandioquinha, reservando a água para ajustar a consistência do purê, se necessário. Amasse a mandioquinha com um amassador de batatas ou um garfo, enquanto isso deixe o leite de coco fervendo em fogo baixo com o sal, a pimenta, a noz-moscada e um ramo de alecrim.",
            "3 - Quando todas as batatas estiverem amassadas, adicione metade da manteiga cortada em cubos e misture bem. Em seguida, adicione o leite de coco quente aos poucos, mexendo constantemente, até obter a consistência desejada. Alterne entre a manteiga e o leite de coco. Se o purê estiver muito grosso, adicione um pouco da água do cozimento reservada para ajustar a textura conforme o desejo.",
            "4 - Molho pesto: Em um processador de alimentos/pilão/liquidificador, combine as folhas de manjericão fresco, as castanhas de caju assadas, o confit de alho, o sal e a pimenta do reino a gosto. Processe até obter um molho homogêneo. Se necessário, adicione um pouco mais de azeite para alcançar a consistência desejada.",
            "5 - Sirva o purê de mandioquinha em um prato, regado com o molho pesto por cima. Decore com folhas de manjericão fresco e, se desejar, um fio de azeite de oliva extra virgem. Aproveite!"
        ],
        imagem: "img/pureMandioquinha.png"
    },
    {
        titulo: "FILÉ MIGNON NA MANTEIGA DE ERVAS COM BATATAS RÚSTICAS E AIÓLI",
        descricao: "Medalhão de filé mignon suculento, grelhado e servido com uma manteiga de ervas aromática, acompanhado de batatas rústicas crocantes e um aioli cremoso.",
        tempo: "Tempo de preparo: 40 minutos",
        porcoes: "Rende 4 porções",
        ingredientes: [
            "1.5Kg de filé mignon",
            "Alho"
        ],
        preparo: "Grelhe o filé...",
        imagem: "img/fileMignon.png"
    },
    {
        titulo: "BROWNIE DE CHOCOLATE",
        descricao: "Filé suculento...",
        tempo: "Tempo de preparo: 40 minutos",
        porcoes: "Rende 4 porções",
        ingredientes: [
            "Carne",
            "Alho"
        ],
        preparo: "Grelhe o filé...",
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
function renderSlide(index) {
    const prato = pratos[index];

    
console.log(prato.imagem);
    document.querySelector('.titulo').textContent = prato.titulo;
    trocarFundo(prato.imagem);
    document.querySelector('.descricao').textContent = prato.descricao;
    document.querySelector('.tempo').textContent = prato.tempo;
    document.querySelector('.porcoes').textContent = prato.porcoes;
    const preparoContainer = document.querySelector('.preparo');
    preparoContainer.innerHTML = "";

    // se for array
    if (Array.isArray(prato.preparo)) {
        prato.preparo.forEach(passo => {
            const li = document.createElement("li");
            li.textContent = passo;
            preparoContainer.appendChild(li);
        });
    } 
    // se for string (fallback)
    else {
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

    // bullets
    let activeBullet = document.querySelector('.bullets li.active');
    if (activeBullet) activeBullet.classList.remove("active");

    arrayBullets[index].classList.add("active");
}

function trocarFundo(imagem) {
    const fundo = document.querySelector('.fundo');

    // troca imagem
    fundo.style.backgroundImage = `url("${imagem}")`;

    // reset total
    fundo.style.transition = "none";
    fundo.style.transform = "scale(1)";

    // força o reset
    void fundo.offsetWidth;

    // anima de novo
    fundo.style.transition = "transform 4s ease";
    fundo.style.transform = "scale(1.1)";
}

// iniciar
renderSlide(index);

// eventos
nextButton.onclick = () => {
    index = (index + 1) % pratos.length;
    renderSlide(index);
};

prevButton.onclick = () => {
    index = (index - 1 + pratos.length) % pratos.length;
    renderSlide(index);
};

// bullets click
arrayBullets.forEach((bullet, bulletIndex) => {
    bullet.onclick = () => {
        index = bulletIndex;
        renderSlide(index);
    }
});
const fundo = document.querySelector('.fundo');
console.log(fundo);