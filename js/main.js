let getButtonClose = () => {
    let closeBtn = document.querySelector(".header__search-close");
    let searchElementsActive = document.querySelector('.header__toolbar-search-wrap-active');
    let disableSearchBtn = document.querySelector('.header__search-toggle-disable');
    closeBtn.addEventListener('click', () => {
        searchElementsActive.style.display = "none";
        disableSearchBtn.style.display = "block";
    })
}

let openSearchElements = () => {
    let disableSearchBtn = document.querySelector('.header__search-toggle-disable');
    let searchElementsActive = document.querySelector('.header__toolbar-search-wrap-active');
    disableSearchBtn.addEventListener('click', () => {
        searchElementsActive.style.display = "block";
        disableSearchBtn.style.display = "none";
    })
}

document.addEventListener("DOMContentLoaded", function () {
    getButtonClose();
    openSearchElements();
})
