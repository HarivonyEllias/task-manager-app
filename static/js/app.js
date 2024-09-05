const taskFormContainer = document.getElementById('taskFormContainer');
const addTaskBtn = document.getElementById('addTaskBtn');
const cancelTaskBtn = document.getElementById('cancelTask');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

let tasks = localStorage.getItem("tasks")!=null ? JSON.parse(localStorage.getItem("tasks")) : [];
if (tasks!=null)
    renderTasks();
let editIndex = null;

// Afficher le formulaire d'ajout   
addTaskBtn.addEventListener('click', () => {
    console.log(taskFormContainer.classList.toString());
    taskFormContainer.classList.remove('hidden');
    taskFormContainer.style.display = "block";
    taskForm.reset();
    editIndex = null;
});

// Annuler l'ajout/modification
cancelTaskBtn.addEventListener('click', () => {
    taskFormContainer.classList.add('hidden');
    taskFormContainer.style.display = "none";
});

// Ajouter ou modifier une tâche
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;

    if (editIndex === null) {
        tasks.push({ name: taskName, date: taskDate });
    } else {
        tasks[editIndex] = { name: taskName, date: taskDate };
    }

    renderTasks();
    localStorage.setItem("tasks",JSON.stringify(tasks));
    taskFormContainer.classList.add('hidden');
    taskFormContainer.style.display = "none";
});

// Afficher les tâches dans le tableau
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.date}</td>
            <td>
                <button onclick="editTask(${index})">Modifier</button>
                <button onclick="deleteTask(${index})">Supprimer</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

// Modifier une tâche
function editTask(index) {
    taskFormContainer.classList.remove('hidden');
    taskFormContainer.style.display = "block"; 
    document.getElementById('taskName').value = tasks[index].name;
    document.getElementById('taskDate').value = tasks[index].date;
    editIndex = index;
}

// Supprimer une tâche
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTasks();
}
