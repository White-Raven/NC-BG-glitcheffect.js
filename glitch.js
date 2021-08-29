// Where canva is the full area where you want the glitches to appear, and element is your 
// image/background that won't cause the page/container it's in the redimension itself to the content
let canva = document.getElementById('element');
let count = 20;
for (let i =0; i < count; i++){
	let glitchbox = document.createElement('div')
		glitchbox.className = 'gbox';
		canva.appendChild(glitchbox);
}
setInterval(function(){
let glitch =  document.getElementsByClassName('gbox');
for (let i = 0; i < glitch.length; i++){
	glitch[i].style.left = Math.floor(Math.random()*100) + 'vw';
	glitch[i].style.top = Math.floor(Math.random()*100) + 'vh';
	glitch[i].style.width = Math.floor(Math.random()*400) + 'px';
	glitch[i].style.height = Math.floor(Math.random()*100) + 'px';
	glitch[i].style.backgroundPosition = Math.floor(Math.random()*50) + 'px';
}
}, 200)
