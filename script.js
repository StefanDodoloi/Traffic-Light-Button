function changeColor() {
    let button = document.getElementById("trafficLightButton");

    let currentClass = button.classList.item(1);

    if (currentClass === "btn-danger") {
        button.classList.remove("btn-danger");
        button.classList.add("btn-warning");
    } else if (currentClass === "btn-warning") {
        button.classList.remove("btn-warning");
        button.classList.add("btn-success");
    } else {
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
    }
}

document.getElementById("trafficLightButton").addEventListener("click", changeColor);

setInterval(changeColor, 10000);
