var arr=[
    {
        username:'salmon',
        age:23,
        married:false,
        istatus:'stranger',
        image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        username:'sumit',
        age:45,
        married:true,
        istatus:'stranger',
        image:"https://images.unsplash.com/photo-1524666041070-9d87656c25bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        username:'rohan',
        age:50,
        married:true,
        istatus:'stranger',
        image:"https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGV8ZW58MHx8MHx8fDA%3D"
    }
];

var main=document.querySelector(".main")
function herofunc()
{
    var sum=''
arr.forEach(function(elem,idx)
{
    sum=sum+`<div class="card">
            <img src="${elem.image}"/>
            <h2>${elem.username} ,${elem.age}</h2>
            <h4>Married:${elem.married}</h4>
            <h3>${elem.istatus}</h3>
            <button id=${idx}>Add Friend</button>
        </div>`;
})

main.innerHTML=sum;

}
herofunc();
main.addEventListener('click',function(detail){
    var goldvalue=arr[detail.target.id];

    if(goldvalue.istatus=='stranger')
    {
        goldvalue.istatus='Freinds';
    }
    else{
        goldvalue.istatus='stranger';

    }
    herofunc();
  


})
