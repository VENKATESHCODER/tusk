console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

//const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    //setTimeout(() => {
        //resolve('ticket');
    //}, 3000);
//});

//const getPopcorn = promiseWifeBringingTicks.then((t) => {
    //console.log('wife: i have the ticks');
    //console.log('husband: we should go in');
    //console.log('wife: no i am hungry');
    //return new Promise((resolve, reject) => resolve(`${t} popcorn`));
//});

//const addButter = getPopcorn.then((t) => {
    //console.log('husband: i got some popcorn');
    //console.log('husband: we should go in');
    //console.log('wife: i need butter on my popcorn');
    //return new Promise((resolve, reject) => resolve(`${t} butter`))
//})

//getButter.then((t) => console.log(t));

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'),3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    
    return new Promise((resolve, reject) => resolve(`popcorn`));
});

const addButter = getPopcorn.then((t) => {
    
    return new Promise((resolve, reject) => resolve(`butter`));
})

const getColdDrinks = addButter.then((t) => {
    return new Promise((resolve,reject) => resolve(`colddrinks`));
})

const createPost = getColdDrinks.then((t) => {
    return new Promise((resolve, reject) => resolve(`createpost`));
})

const deletePost = createPost.then((t) => {
    return new Promise((resolve,reject) => resolve(`deletepost`));
})

let ticket = await promiseWifeBringingTicks;
console.log(`wife: i have the ${ticket}`);
console.log('husband: we should go in');
console.log('wife: no i am hungry');

let popcorn = await getPopcorn;
console.log(`husband: i got some ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: i need butter on my popcorn');

let butter = await addButter;
console.log(`husband: i got some ${butter} on my popcorn`);
console.log(`husband: anything else darling`);
console.log(`wife: lets got we are getting late`);
console.log(`husband: thank you for the reminder *grins*`);

let colddrinks = await getColdDrinks;
console.log(`wife: i need some ${colddrinks} before enter my theatre`);
console.log(`husband: hmm.ok i will get it back your drinks`);
console.log(`husband: honey!. I got your ${colddrinks} shall we move for a movie?`);

try {
  let createpost = await createPost;
}catch(e){
    let deletepost = await deletePost;
}


return ticket;
}

preMovie().then((m) => console.log(`Person3: shows ${m}`));

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');
