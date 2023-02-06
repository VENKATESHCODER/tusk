const posts = [
    { title: 'Post One', body: 'This is Post One' },
    { title: 'Post Two', body: 'This is Post Two' }
];

function createPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function updateLastUserActivity(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('ERROR: Something went wrong');
            }
        }, 1000);
    })
}

//updateLastUserActivity({ title: 'Post Three', body: 'This is Post Three'})
//.then(createPost)
//.catch(err => console.log(err));
//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
});

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
