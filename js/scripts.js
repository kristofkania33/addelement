// scripts.js
var list = document.getElementById('list'),
	add = document.getElementById('addElem'),
	number = document.getElementsByTagName('li');

add.addEventListener('click', function() {
var element = document.createElement('li');
for(i=0;i<=number.length;i++) {
    element.innerHTML = 'item ' + i;
}
list.appendChild(element);
} )
