document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-task-btn");
  const alllist = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("allTask")) || [];

  renderAll();

  addBtn.addEventListener("click", () => {
    const taskText = userInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      complete: false
    };

    tasks.push(newTask);
    saveAll();
    renderAll();
    userInput.value = "";
  });

  function saveAll() {
    localStorage.setItem("allTask", JSON.stringify(tasks));
  }

  function renderAll() {
    alllist.innerHTML = "";
    tasks.forEach(currentTask => render(currentTask));
  }

  function render(currentTask) {
    const li = document.createElement("li");
    li.dataset.id = currentTask.id;
    li.classList.toggle("complete", currentTask.complete);

    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = currentTask.complete;

    const span = document.createElement("span");
    span.textContent = currentTask.text;

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";

    box.addEventListener("change", () => {
      tasks = tasks.map(task => {
        if (task.id === currentTask.id) {
          return { ...task, complete: box.checked };
        }
        return task;
      });

      saveAll();
      renderAll();
    });

    delbtn.addEventListener("click", () => {
      tasks = tasks.filter(tk => tk.id !== currentTask.id);
      saveAll();
      renderAll();
    });

    li.append(box, span, delbtn);
    alllist.appendChild(li);
  }
});


