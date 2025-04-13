var btn=document.querySelector("button");
 


btn.addEventListener('click',function(){
   var x=Math.random()*90;
   var y=Math.random()*90;
   var rot=Math.random()*90;


   var image=document.createElement('img');

    image.setAttribute('src',"./bheem.png")
    image.style.height='150px';
    image.style.position='absolute';
    image.style.left= x+'%';
    image.style.top= y+'%';
    image.style.rotate= rot+'deg';


    document.body.appendChild(image)
        

})