import '../scss/style.scss';
import * as myFunctions from './files/functions.js';
import * as menuFunctions from './files/burger.js';
import { Visible, initVisible } from './functions/scroll.js';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();

console.log('one');
// Модуль для работы с меню-бургер
menuFunctions.menuInit();

initVisible('.welcome-wrapper');
Visible(document.querySelector('.welcome-wrapper'));

// Прикрепляем его к «наблюдателю»
// observer.observe(document.querySelector('.pages'))