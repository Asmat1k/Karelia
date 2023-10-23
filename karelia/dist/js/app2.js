(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            const webP = new Image;
            webP.onload = webP.onerror = () => {
                callback(webP.height === 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((support => {
            const className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    const bodyUnlock = (delay = 300) => {
        const body = document.querySelector("body");
        if (bodyLockStatus) {
            const lockPadding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((() => {
                bodyLockStatus = true;
            }), delay);
        }
    };
    const functions_bodyLock = (delay = 300) => {
        const body = document.querySelector("body");
        if (bodyLockStatus) {
            const lockPadding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = `${window.innerWidth - document.querySelector(".wrapper").offsetWidth}px`;
            }
            body.style.paddingRight = `${window.innerWidth - document.querySelector(".wrapper").offsetWidth}px`;
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((() => {
                bodyLockStatus = true;
            }), delay);
        }
    };
    const bodyLockToggle = (delay = 300) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else functions_bodyLock(delay);
    };
    function menuInit() {
        if (document.querySelector(".menu__icon")) document.addEventListener("click", (event => {
            if (bodyLockStatus && event.target.closest(".menu__icon")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("active");
                document.querySelector(".menu__icon").classList.toggle("active");
                document.querySelector(".header__menu").classList.toggle("active");
            } else if (event.target.classList.contains("header-nav__list")) {
                bodyLockToggle();
                document.documentElement.classList.add("active");
                document.querySelector(".menu__icon").classList.add("active");
                document.querySelector(".header__menu").classList.add("active");
            } else {
                menuClose();
                document.documentElement.classList.remove("active");
                document.querySelector(".menu__icon").classList.remove("active");
                document.querySelector(".header__menu").classList.remove("active");
            }
        }));
    }
    function menuClose() {
        bodyUnlock();
        document.documentElement.classList.remove("active");
        document.querySelector(".header__menu").classList.remove("active");
    }
    const locations = [ "Рускеала", "Кивач", "Ерсенево", "Поросозеро", "Импилахти" ];
    async function getWeather() {
        const lang = "ru";
        const weatherBlocks = document.querySelectorAll(".temperature");
        for (let i = 0; i < locations.length; i += 1) try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${locations[i]}&lang=${lang}&appid=551cb3c09778bc804cc88404eee46c7e&units=metric`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.cod != 404) {
                const temp = Math.ceil(data.main.temp);
                weatherBlocks[i].innerHTML = temp > 0 ? `+${temp}` : temp === 0 ? "0" : `-${temp}`;
            } else console.log("error");
        } catch {
            console.log("Error!");
        }
    }
    function initSwiper() {
        new Swiper(".swiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            grabCursor: true,
            spaceBetween: 30,
            autoHeight: true,
            centeredSlides: true
        });
    }
    function Visible(target) {
        if (window.location.toString().indexOf("map.html") > 0) return;
        const block = document.querySelector(".button-wrapper");
        var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        }, windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
        if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) block.classList.remove("active"); else block.classList.add("active");
    }
    function initVisible(className) {
        window.addEventListener("scroll", (function() {
            Visible(document.querySelector(className));
        }));
    }
    isWebp();
    menuInit();
    initSwiper();
    initVisible(".header");
    getWeather();
})();