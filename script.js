let Logo = document.querySelector('.logoContainer');
let LogoName = document.querySelector('.lareserve');
let BurningArrow = document.querySelector('.BurningArrow');
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