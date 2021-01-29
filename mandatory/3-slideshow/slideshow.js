// Write your code here

const images = [
  {
    name: "image-1",
    src: "https://images.unsplash.com/photo-1611185772530-2ab31d6ba876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",

  },

  {
    name: "image-2",
    src: "https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  },
  {
    name: "image-3",
    src: "https://images.unsplash.com/photo-1599108656750-54572dae5c9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  },
  {
    name: "image-4",
    src: "https://images.unsplash.com/photo-1583160593462-6cbf88f6b165?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  },
  {
    name: "image-5",
    src: "https://images.unsplash.com/photo-1602131029384-a2ebef3ea73b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

// console.log(images[0].src);
let counter = 0;
let btnForward = document.getElementById("forwardBtn");
let btnBackward = document.getElementById("backwardBtn");
let btnAuto = document.getElementById("backwardBtn");

function slideShow(){
 let imageId = document.getElementById("carouselImage");
 imageId.setAttribute("src", images[counter].src)
}

btnForward.addEventListener("click", () =>{
  counter++;
  slideShow();
//  loops over the images
console.log(counter);
 if(counter === images.length - 1){
   counter = 0;
 }
})

btnBackward.addEventListener("click", () =>{
  counter--;
  slideShow();
//  loops over the images
console.log(counter);
 if(counter === 0){
   counter = 3;
 }
 return counter;
})

btnAuto.addEventListener("click", () =>{
  counter = 0;
  setInterval(slideShow, 2000);
})



window.onload = slideShow;
// slideShow();{}