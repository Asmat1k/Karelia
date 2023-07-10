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
    const functions_bodyUnlock = (delay = 300) => {
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
        if (document.documentElement.classList.contains("lock")) functions_bodyUnlock(delay); else functions_bodyLock(delay);
    };
    function menuInit() {
        if (document.querySelector(".menu__icon")) document.addEventListener("click", (event => {
            if (bodyLockStatus && event.target.closest(".menu__icon")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("active");
                document.querySelector(".menu__icon").classList.toggle("active");
                document.querySelector(".header__menu").classList.toggle("active");
            }
        }));
    }
    isWebp();
    menuInit();
})();