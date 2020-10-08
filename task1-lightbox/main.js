const initClickableImages = () => {
	const imagesElements = document.querySelectorAll('.gallery .image');
	imagesElements.forEach((imageElement) => {
		imageElement.addEventListener('click', handleGalleryImageClick);
	});
};

const initCloseLightBoxButton = () => {
	const closeButtonElement = document.getElementById('light-box-close');
	closeButtonElement.addEventListener('click', toggleLightBox);
};

const initBgLightBox = () => {
	const bgElement = document.getElementById('light-box-bg');
	bgElement.addEventListener('click', toggleLightBox);
};

const handleGalleryImageClick = (event) => {
	const bgImageUrl = event.target.style.backgroundImage;
	const lightBoxImage = document.getElementById('light-box-image');
	lightBoxImage.style.backgroundImage = bgImageUrl;
	toggleLightBox();
};

const toggleLightBox = () => {
	const lightBoxElement = document.getElementById('light-box');
	lightBoxElement.classList.toggle('show');
};

initClickableImages();
initCloseLightBoxButton();
initBgLightBox();
