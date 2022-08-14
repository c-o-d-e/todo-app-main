function addTask() {
    const textInput = document.getElementById("text-input").value;
    document.getElementById("text-input").value = "";
    const taskContainer = document.getElementsByClassName("task-container");
    let newTask = `<div class="task">
        <div class="circle" onclick="taskCompleted(event)"></div>
        <h2 class="task-label">${textInput}</h2>
    </div>`;
    $(".task-container").append(newTask);
    console.log(newTask);
}

function taskCompleted(event) {
    const domTokenList = event.target.classList;
    console.log("user click:", event.target);

    let tickMark = `<img
        src="./images/icon-check.svg"
        alt="task circle"
    />`;

    if (domTokenList.contains("completed")) {
        if (event.target.firstChild) {
            event.target.firstChild.remove();
        }

        event.target.classList.remove("completed");
        event.target.nextElementSibling.classList.remove("strikethrough");
    } else {
        event.target.classList.add("completed");
        event.target.nextElementSibling.classList.add("strikethrough");
        $(event.target).append(tickMark);
    }
}
