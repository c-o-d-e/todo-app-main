let itemsLeft = Number(document.getElementById("items-left").innerHTML); //get number in the span of items left

const task = document.getElementsByClassName("task"); //gets an object with all task divs

function topTaskLabelBorderRadius() {
    if (task[0]) {
        task[0].style.borderTopLeftRadius = "5px";
        task[0].style.borderTopRightRadius = "5px";
    }
}

topTaskLabelBorderRadius();

function addTask() {
    const textInput = document.getElementById("text-input").value;
    document.getElementById("text-input").value = "";
    const taskContainer = document.getElementsByClassName("task-container");
    let newTask = `<div class="task" draggable="true"
    ondrop="drop(event)">
        <div class="circle" onclick="taskCompleted(event)"></div>
        <div class="new-task">
                            <h2 class="task-label">${textInput}</h2><img
                                id="cross"
                                onclick="deleteTask(event)"
                                src="./images/icon-cross.svg"
                                alt="cross icon"
                            />
                        </div>
        
    </div>`;
    $(".task-container").append(newTask);
    itemsLeft++;
    document.getElementById("items-left").innerHTML = itemsLeft; //updates html with correct itemsLeft
}

const completedDivs = []; //all completed divs in array to use in clearCompleted function

function taskCompleted(event) {
    const domTokenList = event.target.classList;

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
        itemsLeft++;
    } else {
        event.target.classList.add("completed");
        completedDivs.push(event.target.parentElement);
        event.target.nextElementSibling.classList.add("strikethrough");
        $(event.target).append(tickMark);
        itemsLeft--;
    }
    document.getElementById("items-left").innerHTML = itemsLeft; //updates html with correct itemsLeft
}

function activeTasks() {
    for (i = 0; i < task.length; i++) {
        if (task[i].firstElementChild.classList.contains("completed")) {
            task[i].style.display = "none";
        } else {
            task[i].style.display = "flex";
        }
    }
}

function completedTasks() {
    for (i = 0; i < task.length; i++) {
        if (task[i].firstElementChild.classList.contains("completed")) {
            task[i].style.display = "flex";
        } else {
            task[i].style.display = "none";
        }
    }
}

function allTasks() {
    for (i = 0; i < task.length; i++) {
        task[i].style.display = "flex";
    }
}

function clearCompleted() {
    for (i = 0; i < completedDivs.length; i++) {
        completedDivs[i].remove();
    }
}

function deleteTask(event) {
    event.target.parentElement.parentElement.remove();
    itemsLeft--;
    document.getElementById("items-left").innerHTML = itemsLeft; //updates html with correct itemsLeft
    topTaskLabelBorderRadius();
}

// Drag and Drop functions and logic

let dragged = null;

document.addEventListener("dragstart", event => {
    // store a ref. on the dragged elem
    dragged = event.target;
});

document.addEventListener("dragover", event => {
    // prevent default to allow drop
    event.preventDefault();
});

let hovered = null;

document.addEventListener("dragenter", event => {
    if (event.target.className === "task") {
        hovered = event.target;
    }
});

function drop(event) {
    // prevent default action to allow drop
    event.preventDefault();
    // logic for moving the dragged element
    if (hovered == task[0]) {
        $(dragged).insertBefore(hovered);
    } else {
        $(dragged).insertAfter(hovered);
    }
}
