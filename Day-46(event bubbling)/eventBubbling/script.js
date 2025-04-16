var arr=[
    {
        username:'salmon',
        age:23,
        married:false,
        istatus:'stranger',
        image:"https://images.unsplash.com/photo-1727798448236-f99a244215e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2UlMjBtYWxlJTIwc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        username:'sumit',
        age:45,
        married:true,
        istatus:'stranger',
        image:"https://images.unsplash.com/photo-1723201223411-7a53a744055c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2UlMjBtYWxlJTIwc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        username:'rohan',
        age:50,
        married:true,
        istatus:'stranger',
        image:"https://images.unsplash.com/photo-1654417202064-b0484e3cc815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGltYWdlJTIwbWFsZSUyMHN8ZW58MHx8MHx8fDA%3D"
    }
];

var main=document.querySelector(".main")
var sum=''
arr.forEach(function(elem)
{
    sum=sum+`<div class="card">
            <img src="${elem.image}"/>
            <h2>${elem.username} ,${elem.age}</h2>
            <h4>Married:${elem.married}</h4>
            <h3>${elem.istatus}</h3>
            <button>Add Friend</button>
        </div>`;
})

main.innerHTML=sum;
