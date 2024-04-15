const typed = new Typed(".typing", {
    strings: ["", "Student", "Software Developer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.getElementById(target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    for (let i = 0; i < totalNavList; i++) {
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const colorSelectors = document.querySelectorAll(".colors span");

    colorSelectors.forEach(selector => {
        selector.addEventListener("click", function() {
            const styleName = this.className;
            setActiveStyle(styleName);
            changeTextColor(styleName);
        });
    });

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

function setActiveStyle(styleName) {
    const alternateStyles = document.querySelectorAll(".alternate-style");
    alternateStyles.forEach(style => {
        if (style.getAttribute("title") === styleName) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

function changeTextColor(styleName) {
    let textColor;
    switch(styleName) {
        case "color-1":
            textColor = "red";
            break;
        case "color-2":
            textColor = "orange";
            break;
        case "color-3":
            textColor = "green";
            break;
        
        default:
            textColor = "black";
    }
    document.body.style.color = textColor;
}