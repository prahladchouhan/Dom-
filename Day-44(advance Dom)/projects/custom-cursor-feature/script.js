var area=document.querySelector(".cursor-area");
var cursor=document.querySelector(".custom-cursor");

area.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
  });
  
  area.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });

area.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });