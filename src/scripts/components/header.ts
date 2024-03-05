export class Header {
	private readonly closeButton: Element | null;
	private readonly menuSlider: Element | null;
	private readonly menuButton: Element | null;

	constructor() {
		this.closeButton = document.querySelector('.header-menu__button-close');
		this.menuSlider = document.querySelector('.header-menu__slider');
		this.menuButton = document.querySelector('.header__menu-icon');

		if (this.menuButton) {
			this.menuButton.addEventListener('click', () => {
				this.toggleMenu();
			});
		}

		if (this.closeButton) {
			this.closeButton.addEventListener('click', () => {
				this.toggleMenu();
			});
		}
	}

	toggleMenu() {
		if (this.menuSlider) {
			this.menuSlider.classList.toggle('header-menu__slider--active');
		}
	}
}
