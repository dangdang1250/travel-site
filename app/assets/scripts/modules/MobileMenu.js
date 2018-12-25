import $ from 'jquery';

class MobileMenu{
	constructor(){
		$('.site-header__menu-icon').click(function(){
			console.log("The top right icon was clicked");
		});
		//alert("Testing from MobileMenu");
	}
}

export default MobileMenu;