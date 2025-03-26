var btn =document.querySelector('button');

var h3 =document.querySelector('h3');
var check=0;
btn.addEventListener('click' ,function()
{
    if(check==0)
    {
    h3.innerHTML="Friend";
    btn.innerHTML="Remove Friend"
    h3.style.color="green";
    h2.style.color="yellow";
    h2.style.fontFamily="system-ui"
    check=1;
    }
    else{
        h3.innerHTML="Stranger";
        btn.innerHTML="Add Friend"
        h3.style.color="red";
        h2.style.color="white";
        h2.style.fontFamily="Georgia"
        check=0;
    }
})

var h2=document.querySelector('h2');

