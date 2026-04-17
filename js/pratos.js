const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

const arraySlides = document.querySelectorAll('.slide');
let index = 0;
let lastSlide = arraySlides.length - 1;

const ul = document.querySelector('.bullets');

// cria os bullets
for(let i = 0; i < arraySlides.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
}

const arrayBullets = document.querySelectorAll('.bullets li');

// ativa o primeiro
arrayBullets[0].classList.add("active");

function changeSlide() {
    let activeSlide = document.querySelector('.slide.active');
    activeSlide.classList.remove("active");
    arraySlides[index].classList.add("active");

    let activeBullet = document.querySelector('.bullets li.active');
    activeBullet.classList.remove("active");
    arrayBullets[index].classList.add("active");
}

// botão next
nextButton.onclick = () => {
    index = (index < lastSlide) ? index + 1 : 0;
    changeSlide();
};

// botão prev
prevButton.onclick = () => {
    index = (index > 0) ? index - 1 : lastSlide;
    changeSlide();
};

// clique nos bullets
arrayBullets.forEach((bullet, bulletIndex) => {
    bullet.onclick = () => {
        index = bulletIndex;
        changeSlide();
    }
});