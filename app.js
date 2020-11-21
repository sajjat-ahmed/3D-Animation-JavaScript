// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxix = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxix}deg)`;
})