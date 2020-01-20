const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

let lastScrollTop = 0;

hamburger.addEventListener("click", () => {
    toggleMobileClasses();
});


function expandedMenu() {
    let links = document.querySelectorAll("nav a");
    //checks current screen size
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", () => {
            removeMobileClasses();
        })

    }
} expandedMenu();

function toggleMobileClasses() {
    // toggles class to hamburger and nav. Mobile only use.
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("menu-expanded");
    overlay.classList.toggle("overlay-active");
}
function removeMobileClasses() {
    // removes class to hamburger and nav. Mobile only use.
    hamburger.classList.remove("is-active");
    nav.classList.remove("menu-expanded");
    overlay.classList.remove("overlay-active");
}

function Scroll() {
    window.addEventListener("scroll",function(){
        let header = document.querySelector("header");
        //runs if menu-expanded (mobile nav) is NOT open || activated
        if (nav.classList.contains("menu-expanded") === false) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header.style.top = "-80px";
                enableScroll();
            } else{
                header.style.top = "0";
                disableScroll();
            }
            lastScrollTop = scrollTop;
        }
    });
} Scroll();

function oodridge ()  {
    let name = "OODRIDGE";
    let h3 = document.querySelectorAll(".oodridge");
    for (let i = 0; i < h3.length; i++ ) {
        h3[i].innerHTML = name.split('').join('</div><div>') + '</div>'+"<span class='io'>.IO</span>";
    }
}
oodridge();

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
function enableScroll() {
    window.onscroll = function() {};
}