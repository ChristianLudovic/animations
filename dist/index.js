const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');



/*
card1.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = '#FDBA62';
    card1.querySelector('.card-info h2').style.color = 'white';
    card1.querySelector('.card-info p').style.color = 'white';
    card1.querySelector('img').style.transform = 'rotate(30deg)'
    card1.querySelector('img').style.transition = 'transform 0.3s ease-in-out'
});

card1.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = '';
    card1.querySelector('.card-info h2').style.color = '';
    card1.querySelector('.card-info p').style.color = '';
    card1.querySelector('img').style.transform = 'none'
});

card2.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = '#E24C4D';
    card2.querySelector('.card-info h2').style.color = 'white';
    card2.querySelector('.card-info p').style.color = 'white';
    card2.querySelector('img').style.transform = 'rotate(30deg)'
    card2.querySelector('img').style.transition = 'transform 0.3s ease-in-out'
});

card2.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = '';
    card2.querySelector('.card-info h2').style.color = '';
    card2.querySelector('.card-info p').style.color = '';
    card2.querySelector('img').style.transform = 'none'
});


card3.addEventListener('mouseenter', (e) => {    
    e.target.style.backgroundColor = '#599C99';
    card3.querySelector('.card-info h2').style.color = 'white';
    card3.querySelector('.card-info p').style.color = 'white';
    card3.querySelector('img').style.transform = 'rotate(30deg)'
    card3.querySelector('img').style.transition = 'transform 0.3s ease-in-out'
});

card3.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = '';
    card3.querySelector('.card-info h2').style.color = '';
    card3.querySelector('.card-info p').style.color = '';
    card3.querySelector('img').style.transform = 'none'
});
*/

// Refactor

card1.addEventListener('mouseenter', (e) => {
    e.target.classList.add('active1');
});

card1.addEventListener('mouseleave', (e) => {
    e.target.classList.remove('active1');
    card1.querySelector('img').style.transition = 'transform 0.3s ease-in-out'
});

card2.addEventListener('mouseenter', (e) => {
    e.target.classList.add('active2');
});

card2.addEventListener('mouseleave', (e) => {    
    e.target.classList.remove('active2');
    card2.querySelector('img').style.transition = 'transform 0.3s ease-in-out'
});

card3.addEventListener('mouseenter', (e) => {
    e.target.classList.add('active3');
});

card3.addEventListener('mouseleave', (e) => {
    e.target.classList.remove('active3');
    card3.querySelector('img').style.transition = 'transform 0.3s ease-in-out'
}
);

