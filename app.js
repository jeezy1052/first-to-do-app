//  const textInput = document.querySelector('.input').value;
const submitBtn = document.querySelector('.submit-Btn').addEventListener('click', getText);


// Submit Btn Handeler
function getText(e) {
  let textInput = document.querySelector('.input').value;
  if(textInput !== '') {
    addTask(textInput);
    textInput = '';
  } else {
    errorMsg(msg);
  }
  
  
  
}

// Add task to  ul
function addTask(textInput) {
 let li = document.createElement('li');
 let ul = document.querySelector('.output');
 
 li.appendChild(document.createTextNode(`${textInput}`));
 ul.appendChild(li)
  
 
}







