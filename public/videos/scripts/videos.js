window.setTimeout(function () {
	let ele = document.getElementsByClassName('referral')
	ele[0].remove()
	ele = document.getElementsByClassName('juicer-ad')
	Array.from(ele).forEach(function (item) {
		item.remove()
	})
	ele = document.getElementsByClassName('feed-item')
	Array.from(ele).forEach(function (item) {
		item.style['border-radius'] = '5px'
	})
	ele = document.getElementsByClassName('j-poster-meta')
	Array.from(ele).forEach(function (item) {
		item.remove()
	})
	ele = document.getElementsByClassName('image-post')
	Array.from(ele).forEach(function (item) {
		item.remove()
	})
}, 3000)
