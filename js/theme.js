export let toggleTheme = () => {
    const btn = document.querySelector(".header__theme");

    btn.addEventListener("click", function() {
        document.body.classList.toggle('dark-theme');
    });
}


