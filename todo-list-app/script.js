const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const remainingTasks = document.getElementById("remainingTasks");
const successMessage = document.getElementById("successMessage");
function updateProgress() {
    const allTasks = taskList.querySelectorAll("li");
    const completed = taskList.querySelectorAll("span.line-through");

    totalTasks.textContent = allTasks.length;
    completedTasks.textContent = completed.length;
    remainingTasks.textContent = allTasks.length - completed.length;

    if (remainingTasks.textContent === "0" && totalTasks.textContent !== "0") {
        successMessage.classList.remove("hidden"); 
} else {
    successMessage.classList.add("hidden");
}
}
addBtn.addEventListener("click", function () {
    const task = taskInput.value;

    const li = document.createElement("li");
    li.className =
        "bg-grey-100 p-3 rounded-1g mt-2 flex justify-between items-center";
const span = document.createElement("span");
span.textContent = task;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className =
    "bg-red-500 text-white px-3 py-1 rounded";

const completeBtn = document.createElement("button");
completeBtn.textContent = "Complete";
completeBtn.className =
    "bg-green-500 text-white px-3 py-1 rounded mr-2";

completeBtn.addEventListener("click", function () {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-500");
    updateProgress();
});

deleteBtn.addEventListener("click", function () {
    li.remove();
    updateProgress();
});     

const buttonContainer = document.createElement("div");

buttonContainer.appendChild(completeBtn);
buttonContainer.appendChild(deleteBtn);

     li.appendChild(span);
     li.appendChild(buttonContainer);

    taskList.appendChild(li);

    taskInput.value = "";
    updateProgress();
});