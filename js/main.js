// prendo gli elementi dall'html
let slider = document.getElementById("slider");
let currentSlide = 0;
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

// creo la gallery di immagini con un ciclo for
const images = ["https://animalia-bio.us-east-1.linodeobjects.com/animals/photos/small/1x1/red-panda-25193861686jpg.webp", "https://nationaltoday.com/wp-content/uploads/2020/12/International-Animal-Rights-Day-300x300.jpg", "https://www.randomlists.com/img/animals/snowy_owl.webp", "https://www.cango.co.za/media/cache/af/ff/afffa4b3cb9c09a0a359ece4d3ff783f.jpg", "https://www.randomlists.com/img/animals/chameleon.webp", "https://www.wildlifeconservancy.ca/!/img/give/Adopt-an-Animal-Button.jpg"];
for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img");
    slider.append(image);
}

// setto gli url con un altro ciclo for
let slides = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    slides[i].setAttribute("src", images[i]);
}

// setto le classi hidden
for (let i = 0; i < slides.length; i++) {
    if (i != 0) {
    slides[i].classList.add("hidden");
    }
}

// definisco una funzione nextSlide per l'apposito bottone
nextBtn.addEventListener("click", nextSlide);
function nextSlide() {
    
    if (currentSlide < slides.length -1) {
        for (let i = 0; i < slides.length; i++) {
            let slide = slides[i];
            if (i == currentSlide+1) {
                slide.classList.remove("hidden");
            }
            else {
                slide.classList.add("hidden");
            }
            
        }
        currentSlide++;
    }
    else if (currentSlide == slides.length -1) {
        currentSlide = 0;
        slides[slides.length-1].classList.add("hidden");
        slides[0].classList.remove("hidden");
    }
    
    console.log(currentSlide);
}

// definisco una funzione prevSlide per l'apposito bottone
prevBtn.addEventListener("click", prevSlide);
function prevSlide() {

    if (currentSlide > 0) {
        for (let i = 0; i < slides.length; i++) {
            let slide = slides[i];
            if (i == currentSlide-1) {
                slide.classList.remove("hidden");
            }
            else {
                slide.classList.add("hidden");
            }
            
        }
        currentSlide--;
    }
    else if (currentSlide == 0) {
        currentSlide = slides.length -1;
        slides[0].classList.add("hidden");
        slides[slides.length-1].classList.remove("hidden");
    }
    
    console.log(currentSlide);
}