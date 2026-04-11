const barsIcon = document.querySelector('.fa-bars');
const xmarkIcon = document.querySelector('.fa-xmark');
const navMenu = document.querySelector('.top-bar > nav');

barsIcon.addEventListener('click', () => {
    
        console.log('Bars icon clicked');
        navMenu.classList.add('active');
        navMenu.style.display = 'flex';
        barsIcon.style.display = 'none';
        xmarkIcon.style.display = 'block';
    });

xmarkIcon.addEventListener('click', () => {
    
        console.log('Xmark icon clicked');
        navMenu.classList.remove('active');
        navMenu.style.display = 'none';
        xmarkIcon.style.display = 'none';
        barsIcon.style.display = 'block';
    });