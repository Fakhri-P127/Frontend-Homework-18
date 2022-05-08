const dragElements = document.querySelectorAll(".task");
const boxes = document.querySelectorAll(".task-box");
const inputs = document.querySelectorAll(".task-input");
dragElements.forEach((task) => {
  task.addEventListener("dragstart", (e) => {
    setTimeout(() => {
      e.target.classList.add("drag-active");
      // console.log("sa");
    }, 0);
  });
  task.addEventListener("dragend", (e) => {
    e.target.classList.remove("drag-active");
    // console.log("noice");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragenter", (e) => {
    const dragActive = document.querySelector(".drag-active");
    // console.log(dragActive);
    box.appendChild(dragActive);

    switch (e.target.id) {
      case "todo":
        dragActive.classList.remove("task-doing");
        dragActive.classList.remove("task-done");
        dragActive.classList.add("task-todo");

        break;
      case "doing":
        dragActive.classList.remove("task-todo");
        dragActive.classList.remove("task-done");
        dragActive.classList.add("task-doing");

        break;
      case "done":
        dragActive.classList.remove("task-doing");
        dragActive.classList.remove("task-todo");
        dragActive.classList.add("task-done");

        break;
      default:
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("keyup", function (e) {
    if (e.code === "Enter") {
      const value = e.target.value;
      const task = document.createElement("div");
      task.innerText = value;
      task.setAttribute("draggable", true);
      task.classList.add("task");
      e.target.value = "";

      // const node = document.createTextNode(value);
      switch (e.target.parentElement.id) {
        case "todo":
          task.classList.add("task-todo");

          // task.appendChild(node);
          const boxTodo = document.querySelector("#todo");
          boxTodo.appendChild(task);

          break;
        case "doing":
          task.classList.add("task-doing");

          // task.appendChild(node);
          const boxDoing = document.querySelector("#doing");
          boxDoing.appendChild(task);

          break;
        case "done":
          task.classList.add("task-done");

          // task.appendChild(node);
          const boxDone = document.querySelector("#done");
          boxDone.appendChild(task);

          break;
        default:
      }
    }
  });
});
