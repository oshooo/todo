//Variables
    const addTask = document.querySelector('.add');
    const list = document.querySelector('.list');
    const date = document.querySelector('.date');
    const saveTask = document.querySelector('.save');
    const form = document.querySelector('form');
    const btn = document.querySelector('button');
    const txt_input = document.querySelector('input');

//Date
    const d = new Date();
    let tdate;
    let tMonth;
    let tYear;

    tYear = d.getFullYear();
    tMonth = d.getMonth() + 1;
    tdate = d.getDate();
    date.innerHTML = `${tdate}-${tMonth}-${tYear}`;
    
    
//Event Listeners
    btn.addEventListener('click', saveTasks)
    addTask.addEventListener('click', addNewTask);
    document.body.addEventListener('click', taskDone);
    document.body.addEventListener('click', deleteTask);

    
//Functions
    function addNewTask(){
        form.style.visibility = 'visible';
    }

    function taskDone(e){
        let TaskComplete = e.target.parentElement.previousElementSibling;
        if(e.target.className == 'done'){
            TaskComplete.style.textDecoration = 'line-through';
        }
        
    }
    function deleteTask(e){
        if(e.target.className == 'delete'){
            e.target.parentElement.parentElement.remove();
        }
        
    } 

    function saveTasks(e){
        e.preventDefault();
        const newTask = document.createElement('li');
        newTask.className = 'task';
        const taskVal = txt_input.value;
        newTask.innerText = taskVal;
        form.style.visibility = 'hidden';

        //delete Task
        const del = document.createElement('span');
        del.className = 'delete';
        del.innerHTML = '✘';
        
        //mark task as done
        const done = document.createElement('span');
        done.className = 'done';
        done.innerHTML = '✔';
        const actions = document.createElement('div');
        actions.className = 'action';

        const item = document.createElement('div');

        item.className = 'item';
        item.appendChild(newTask);
        actions.appendChild(del);
        actions.appendChild(done);
        item.appendChild(actions);
        list.appendChild(item);
       
        //saves tweet to local storage
        addTaskToLocalStorage(taskVal)

        txt_input.value = "";
    }

    function addTaskToLocalStorage (taskVal) {
        
    }

    function getTasksFromStorage () {
        let tasks;

        if(localStorage.getItem('tasks') == null) {
            
        }
         
    }