const anchors = document.querySelectorAll('a[href*="#"]')
console.log(anchors)

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').slice(1)
		console.log(blockID)

		document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
		})
	})
}
