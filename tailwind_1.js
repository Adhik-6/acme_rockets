const appInit = () => {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const menu =  document.getElementById('mobileMenu');
    const menuAnchor = document.querySelectorAll('#mobileMenu li a');

    menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        menuBtn.classList.toggle('toggle-btn');

    })
    menuAnchor.forEach((a) => {
        a.addEventListener('click', ()=> {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        })
    })
}

document.addEventListener('DOMContentLoaded',appInit);