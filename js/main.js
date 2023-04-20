// prendo gli elementi dall'html
let slider = document.getElementById("slider");
let thumbnailsCont = document.getElementById("thumbnails-cont");
let currentSlide = 0;
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

// creo la gallery di immagini con un ciclo for e setto src e class
const images = ["https://animalia-bio.us-east-1.linodeobjects.com/animals/photos/small/1x1/red-panda-25193861686jpg.webp", "https://nationaltoday.com/wp-content/uploads/2020/12/International-Animal-Rights-Day-300x300.jpg", "https://www.randomlists.com/img/animals/snowy_owl.webp", "https://www.cango.co.za/media/cache/af/ff/afffa4b3cb9c09a0a359ece4d3ff783f.jpg", "https://www.randomlists.com/img/animals/chameleon.webp", "https://www.wildlifeconservancy.ca/!/img/give/Adopt-an-Animal-Button.jpg"];
for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", images[i]);
    image.setAttribute("class", "slide")
    slider.append(image);
}

// creo la gallery di thumbnails allo stesso modo
for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", images[i]);
    image.setAttribute("class", "thumbnail")
    thumbnailsCont.append(image);
}

// setto le classi hidden alle slide e le classi inactive alle thumbnails
let slides = document.getElementsByClassName("slide");
let thumbnails = document.getElementsByClassName("thumbnail");
for (let i = 0; i < slides.length; i++) {
    if (i != 0) {
        slides[i].classList.add("hidden");
        thumbnails[i].classList.add("inactive");
    }
    else {
        thumbnails[i].classList.add("active");
    }
}

// definisco una funzione nextSlide per l'apposito bottone
nextBtn.addEventListener("click", nextSlide);
function nextSlide() {

    if (currentSlide < slides.length - 1) {
        for (let i = 0; i < slides.length; i++) {
            let slide = slides[i];
            let thumbnail = thumbnails[i];
            if (i == currentSlide + 1) {
                slide.classList.remove("hidden");
                thumbnail.classList.remove("inactive");
                thumbnail.classList.add("active");
            }
            else {
                slide.classList.add("hidden");
                thumbnail.classList.add("inactive");
                thumbnail.classList.remove("active");
            }
        }
        currentSlide++;
    }
    else if (currentSlide == slides.length - 1) {
        currentSlide = 0;
        slides[slides.length - 1].classList.add("hidden");
        thumbnails[thumbnails.length - 1].classList.add("inactive");
        thumbnails[thumbnails.length - 1].classList.remove("active");
        slides[0].classList.remove("hidden");
        thumbnails[0].classList.remove("inactive");
        thumbnails[0].classList.add("active");
    }

    console.log(currentSlide);
}

// definisco una funzione prevSlide per l'apposito bottone
prevBtn.addEventListener("click", prevSlide);
function prevSlide() {

    if (currentSlide > 0) {
        for (let i = 0; i < slides.length; i++) {
            let slide = slides[i];
            let thumbnail = thumbnails[i];
            if (i == currentSlide - 1) {
                slide.classList.remove("hidden");
                thumbnail.classList.remove("inactive");
                thumbnail.classList.add("active");
            }
            else {
                slide.classList.add("hidden");
                thumbnail.classList.add("inactive");
                thumbnail.classList.remove("active");
            }

        }
        currentSlide--;
    }
    else if (currentSlide == 0) {
        currentSlide = slides.length - 1;
        slides[0].classList.add("hidden");
        thumbnails[0].classList.add("inactive");
        thumbnails[0].classList.remove("active");
        slides[slides.length - 1].classList.remove("hidden");
        thumbnails[thumbnails.length - 1].classList.remove("inactive");
        thumbnails[thumbnails.length - 1].classList.add("active");
    }

    console.log(currentSlide);
}

// uso un for per aggiungere l'evento click alle anteprime e definisco la funzione 
for (let i = 0; i < thumbnails.length; i++) {
    let thumbnail = thumbnails[i];
    thumbnail.addEventListener("click", function () {
        slides[currentSlide].classList.add("hidden");
        slides[i].classList.remove("hidden");
        thumbnails[currentSlide].classList.add("inactive");
        thumbnails[currentSlide].classList.remove("active");
        thumbnail.classList.add("active");
        currentSlide = i;
    });
}