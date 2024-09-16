addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const clearCompleteButton = document.getElementById('clear-completed');

    //funscion para agregar nueva tarea
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""; //limpiar el campo de entrada
        }
    });

    //Funcion que crea y agrega a la lista
    function addTask(taskText) {
        const li = document.createElement('li');

        //Crear un checkbox para marcar la tarea como completada
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        //texto de la tarea
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        //boton para eliminar la tarea
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-task');

        //agregar evento de marcar tarea como completada
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        //Agregar evento para eliminar la tarea
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        //Agregar elementos al li y luego a la lista
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    //funcion para eliminar todas las tareas completadas
    clearCompleteButton.addEventListener('click', function() {
        const completedTask = document.querySelectorAll('li.completed');
        completedTask.forEach(function (task) {
            taskList.removeChild(task);
        });
    });
});
