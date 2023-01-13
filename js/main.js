const btnAdd = document.querySelector('.add-todo');
const textArea = document.querySelector('#todoText');
const errMsg = document.querySelector('.error');
const wrnMsg = document.querySelector('.warning')
const itemsList = document.querySelector('.todo-list');
const btnDone = document.querySelector('.done');


// Adding a Todo item to the list
btnAdd.addEventListener('click', addTodo)

// Deleting an item
itemsList.addEventListener('click', deleteItem = (e) => {
    if (e.target.classList.contains('delete')){
        if(confirm('Are sure you want to delete this item.')){
            e.target.parentElement.remove();
        };
    }
});

// task completed
itemsList.addEventListener('click', markDone = (e) => {
    if (e.target.classList.contains('done')){
        e.target.parentElement.style.textDecoration = 'line-through';
        e.target.parentElement.style.color = '#555';
        e.target.parentElement.style.fontSize = '13px';
    };   
});

// Maximum Length validation
textArea.addEventListener('keydown', checkLength = (e) =>{
    const maxLength = 31
    // if(document.body.clientWidth <= 320){
    //     maxLength = 30
    // }else{
    //     maxLength = 31;
    // };
    if(e.target.value.length >= maxLength){
        wrnMsg.style.display = 'flex'
        setTimeout(() => wrnMsg.style.display = 'none', 1500)
    };
});



// addTodo function
function addTodo(e){
    // Getting text from the textarea
    const textTodo = textArea.value;


    if (textTodo === ''){
        errMsg.style.display = 'flex';
        setTimeout(() => errMsg.style.display = 'none', 3000);

    }else{
        // Creating a new done button
        doneBtn = document.createElement('button')
        doneBtn.className = 'done'
        doneBtn.appendChild(document.createTextNode('done'))

        // Creating a new delete button
        deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete'
        deleteBtn.appendChild(document.createTextNode('delete'))

        // Creating a span
        span = document.createElement('span')
        // Adding a textNode to the span item
        span.appendChild(document.createTextNode(textTodo))

        // Creating a new list item
        li = document.createElement('li')
        li.className = 'todo-item'
        
        // Appending the span and the done and delete buttons to the list item
        li.appendChild(span)
        li.appendChild(doneBtn)
        li.appendChild(deleteBtn)
        

        // Appending the li to the ul
        itemsList.appendChild(li)


        // Clearing the textarea
        textArea.value = ''
    };

};

console.log(document.body.clientWidth)