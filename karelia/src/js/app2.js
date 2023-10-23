import '../scss/style.scss';
import * as myFunctions from './files/functions.js';
import * as menuFunctions from './files/burger.js';
import { getWeather, setWeather } from './functions/get-weather.js';
import { initSwiper } from './functions/swiper.js';
import { Visible, initVisible } from './functions/scroll.js';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();

// Модуль для работы с меню-бургер
menuFunctions.menuInit();

initSwiper();
initVisible('.header');

// setWeather();
getWeather();