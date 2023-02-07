
console.log('a')
console.log('b')
new Promise ((resolve, reject) => {
  setTimeout (() => console.log('c'), 1000)
}).then(data => {
  console.log(data);
  new Promise ((resolve, reject) => {
    setTimeout (() => console.log('d'), 1000)
  }).then(data => {
    console.log(data);
    console.log('e'); 
  })
})

const data = await axios.post();

function random () {
    return new Promise();
}
random.then()
