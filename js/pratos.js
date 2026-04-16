const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

const arraySlides = document.querySelectorAll('.slide');
let index = 0;
let lastSlide = arraySlides.length - 1;
const ul = document.querySelector('.ul');



function changeSlide() {
    let activeSlide = document.querySelector('.slide.active');
    activeSlide.classList.remove("active");
    arraySlides[index].classList.add("active");
}

nextButton.onclick = () => {
    if(index < lastSlide) {
        index++;
        changeSlide();
    }else{
        index = 0;
        changeSlide();
    }
};

prevButton.onclick = () => {
    if(index > 0) {
        index--;
        changeSlide();
    }else{
        index = lastSlide;
        changeSlide();
    } 
};

for(let i; i < arraySlides.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
}

document.querySelector("li").classList.add("active");