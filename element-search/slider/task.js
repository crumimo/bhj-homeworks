let images = document.getElementsByClassName("slider__item"); 

let navigatorNextAll = document.getElementsByClassName("slider__arrow slider__arrow_next");

let navigatorNext = navigatorNextAll.item(0);

navigatorNext.onclick = function() {
	for (let i = 0; i < images.length - 1; i++) {
	    let image = images.item(i);
		let image2 = images.item(i + 1);
		
	    if (image.className.includes('item_active') === true) {
		    image.className = "slider__item";
			image2.className = "slider__item slider__item_active";
			break;
	    } 
	
	    if (i === images.length - 2) {
			image = images.item(0);
		    image.className = "slider__item slider__item_active";
			image2 = images.item(i + 1);
		    image2.className = "slider__item";
		}
	}
}