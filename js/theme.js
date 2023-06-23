const DARK_THEME_NAME = "dark-theme";
const LIGHT_THEME_NAME = "light-theme";

document.addEventListener("DOMContentLoaded", () => {

    let theme = getCurrentTheme();
    setTheme(theme);
});

let setTheme = (currentTheme) => {
    document.body.classList.remove(DARK_THEME_NAME);
    document.body.classList.remove(LIGHT_THEME_NAME);
    document.body.classList.add(currentTheme);
}

class ToggleTheme {
    #btn = null
    constructor() {
        this.#btn = document.querySelector(".header__theme")
    }
    addEventListener() {
        this.#btn.addEventListener("click", () => {
            let currentTheme = getCurrentTheme();

            document.body.classList.remove(currentTheme);

            if (currentTheme === DARK_THEME_NAME) {
                currentTheme = LIGHT_THEME_NAME;
            } else {
                currentTheme = DARK_THEME_NAME;
            }
            document.body.classList.add(currentTheme);

            localStorage.setItem("current-theme", currentTheme);
        })
    }
}

class Theme {
    #currentTheme = null
    constructor() {
        this.#currentTheme = localStorage.getItem("current-theme");
    }
    getCurrentTheme() {
        if (this.#currentTheme === null) {
            return DARK_THEME_NAME;
        }
        return this.#currentTheme
    }
}

let getCurrentTheme = () => {
    let currentTheme = localStorage.getItem("current-theme");
    if (currentTheme === null) {
        return DARK_THEME_NAME;
    }
    return currentTheme
}

export {ToggleTheme}
