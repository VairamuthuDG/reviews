
const menus = [{title : 'Web Designer', img:'image0.jpeg'},{title : 'Data Scientist', img:'image1.jpeg'},
{title : 'Digital Marketing', img:'image2.jpeg'},{title : 'Business Analytics', img:'image3.jpeg'},
{title : 'Cloud Competing', img:'image4.jpeg'},{title : 'Artifical Intellignece', img:'image5.jpeg'}]



const imageEl  = document.getElementById('img');
const titleEl  = document.querySelector('.title');
const prevEl  = document.querySelector('.prev');
const nextEl = document.querySelector('.next');

window.addEventListener('DOMContentLoaded',function(){
showReviews(menus);
})

let current = 0;

function showReviews(item){
titleEl.textContent = item[current].title;
imageEl.src = item[current].img;
}

nextEl.addEventListener('click',function(){
    current++;
    console.log(current) 
    if(current > menus.length -1){
        current = 0;
    }
    showReviews(menus);
});

prevEl.addEventListener('click',function(){
    current--;
    console.log(current)
    if(current < 0){
        current = menus.length-1;
    }
    showReviews(menus);
});