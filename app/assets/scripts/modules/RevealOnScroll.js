import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
	constructor(){
		this.itemsToReveal = $(".feature-item");
		this.hideInitiall();
		this.createWayPoints();
	}

	hideInitiall(){
		this.itemsToReveal.addClass("reveal-item");
	}

	createWayPoints(){
		this.itemsToReveal.each(function(){
			//alert("testing");
			var currentItem = this;
			new Waypoint({
				elements: currentItem,
				handler : function(){
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset:"85%"
			});
		});
	}
}
//use npm install waypoints --save

export default RevealOnScroll;