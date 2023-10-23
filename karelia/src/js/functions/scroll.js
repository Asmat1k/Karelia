export function Visible(target) {
  // Если на этой странице не нужна кнопка наверх
  if(window.location.toString().indexOf('map.html') > 0) return; 
  const block = document.querySelector('.button-wrapper');
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    block.classList.remove('active')
  } else {
    // Если элемент не видно, то запускаем этот код
    block.classList.add('active')
  };
};

// Запускаем функцию при прокрутке страницы
export function initVisible(className) {
  window.addEventListener('scroll', function() {
    Visible (document.querySelector(className));
  });
}
