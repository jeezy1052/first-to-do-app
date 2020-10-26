// Selectors
document.querySelector('.submit-Btn').addEventListener('submit', getTask);



// Event Handlers
function getTask(e) {
  e.preventDefault();
  let textInput = document.querySelector('.input').value;

  if(textInput !== '') {
    addTask(textInput);
    textInput.value = '';
  }
}

// Helper function  
function addTask(textInput) {
  let li = document.createElement('li');
  let ol = document.querySelector('.output');
  li.className = 'del'
  
  li.appendChild(document.createTextNode(textInput));
  ol.appendChild(li);

  let delTask = document.createElement('a');
  delTask.setAttribute('href', '#')
  delTask.className = 'del'
  delTask.innerHTML = 'X'
  li.appendChild(delTask);
  


  
}


function delTaskList(e) {
  if(e.target.parentElement.classList.contains('del')) {
    console.log(e.target.parentElement.parentElement.remove());
  }
 
}

