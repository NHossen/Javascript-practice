//user-images 

//url// https://jsonplaceholder.typicode.com/photos




function imagesFile(){

 const imagesUrl='https://jsonplaceholder.typicode.com/photos';

fetch(imagesUrl)
      .then(res => res.json())
      .then(images => getImages(images));
   
}


function getImages(images){
    //console.log(images);
const list=document.getElementById('users-list-name')
    for(const image of images){
        //console.log(image.url);
        const li=document.createElement('li');
        li.innerHTML=image.url;
        list.appendChild(li);
    }

}

// console.log(images);
//     for(const image of images ){
        
//     }