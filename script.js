
/* Animations */


let object = new IntersectionObserver((Entries) => {
    Entries.forEach((View) => {
        if (View.isIntersecting) {
            View.target.classList.add("show")
        }
    })
})
let hiddenElementsIdle = document.querySelectorAll('.hidden');
hiddenElementsIdle.forEach((element) => {
    object.observe(element)
})
let hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((element) => {
    object.observe(element)
})
let hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((element) => {
    object.observe(element)
})
let hiddenElementsUp = document.querySelectorAll('.hidden-up');
hiddenElementsUp.forEach((element) => {
    object.observe(element)
})
let hiddenElementsDown = document.querySelectorAll('.hidden-down');
hiddenElementsDown.forEach((element) => {
    object.observe(element)
})


/* AutoFunc */
let scrolled = false
addEventListener("scroll", () => {
    scrolled = true
    mouse.style.opacity = 0
});
let mouse = document.querySelector('.Mousegif')
function yo() {
    setTimeout(() => {
        console.log('test');
        if (!scrolled) {
            mouse.style.opacity = 1
        }

    }, 4000);
}
yo()

/* Articles Switch */
let CoffeeFood = document.querySelector(".coffeeFood")
let WineCocktail = document.querySelector(".WineCocktail")
let Article1 = document.querySelector(".menus")
let Article2 = document.querySelector(".menus2")


CoffeeFood.addEventListener("click", () => {
    CoffeeFood.style.backgroundColor = "#d65f5f"
    WineCocktail.style.backgroundColor = "#555252"
    Article1.style.display = "flex"
    Article2.style.display = "none"
})
WineCocktail.addEventListener("click", () => {
    WineCocktail.style.backgroundColor = "#d65f5f"
    CoffeeFood.style.backgroundColor = "#555252"
    Article1.style.display = "none"
    Article2.style.display = "flex"
})