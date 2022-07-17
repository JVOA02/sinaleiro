const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;

const trafficlight = ( event ) =>{
    turnOn [event.target.id]();
}

const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

}

const changecolor = () => {
    const colors = ['vermelho','amarelo','verde']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}
const turnOn = {
    'vermelho':    () => img.src = './IMG/vermelho_3D.png',
    'amarelo':    () => img.src = './IMG/amarelo_3D.png',
    'verde':    () => img.src = './IMG/verde_3D.png',
    'automatico': () => setInterval(changecolor, 1000)

}
buttons.addEventListener('click', trafficlight);