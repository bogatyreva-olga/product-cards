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

export {buttonScrollUp}
