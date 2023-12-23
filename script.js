const button = document.getElementById("trafficLightButton");
const colors = ["btn-danger", "btn-warning", "btn-success"];
let index = 0;

function changeColor() {
    button.classList.remove(colors[index]);
    index = (index + 1) % colors.length;
    button.classList.add(colors[index]);
}

button.addEventListener("click", changeColor);
setInterval(changeColor, 10000);
