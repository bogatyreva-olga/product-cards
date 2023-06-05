document.addEventListener("DOMContentLoaded", () => {
    let modal = getModalElement();
    let span = modal.querySelector("#modal-close");
    span.addEventListener("click", () => {
        let modal = getModalElement();
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        let modal = getModalElement();
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    modal.querySelector('.form__minus-btn').addEventListener('click', (e) => {
        e.preventDefault();
        let inputElement = getModalElement().querySelector('.form__quantity-input');
        let value = parseInt(inputElement.value);
        if (value > 1) {
            inputElement.value = --value;
        }
    });
    modal.querySelector('.form__plus-btn').addEventListener('click', (e) => {
        e.preventDefault();
        let inputElement = getModalElement().querySelector('.form__quantity-input');
        let value = parseInt(inputElement.value);
        if (value >= 1 && value < 10) {
            inputElement.value = ++value;
        }
    });
});

let showModal = (item) => {
    let modal = getModalElement();

    modal.querySelector('.form__product-id').value = item.id;
    modal.querySelector('.form__product-title').innerText = item.title;
    modal.querySelector('.form__quantity-input').value = 1;

    let productColors = modal.querySelector('.form__product-colors');
    productColors.innerHTML = "";
    item.colors.forEach((color) => {
        let div = document.createElement("div");
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.value = color.slug;
        radio.name = "color";
        radio.id = "color_" + color.slug + "_" + item.id;
        radio.classList.add("color-radio");
        radio.classList.add(color.slug);

        let label = document.createElement("label");
        label.setAttribute("for", radio.id);
        label.innerText = color.name;

        div.appendChild(radio);
        div.appendChild(label);
        productColors.appendChild(div);
    });

    modal.querySelector('#product-submit').addEventListener('click', (e) => {
        e.preventDefault();
        alert("Товар \"" + item.title + "\" успешно приобретен");
    });
    modal.style.display = "block";
};

let getModalElement = () => {
    return document.querySelector("#modal-product");
};

export {showModal};
