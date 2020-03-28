const	carrousel 	= document.querySelector('.carrousel-items'),
		images		= document.querySelectorAll('.item'),
		btnPrev 	= document.querySelector('#prev'),
		btnNext 	= document.querySelector('#next');

let counter = 1;
images[counter + 1].style.transform = "scale(1.5)";
carrousel.style.transform = "translateX(" + -(images[0].clientWidth * counter) + "px)";

btnPrev.addEventListener('click', function () {
	carrousel.style.transition = "transform .5s ease-in-out";
	counter--;
	images[counter + 1].style.transition = "transform .5s ease-in-out";
	carrousel.style.transform = "translateX(" + -(images[0].clientWidth * counter) + "px)";
	images[counter+2].style.transform = "scale(1)";
	images[counter+1].style.transform = "scale(1.5)";
});

btnNext.addEventListener('click', function () {
	carrousel.style.transition = "transform .5s ease-in-out";
	counter++;
	images[counter + 1].style.transition = "transform .5s ease-in-out";
	carrousel.style.transform = "translateX(" + -(images[0].clientWidth * counter) + "px)";
	images[counter].style.transform = "scale(1)";
	images[counter + 1].style.transform = "scale(1.5)";
});

carrousel.addEventListener('transitionend', function() {
	if (images[counter].id === "first-one") {
		carrousel.style.transition = "none";
		images[images.length - counter - 1].style.transition = "none";
		counter = images.length - counter - 2;
		images[counter + 1].style.transform = "scale(1.5)";
		carrousel.style.transform = "translateX(" + -(images[0].clientWidth * counter) + "px)";
	}
	if (images[counter].id === "last-one") {
		carrousel.style.transition = "none";
		images[images.length - 3].style.transition = "none";
		counter = images.length - 4;
		images[counter + 1].style.transform = "scale(1.5)";
		carrousel.style.transform = "translateX(" + -(images[0].clientWidth * counter) + "px)";
	}
});


let menuBtn = document.querySelector('.mobile-menu-btn'),
    closeBtn = document.querySelector('.close-menu-btn'),
    menuList = document.querySelector('.mobile-menu-list');

menuBtn.addEventListener('click', function() {
    menuList.style.width = "100%";
    document.body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', function() {
    menuList.style.width = "0";
    document.body.style.overflow = "visible";
})