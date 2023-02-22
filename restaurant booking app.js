function saveToLocalStorage(event) {
    event.preventDefault();
    const price = event.target.amount.value;
    const dish = event.target.dish.value;
    const table = event.target.Tablelist.value;
    //localStorage.setItem('name', name);
    //localStorage.setItem('email', email);
    //localStorage.setItem('phonenumber', phonenumber)
    const obj = {
      price,
      dish,
      table
    }
  
    axios.post("https://crudcrud.com/api/20fd9108c849411589cd7e9925a0fcde/ORDERS", obj)
  
    //localStorage.setItem(obj.email, JSON.stringify(obj));
    showListofRegisteredUser(obj);
  }
  
  window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
      const user = JSON.parse(localStorage.getItem(key));
      showListofRegisteredUser(user)
    })
  })
  
  function showListofRegisteredUser(user) {
    const parentNode = document.getElementById('listOfitems');
    const createNewUserHtml = `<li id='${user.table}'>${user.price}-${user.dish}-${user.table}
                                <button onclick=deleteUser('${user.email}')>Delete</button>
                               </li>
                               `
  
    console.log(createNewUserHtml)
    parentNode.innerHTML += createNewUserHtml;
    console.log(parentNode.innerHTML)
  }
  
  function deleteUser(table) {
    localStorage.removeItem(table)
    removeItemFromScreen(table)
  }
  
  function removeItemFromScreen(table) {
    const parentNode = document.getElementById('listOfitems');
    const elem = document.getElementById(table)
    parentNode.removeChild(elem);
  }
