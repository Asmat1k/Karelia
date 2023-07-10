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
    initSwiper();
    initVisible(".header");
    window.onunload = function() {
        console.log("about to clear event listeners prior to leaving page");
        window.removeEventListener("scroll", Visible(".header"));
        return;
    };
})();