//console.log('my First dynamic website');

//data load by fetch

const postUrl="https://jsonplaceholder.typicode.com/posts"

function loadPost(){
    //console.log('loading posts data');
fetch(postUrl)
.then(res => res.json())
.then(post=>duspalyUser(post));

}
function duspalyUser(post){
    const postcontainer=document.getElementById('post-container');//Posting continer always outside of for container//also remember appendchild inside div container
    //console.log(post);
    for(const posts of post){
        //console.log(posts.title);

        const div=document.createElement('div');

        div.innerHTML=`

        <h4>User: ${posts.id}</h4>
        <h5>Post title: ${posts.title}</h5>
        <p>Post description ${posts.body}</p>
        
        `;
        postcontainer.appendChild(div);
      
    }

}
loadPost();

   