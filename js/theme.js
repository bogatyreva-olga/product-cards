document.addEventListener("DOMContentLoaded", () => {
    let theme = new Theme();
    theme.addEventListener();

});

class Theme {
    static DARK_NAME = "dark-theme";
    static LIGHT_NAME = "light-theme";
    #currentTheme = Theme.DARK_NAME;
    #btn = null;

    constructor() {
        this.#btn = document.querySelector(".header__theme");
        this.#setCurrentTheme();
    }

    #getCurrentTheme() {
        this.#currentTheme = localStorage.getItem("current-theme");

        if (this.#currentTheme === null) {
            this.#currentTheme = Theme.DARK_NAME;
        }
        return this.#currentTheme;
    }

    #setCurrentTheme() {
        let currentTheme = this.#getCurrentTheme();

        document.body.classList.remove(Theme.DARK_NAME);
        document.body.classList.remove(Theme.LIGHT_NAME);
        document.body.classList.add(currentTheme);
    }

    addEventListener() {
        this.#btn.addEventListener("click", () => {
            let currentTheme = this.#getCurrentTheme();
            document.body.classList.remove(currentTheme);

            if (currentTheme === Theme.DARK_NAME) {
                currentTheme = Theme.LIGHT_NAME;
            } else {
                currentTheme = Theme.DARK_NAME;
            }
            document.body.classList.add(currentTheme);

            localStorage.setItem("current-theme", currentTheme);
        })
    }
}

