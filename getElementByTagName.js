
















var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundcolor='yellow';


for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundcolor ='#f4f4f4';
}

//GetElementByTagName
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundcolor='yellow';


for(var i = 0; i < li.length; i++) {
    li[i].style.backgroundcolor ='#f4f4f4';
}
