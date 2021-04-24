//Variables
    const addTask = document.querySelector('.add');
    const list = document.querySelector('.list');
    const date = document.querySelector('.date');
    const saveTask = document.querySelector('.save');
    const form = document.querySelector('form');
    const btn = document.querySelector('button');
    // const txt_input = document.querySelector('input');

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
    eventlisteners();
    

    function eventlisteners(){
        btn.addEventListener('click', saveTasks)
        addTask.addEventListener('click', addNewTask);
        document.body.addEventListener('click', taskDone);
        document.body.addEventListener('click', deleteTask);
        // document.body.addEventListener('click', editTask);
        document.addEventListener('DOMContentLoaded', localStorageOnLoad);
    }
    

    
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

        //remove task from local storage
        removeTaskLocalStorage(e.target.parentElement.parentElement.textContent);
        
    } 
    // function editTask(e){
    //     let TaskComplete = e.target.parentElement.previousElementSibling;
    //     if(e.target.className == 'edit'){
    //         TaskComplete.contentEditable = true;
    //     }
        
    // }
    
    function saveTasks(e){

        e.preventDefault();

        const task = document.querySelector('input').value;
        
        const newTask = document.createElement('li');
        newTask.className = 'task';
        newTask.textContent = task;
        form.style.visibility = 'hidden';

        //delete Task
        const del = document.createElement('span');
        del.className = 'delete';
        del.innerHTML = '✘';
        
        //mark task as done
        const done = document.createElement('span');
        done.className = 'done';
        done.innerHTML = '✔';
        
        //Edit Task
        // const edit = document.createElement('span');
        // edit.className = 'edit';
        // edit.innerHTML = '✔';

        //parent Element of Actions
        const actions = document.createElement('div');
        actions.className = 'action';

        const item = document.createElement('div');

        item.className = 'item';
        item.appendChild(newTask);
        actions.appendChild(del);
        actions.appendChild(done);
        // actions.appendChild(edit);
        item.appendChild(actions);
        list.appendChild(item);
       
        //saves tweet to local storage
        addTaskToLocalStorage(task)


        document.querySelector('input').value = "";
    }

    function addTaskToLocalStorage (task) {
        let tasks = getTasksFromStorage();

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify( tasks) );
    }

    function getTasksFromStorage() {
        let tasks;
        const tasksLS = localStorage.getItem('tasks');

        if( tasksLS === null) {
            tasks = [];
        }else{
            tasks = JSON.parse( tasksLS)
        }
         
        return tasks;
    }

    function localStorageOnLoad(){
        let tasks = getTasksFromStorage();

        tasks.forEach(function(task){       
                
            const newTask = document.createElement('li');
            newTask.className = 'task';
            newTask.textContent = task;
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


        });
    }
    
    function removeTaskLocalStorage(task){

        let tasks = getTasksFromStorage();

        const taskDelete = task.substring( 0, task.length -2 );

        tasks.forEach(function(tasksLS, index){
            if(taskDelete === tasksLS) {
                tasks.splice(index, 1);
            }
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
