let todo_data = {
    "On Time":{
        goal: "On Time",
        streak: 12,
        category: "Prayer",
        tasks: ["Fajr", "Duhr", "Asr"]
    },
    "Front Cover to Back":{
        goal: "Front Cover to Back",
        streak: 2,
        category: "Quran",
        tasks: ["Read 1-50 of An-Nisa"]
    },
    "Wear Hijab":{
        goal: "Wear Hijab",
        streak: 50,
        category: "Physical",
        tasks: ["Full attire"]
    }
}

$(document).ready(function(){
    for(let d in todo_data){
        let todo = $("<div class='todo-box'></div>").html(
            `<div class="todo-heading">
                <div class="left">
                    <p class="title">${todo_data[d].goal}</p>
                    <p class="subtitle">${todo_data[d].category}</p>
                </div>
                <div class="right">
                    <span class="material-icons">
                        local_fire_department
                        </span>
                    <span class="streak">${todo_data[d].streak}</p>
                </div>
            </div>
            `);
        let todo_tasks = $("<div class='todo-tasks'></div>")
        for(let t in todo_data[d].tasks){
            //create one list item
            let checkbox = $("<div class='todo-task'></div>").html(
                `<div class="mdc-touch-target-wrapper">
                    <div class="mdc-checkbox mdc-checkbox--touch">
                    <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/>
                    <div class="mdc-checkbox__background" >
                        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                        </svg>
                        <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                    <div class="mdc-checkbox__ripple"></div>
                    </div>
                </div>
                <span>${todo_data[d].tasks[t]}</span>`
            );
            //append to a div of all list items, todo_tasks
            todo_tasks.append(checkbox);
        }
        //append list of all list items to todo itself
        todo.append(todo_tasks);
        //append todo to DOM
        $(".mdc-top-app-bar--fixed-adjust").append(todo);
    }
    
});