// declair vars
const form = document.querySelector('.submit-Btn');
const input = document.querySelector('.input');
const taskList = document.querySelector('.output');

loadAllEventListeners();

function loadAllEventListeners() {
  form.addEventListener('submit', getTask);
  taskList.addEventListener('click', removeTask)
}

// getTask function 
function getTask(e) {
  if(input.value === '') {
    alert('Please Enter Task')
  }
  addTask();
  
  e.preventDefault();
}

// addTask function
function addTask() {
  let li = document.createElement('li');
  li.className = 'del'
  li.appendChild(document.createTextNode(input.value));
  taskList.appendChild(li);
  input.value = '';

}

// remove task function
function removeTask(e) {
  if(e.target.classList.contains('del')){
    e.target.remove()
  }
}



