// 1. DADOS (fica no topo)
const pratos = [
    {
        titulo: "PURÊ DE MANDIOQUINHA AO MOLHO PESTO",
        descricao: "Purê de mandioquinha com molho pesto...",
        ingredientes: [
            "500g de mandioquinha",
            "2 colheres de manteiga"
        ],
        preparo: "Cozinhe a mandioquinha...",
        imagem: "img/pureMandioquinha.png"
    },
    {
        titulo: "FILÉ MIGNON NA MANTEIGA DE ERVAS COM BATATAS RÚSTICAS E AIÓLI",
        descricao: "Filé suculento...",
        ingredientes: [
            "Carne",
            "Alho"
        ],
        preparo: "Grelhe o filé...",
        imagem: "img/fileMignon.png"
    },
    {
        titulo: "BROWNIE DE CHOCOLATE",
        descricao: "Filé suculento...",
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
    document.querySelector('.titulo').textContent = prato.titulo;
    document.querySelector('.descricao').textContent = prato.descricao;
    document.querySelector('.preparo').textContent = prato.preparo;

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