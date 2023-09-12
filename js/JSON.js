// first JSON placeholder to 1-7 challenge 
// 1. console log show comments
const showComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => showCommentsWebsite(data))
}



// 2. show website with html

const showCommentsWebsite = comments =>{
    console.log(comments);

    for(const comment of comments){
        console.log(comment);
        const getComments = document.getElementById('show-comments');
        const h4 = document.createElement('h4');
        h4.innerText = `Name: ${comment.name}`;
        const p = document.createElement('p');

        p.innerText = `Email: ${comment.email}`;
        getComments.appendChild(h4);
        getComments.appendChild(p);
    }
}



// 3. add button to show comments
// 4. use arrow function
// 5. dynamic data load
// 6. show details dynamic

// {7. (randomuser.me)user }

// second sport db to 1 challenge
// challenge {
// 1. sports db( first section )
// 2. add spinner
// 3. free api for myself
// }