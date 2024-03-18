// popup
const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('#popup');
const btnOpenNode = document.querySelector('#services__btn');
const popupContentNode = document.querySelector('#popup__content')
const btnCloseNode = document.querySelector('#popup__close-btn');

btnOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}


// burger menu

const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';

const burgerNode = document.querySelector('#burger');
const burgerBtnNode = document.querySelector('#burger-btn');
const burgerContentNode = document.querySelector('#burger__content')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}

// Phone mask

mask('[data-tel-input]')

// Удаляет '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]')
phoneInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value == '+') {
      input.value = ''
    }
  })
  
  input.addEventListener('blur', () => {
    if (input.value == '+') {
      input.value = ''
    }
  })
})