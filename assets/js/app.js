let btn = document.getElementById('bar'),
    links = document.getElementById('links'),
    li = document.querySelectorAll('#li');

btn.addEventListener('click',()=>{
    links.classList.toggle('toggle');
    btn.classList.toggle('bars');
})
