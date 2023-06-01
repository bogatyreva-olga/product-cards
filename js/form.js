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
});

let showModal = (item) => {
    let modal = getModalElement();
    modal.querySelector('.form__product-id').value = item.id;
    modal.querySelector('.form__product-title').innerText = item.title;
    let productColors = modal.querySelector('.form__product-colors');
    productColors.innerHTML = "";
    item.colors.forEach((color) => {
        let div = document.createElement("div");
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.value = color.slug;
        radio.name = "color";
        radio.id = "color_" + color.slug + "_" + item.id;

        let label = document.createElement("label");
        label.for = radio.id;
        label.innerText = color.name;
        label.classList.add(color.slug);

        div.appendChild(radio);
        div.appendChild(label);
        productColors.appendChild(div);
    });


    modal.querySelector('#product-submit').addEventListener('click', (e) => {
        e.preventDefault();

        alert("Товар \""  + item.title + "\" успешно приобретен");
    });
    modal.style.display = "block";
};

let getModalElement = () => {
    return document.querySelector("#modal-product");
};

export {showModal};
