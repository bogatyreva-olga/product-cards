import {catalog, getItemsByCategory} from "./data.js";

const CATEGORY_NAME_SHOES = "shoes";
const CATEGORY_NAME_CLOTHES = "clothes";
const CATEGORY_NAME_ACCESSORIES = "accessories";
const CATEGORY_NAME_EQUIPMENT = "equipment";

document.addEventListener("DOMContentLoaded", function () {

    const buttonScrollUp = {
        el: document.querySelector('.button-scroll-up'),
        show() {
            this.el.classList.remove('button-scroll-up__hide');
        },
        hide() {
            this.el.classList.add('button-scroll-up__hide');
        },
        addEventListener() {
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                scrollY > 400 ? this.show() : this.hide();
            });
            document.querySelector('.button-scroll-up').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    buttonScrollUp.addEventListener();

    const createCardElement = (item) => {
        const cardTemplateElement = document.querySelector("#card").content;
        const cardElement = cardTemplateElement.cloneNode(true);

        cardElement.querySelector(".card__images div").innerHTML = "";

        let img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        cardElement.querySelector(".card__images div").appendChild(img)

        cardElement.querySelector(".price span").innerText = item.price;

        cardElement.querySelector(".card__text").textContent = item.title;

        return cardElement;
    }

    let catalogElemClothes = document.querySelector('.catalog__clothes');
    let catalogCategoryClothes = catalog.filter(item => item.category === "clothes");
    catalogCategoryClothes.forEach((item) => {
        catalogElemClothes.appendChild(createCardElement(item));
    })

    let section = document.querySelector('.catalog__' + CATEGORY_NAME_SHOES);
    getItemsByCategory(CATEGORY_NAME_SHOES).forEach((item) => {
        section.appendChild(createCardElement(item));
    })
})
