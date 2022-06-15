import { scale } from '../utils';

const ScrollContainer = (onUpdate) => {
	let scrollOffset = 0;
	let scrollPosition = 0;
	let pages = 5;
	let scrollContainerElement = document.getElementById('scroll-container');

	const setScrollContainerHeight = (pageCount) => {
		if (!scrollContainerElement) {
			console.log('scroll container undefined');
			return
		}

		scrollContainerElement.style.height =  `${pageCount}00vh`;
	}

	const updateScrollPosition = (e) => {
		// console.log(e);

		let position = scale(window.scrollY, 0, window.innerHeight * (pages - 1), 0, 0.99);
		scrollPosition = position;

		// onUpdate();
		// camera.position.y = -position;
		// camera.position.z = position;
		// console.log('position : ', position);
		// console.log('window.scrollY : ', window.scrollY);
	}

	const getScrollPosition = () => scrollPosition; 

	const attachEventListener = () => {
		window.addEventListener('scroll', updateScrollPosition)
	}

	const init = () => {
		setScrollContainerHeight(pages);
		attachEventListener();
	}

	init();

	return {
		scrollOffset,
		scrollPosition,
		getScrollPosition
	}
}

export default ScrollContainer;