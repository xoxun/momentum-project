const clock = document.querySelector("#clock");

function getClock(){
    const data = new Date();
    const hours = data.getHours().toString().padStart(2,"0");
    const minutes = data.getMinutes().toString().padStart(2,"0");
    const seconds = data.getSeconds().toString().padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);