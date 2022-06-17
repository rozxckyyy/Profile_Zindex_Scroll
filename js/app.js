let zSpacing = -1000,
	lastPos = zSpacing / 5,
	$items = document.getElementsByClassName('item'),
	items = Array.from($items),
	zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
		delta = lastPos - top
	lastPos = top

	items.forEach(function(n, i){
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -2
		let item = items[i],
			transform = `translateZ(${zVals[i]}px)`
			opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		item.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})	
}
window.scrollTo(1,3)