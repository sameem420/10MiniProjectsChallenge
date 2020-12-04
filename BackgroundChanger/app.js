const btnBGChanger = document.getElementById('changebg');

btnBGChanger.addEventListener('click', () => {
    document.body.style.background = randomBG();
})

const randomBG= () => {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}