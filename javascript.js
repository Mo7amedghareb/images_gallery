const images = ["images/messi.jpeg", "images/cr7.jpeg", "images/salah.jpeg","images/maradona.jpeg","images/ronaldinho.jpeg"];
const imageElementt = document.getElementById("sliderimg");
function slideImages() {
    let currentIndex = 0;
    let autoSlideInterval;
    const imageElement = document.getElementById("sliderimg");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    function showImage(index) {
        imageElement.src = images[index];
        currentIndex = index;
    }
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function prevSlide() {
        stopAutoSlide();
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(newIndex);
        startAutoSlide();
    }
    function nextSlide() {
        stopAutoSlide();
        const newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
        startAutoSlide();
    }

    imageElement.addEventListener("mouseover", stopAutoSlide);
    imageElement.addEventListener("mouseout", startAutoSlide);

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
    showImage(0);
    startAutoSlide();
}
slideImages();



const pg_fun1=()=>{
    imageElementt.src = images[0];
}
const pg_fun2=()=>{
    imageElementt.src = images[1]; 
}
const pg_fun3=()=>{
    imageElementt.src = images[2];
}
const pg_fun4=()=>{
    imageElementt.src = images[3];
}
const pg_fun5=()=>{
    imageElementt.src = images[4];
}