const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const points = document.querySelectorAll(".points");
const imageContainer = document.querySelector(".slider-img");
const image = document.querySelectorAll(".slider-img img");
let i = 0;

points[i].classList.add("selected");

rightArrow.addEventListener("click", () => {
    points[i].classList.remove("selected");
    if (i < image.length - 1) {
        i++
    } else {
        i = 0;
    }
    points[i].classList.add("selected");
    imageContainer.style.transform = `translateX(${-100*i}%)`;
});

points.forEach( (point, index) => {
    point.addEventListener("click", (p) => {
        points[i].classList.remove("selected");
        p.currentTarget.classList.add("selected");
        i=index;
        imageContainer.style.transform = `translateX(${-100*i}%)`;
    })
})

leftArrow.addEventListener("click", () => {
    points[i].classList.remove("selected");
    if (i === 0) {
        i=image.length-1
    } else {
        i--
    }
    points[i].classList.add("selected");
    imageContainer.style.transform = `translateX(${-100*i}%)`;
})

