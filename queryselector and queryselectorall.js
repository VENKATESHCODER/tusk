

//QUERYSELECTOR
var header=document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color='red';

var lastitem = document.querySelector('.list-group-item:last child');
lastitem.style.color='blue';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color='invisble';

//QUERYSELECTORALL
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundcolor = '#f4f4f4';
    even[i].style.backgroundcolor = '#ccc';
}
