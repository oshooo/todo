//Variables
    const addTask = document.querySelector('.add');
    const list = document.querySelector('.list');
    const date = document.querySelector('.date');
    const saveTask = document.querySelector('.save');

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

    addTask.addEventListener('click', addNewTask);
    saveTask.addEventListener('click', saveTasks);
    document.body.addEventListener('click', taskDone);
    document.body.addEventListener('click', deleteTask);

    
//Functions
    function addNewTask(){
        const newTask = document.createElement('li');
        newTask.className = 'task';
        newTask.contentEditable = true;
        newTask.focus = true;
        let taskVal = newTask.value;
        const del = document.createElement('span');
        del.className = 'delete';
        del.innerHTML = '✘';
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
        //Adds tasks to local Storage
        addTaskLocalStorage(task);
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

    function addTaskLocalStorage(task){
        alert('Task Added');
    }
    function saveTasks(){
        alert("Hello");
    }