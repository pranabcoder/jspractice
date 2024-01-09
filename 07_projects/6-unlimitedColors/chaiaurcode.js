const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let intervalId = null;

const changeColor = () => {
    document.body.style.backgroundColor = randomColor();
};
const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000);
        console.log("Start changing color");
    }
};
const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Stop changing color");
};

startButton.addEventListener("click", startChangingColor);
stopButton.addEventListener("click", stopChangingColor);