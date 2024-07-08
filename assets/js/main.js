const menu = document.getElementById('menu');
const header = document.querySelector('header');
const back_to_top = document.getElementById('back_to_top');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('toggle');
});

window.onscroll = () => {
    //if scrollbar >= 400 
    if(scrollY >= 600){
        back_to_top.style.display = 'block';
    }else{
        back_to_top.style.display = 'none';
    }

    menu.classList.remove('fa-times');
    header.classList.remove('toggle');
}

back_to_top.onclick = () =>{
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    });
}