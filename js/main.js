let anchorSelector = 'a[href^="#"]';

let anchorList =
	document.querySelectorAll(anchorSelector);

anchorList.forEach(link => {
	link.onclick = function (e) {
		e.preventDefault();

		let destination =
		document.querySelector(this.hash);

		destination.scrollIntoView({
			behavior: 'smooth'
		});
	}
});

//############

//document.addEventListener('contextmenu', event => event.preventDefault());

//############

document.onkeydown = function(e) {
        if (e.ctrlKey && e.keyCode === 85){
            alert('not allowed');
            return false;
        } else {
            return true;
        }
};