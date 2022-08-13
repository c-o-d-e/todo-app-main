function addTask() {
    const textInput = document.getElementById("text-input").value;
    document.getElementById("text-input").value = "";
    const taskContainer = document.getElementsByClassName("task-container");
    let newTask = `<div class="task">
        <div class="circle"></div>
        <h2 class="task-label">${textInput}</h2>
    </div>`;
    $(".task-container").append(newTask);
    console.log(newTask);
}
