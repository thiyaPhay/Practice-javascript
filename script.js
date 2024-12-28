// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task element
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);

  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('complete');
  });

  taskList.appendChild(taskItem);
  taskInput.value = '';
}

// Add event listeners
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
