import {getItemsByCategory} from "./data.js";
import {toggleTheme} from "./theme.js";
import {showModal} from "./form.js";

const CATEGORY_NAME_SHOES = "shoes";
const CATEGORY_NAME_CLOTHES = "clothes";
const CATEGORY_NAME_ACCESSORIES = "accessories";
const CATEGORY_NAME_EQUIPMENT = "equipment";

document.addEventListener("DOMContentLoaded", function () {
    toggleTheme();
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

        cardElement.querySelector(".card__images div").appendChild(img);
        cardElement.querySelector(".price span").innerText = item.price;
        cardElement.querySelector(".card__text").textContent = item.title;
        cardElement.querySelector(".card__basket").addEventListener("click", () => {
            showModal(item);
        })

        return cardElement;
    }

    let categories = [CATEGORY_NAME_CLOTHES, CATEGORY_NAME_SHOES, CATEGORY_NAME_ACCESSORIES, CATEGORY_NAME_EQUIPMENT];

    categories.forEach((name) => {
        let section = document.querySelector('.catalog__' + name);
        getItemsByCategory(name).forEach((item) => {
            section.appendChild(createCardElement(item));
        })
    })
})
