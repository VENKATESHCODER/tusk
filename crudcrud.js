function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailid.value;
  const phonenumber = event.target.phonenumber.value;
  //localStorage.setItem('name', name);
  //localStorage.setItem('email', email);
  //localStorage.setItem('phonenumber', phonenumber)
  const obj = {
    name,
    email,
    phonenumber
  }

  axios.post("https://crudcrud.com/api/525b85d508f644b0a45a7d3ab72c65b4/selleradmin", obj)

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
  const createNewUserHtml = `<li id='${user.email}'>${user.name}-${user.email}-${user.phonenumber}
                              <button onclick=deleteUser('${user.email}')>Delete</button>
                             </li>
                             `

  console.log(createNewUserHtml)
  parentNode.innerHTML += createNewUserHtml;
  console.log(parentNode.innerHTML)
}

function deleteUser(email) {
  localStorage.removeItem(email)
  removeItemFromScreen(email)
}

function removeItemFromScreen(email) {
  const parentNode = document.getElementById('listOfitems');
  const elem = document.getElementById(email)
  parentNode.removeChild(elem);
}
