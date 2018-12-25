import $ from 'jquery';

class Modal {
	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		// pushed any key to escape
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	keyPressHandler(e){
		if(e.keyCode == 27){
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false; //header is link element provent default
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;