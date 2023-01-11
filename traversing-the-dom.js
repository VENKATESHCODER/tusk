

//TRAVERSING THE DOM
var itemList = document.querySelector('#items');
PARENTNODE
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundcolor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);


//PARENTELEMENT
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundcolor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//CHILDNODE
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].backgroundcolor='yellow';

//FIRSTCHILD
console.log(itemList.firstChild);
//FIRSTELEMENT
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello World';

//LASTCHILD
console.log(itemList.lastChild);
//LASTELEMENT
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello World';

//nextsibling
console.log(itemList.nextSibling);
//nextElementsibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);
//previousElementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';
//add id
newDiv.id ='Hello1';
//add atr
newDiv.setAttribute('title','hello div');
//create new node
var newDivText = do.createTextNode('Hello world');
// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');



console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv , h1);
