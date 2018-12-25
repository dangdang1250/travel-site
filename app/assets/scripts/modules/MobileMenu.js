import $ from 'jquery';

class MobileMenu{
	constructor(){
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();//must add
	}
	//watch for events
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		console.log(this);
	}

	toggleTheMenu(){
		//console.log("This icon was clicked!!!");
		//console.log("here"+this); this is not working here now
		//alert(this); //hello
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass('site-header--is-expanded');

	}
}

export default MobileMenu;