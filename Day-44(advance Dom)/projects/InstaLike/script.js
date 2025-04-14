var img= document.querySelector("img");

img.addEventListener('dblclick',function(){
    var like= document.createElement('img')
    
    
    var int =setInterval(function() {
      
    
    like.setAttribute('src',"./like.png")
    like.style.height='100px';
    like.style.width='100px';
    like.style.position='absolute';
    like.style.zIndex='1';
    like.style.transition='transform 1s ease, opacity 0.4s ease';
    
    }, 100);

    setTimeout(() => {
        clearInterval(int);
        like.remove();
    }, 500);
     document.body.appendChild(like);
})