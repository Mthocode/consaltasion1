const openmodel1 = document.getElementById('learn1');
const openmodel2 = document.getElementById('learn2');

const bandrmodel1 = document.getElementById('Businessandrit');
const bandimodel2 = document.getElementById('communityandind');

const closemodal_bus = document.getElementById('close_bus');
const closemodal_com = document.getElementById('close_com');

openmodel1.addEventListener('click', () => {
        bandrmodel1.showModal();
        bandrmodel1.style.display = "grid";
});

openmodel2.addEventListener('click', () => {
    bandimodel2.showModal();
    bandimodel2.style.display = "grid";
});

closemodal_bus.addEventListener('click', () => {
    bandrmodel1.close();
    bandrmodel1.style.display = "none";
});

closemodal_com.addEventListener('click', () => {
    bandimodel2.close();
    bandimodel2.style.display = "none";
});