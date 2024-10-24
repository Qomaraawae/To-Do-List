// Toggle Dark Mode
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Change Font Style
const fontStyleSelect = document.getElementById('font-style');
fontStyleSelect.addEventListener('change', (event) => {
    document.body.style.fontFamily = event.target.value;
});

// Change Font Size
const fontSizeRange = document.getElementById('font-size');
fontSizeRange.addEventListener('input', (event) => {
    document.body.style.fontSize = event.target.value + 'px';
});

// Change Background Color
const bgColorBtn = document.getElementById('bg-color-btn');
const bgColorInput = document.getElementById('bg-color');

bgColorBtn.addEventListener('click', () => {
    bgColorInput.click(); // Memunculkan pemilih warna
});

bgColorInput.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// To-Do List Functionality
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('dblclick', () => editTask(span));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
}

function editTask(span) {
    const currentText = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.className = 'editable';

    input.addEventListener('blur', () => {
        span.textContent = input.value;
        span.style.display = 'inline';
        input.replaceWith(span);
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            span.textContent = input.value;
            span.style.display = 'inline';
            input.replaceWith(span);
        }
    });

    span.replaceWith(input);
    input.focus();
}