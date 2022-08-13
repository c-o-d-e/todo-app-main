function addTask() {
    const textInput = document.getElementById("text-input").value;
    document.getElementById("text-input").value = "";
    const allTodos = document.getElementsByClassName("all-todos");
    let newTask = `<div class="task">
        <div class="circle"></div>
        <h2 class="task-label">${textInput}</h2>
    </div>`;
    $(".all-todos").append(newTask);
    console.log(newTask);
}
