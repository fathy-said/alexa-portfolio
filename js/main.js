// ==header==

let headerSection = document.querySelector(".header");
let NavBox = document.querySelector(".nav-box");
let manuBox = document.querySelector(".nav-box .manu");
let navManu = document.querySelector(".nav-box .nav");
let navLiA = document.querySelectorAll(".nav-box .nav li a");
let closeManu = document.querySelector(".nav-box .close");
let changeDark = document.querySelector(".nav-box .change-dark");
let boxUP = document.querySelector(".box-up");

window.addEventListener("click", (e) => {
    // add-the-active-in-the-nav
    if (e.target.classList.contains("manu")) {
        e.stopPropagation();
        e.target.parentElement.parentElement
            .querySelector(".nav")
            .classList.add("active");
    }
    // remove-the-active-in-the-nav
    else if (e.target.classList.contains("close")) {
        e.stopPropagation();
        e.target.parentElement.parentElement.classList.remove("active");
    }

    //
    else if (
        e.target.innerHTML !== navManu.innerHTML &&
        !e.target.classList.contains("ul-lest")
    ) {
        navManu.classList.remove("active");
    }
    // change-the-dark
    if (e.target.classList.contains("light")) {
        document.documentElement.style.setProperty("--body-color", "#181332");
        document.documentElement.style.setProperty("--title-color", "#fff");
        document.documentElement.style.setProperty(
            "--containerXr-color",
            "#fff"
        );
        e.target.classList = "fa-regular fa-sun dark";
    } else if (e.target.classList.contains("dark")) {
        document.documentElement.style.setProperty("--body-color", "#fff");
        document.documentElement.style.setProperty(
            "--title-color",
            " hsl(var(--hue-color), 8%, 15%)"
        );
        document.documentElement.style.setProperty(
            "--containerXr-color",
            "#000"
        );
        e.target.classList = "fa-solid fa-moon light";
    }
});
// scroll-the-widow
console.log(navLiA);
window.addEventListener("scroll", (e) => {
    // header-shadow
    if (this.scrollY >= 100) {
        headerSection.classList.add("active");
    } else if (this.scrollY < 100) {
        headerSection.classList.remove("active");
    }
    // header-shadow
    if (this.scrollY >= 300) {
        boxUP.classList.add("active");
        boxUP.addEventListener("click", (e) => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
    if (this.scrollY < 300) {
        boxUP.classList.remove("active");
    }

    ///
    // loop-navLiA
    ///
    navLiA.forEach((a) => {
        a.classList.remove("active");
        if (window.scrollY >= hero.offsetTop - 100) {
            if (a.dataset.name == hero.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        //
        if (window.scrollY >= about.offsetTop - 250) {
            if (a.dataset.name == about.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        //
        if (window.scrollY >= services.offsetTop - 150) {
            if (a.dataset.name == services.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        //
        if (window.scrollY >= skills.offsetTop - 150) {
            if (a.dataset.name == skills.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        if (window.scrollY >= portfolio.offsetTop - 150) {
            if (a.dataset.name == portfolio.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        if (window.scrollY >= contact.offsetTop - 150) {
            if (a.dataset.name == contact.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }

        //
    });

    function loopNavLiA() {
        navLiA.forEach((a) => {
            a.classList.remove("active");
        });
    }
});

// ==header==
// ===skills===
let skillTitles = document.querySelectorAll(".skills .all-box .title-box");

// loop-the-skillTitles
//

skillTitles.forEach((ti) => {
    ti.addEventListener("click", (e) => {
        ti.parentElement
            .querySelector(".all-skills")
            .classList.toggle("active");
        console.log(ti.querySelector(".box span i"));
        ti.querySelector(".icon-end i").classList.toggle("active");
    });
});
// ===skills===

let qualificationActive = document.querySelectorAll(".all .all-title .titles");
let allBoxActive = document.querySelectorAll(".all .all-box");
//
// loop-the-qualificationActive

qualificationActive.forEach((ec) => {
    ec.addEventListener("click", (e) => {
        // remove-active-all
        qualificationActive.forEach((eo) => {
            eo.classList.remove("active");
        });
        // a-active-to-target
        ec.classList.add("active");

        // loop-the-allBoxActive
        //
        allBoxActive.forEach((ab) => {
            //
            // remove-active-all-for-allBoxActive

            ab.classList.remove("active");
            //
            // remove-active-all-for-allBoxActive

            if (ab.dataset.active == ec.dataset.active) {
                ab.classList.add("active");
            }
        });
    });
});
// ===qualification===
// ===Service ====
let moreBox = document.querySelectorAll(".ser-box .more-box");
let overflowClose = document.querySelectorAll(".ser-box .overflow-box .close");
//
// loop-in-the-moreBox
moreBox.forEach((el) => {
    el.addEventListener("click", (e) => {
        el.parentElement.parentElement
            .querySelector(".overflow-box")
            .classList.add("active");
    });
});
// loop-in-the-overflowClose
overflowClose.forEach((el) => {
    el.addEventListener("click", (e) => {
        el.parentElement.parentElement.classList.remove("active");
    });
});

// ===Service ====
new Swiper(".portfolio .container-1", {
    // effect: "fade",

    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// ===
new Swiper(".container-3", {
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        850: {
            slidesPerView: 1,
        },
        851: {
            slidesPerView: 1.5,
        },
    },
});
