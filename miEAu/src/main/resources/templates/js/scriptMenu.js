var tlContainerMenu = new TimelineMax({
    paused: true,
    delay: -1,
})

tlContainerMenu.staggerFromTo(
    ".container-menu",
    1,
    { left: "-100%", opacity: 0, display: "none", ease: Power2.easeInOut },
    { left: "0", opacity: 1, display: "flex", ease: Power2.easeInOut },
    0.3
)

var tlmenu = new TimelineMax({
    paused: true,
    delay: -1,
})

tlmenu.staggerFromTo(
    ".menu li",
    1,
    { x: -10, opacity: 0, ease: Power2.easeInOut },
    { x: 0, opacity: 1, ease: Power2.easeInOut },
    0.3
)

$("body").on("click", ".hamburger", function () {    
    tlContainerMenu.play(0)
    tlmenu.play(0)
})

$("body").on("click", ".close", function () {

    tlContainerMenu.reverse(5)
    tlmenu.reverse(-0.5)
})