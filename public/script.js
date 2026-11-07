async function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();

    if (!task) return;

    const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: task })
    });

    if (response.ok) {
        input.value = '';
        loadTasks();
    }
}

async function loadTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();

    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task.title;
        list.appendChild(li);
    });
}

loadTasks();
