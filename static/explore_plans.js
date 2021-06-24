let todo_data = {
    "On Time":{
        goal: "On Time",
        streak: 12,
        subscribers: "172K",
        length: "50 days",
        category: "Prayer",
        tasks: ["Fajr", "Duhr", "Asr", "Maghrib", "Isha"]
    },
    "Front Cover to Back":{
        goal: "Front Cover to Back",
        streak: 2,
        subscribers: "882K",
        length: "30 days",
        category: "Quran",
        tasks: ["Read 1-50 of An-Nisa", "Read Al-Kahf", "Read Tafseer on Yaseen", "51-100 of An-Nisa"]
    },
    "Feed 1000 people":{
        goal: "Feed 1000 people",
        streak: 50,
        subscribers: "5K",
        length: "180 days",
        category: "Social Impact",
        tasks: ["Go to Helping Hands", "Treat someone after Jummah", "Make mom food", "Find a homeless person"]
    }
}

$(document).ready(function(){
    for(let d in todo_data){
        let plan_card = $("<div class='mdc-card'></div>").html(
            `<div class="card-content mdc-card__primary-action">
                <div class="left">
                    <p class="title">${todo_data[d].goal}</p>
                    <p class="subtitle">${todo_data[d].category}</p>
                </div>
                <div class="right">
                    <div class="plan-icons">
                        <span class="material-icons">
                            local_fire_department
                            </span>
                        <span class="streak">${todo_data[d].streak}</p>
                    </div>
                    <div class="plan-icons">
                        <span class="material-icons">
                            group
                            </span>
                        <span class="streak">${todo_data[d].subscribers}</p>
                    </div>
                    <div class="plan-icons">
                        <span class="material-icons">
                            today
                            </span>
                        <span class="streak">${todo_data[d].length}</p>
                    </div>
                </div>
            </div>`);
        let task_list = $("<div class='task-list'></div>")
        for(let t in todo_data[d].tasks){
            //create one list item
            let chip = $("<div class='chip'></div>").html(
                `<span>${todo_data[d].tasks[t]}</span>`
            );
            //append to a div of all list items, todo_tasks
            task_list.append(chip);
        }
        //append list of all list items to todo itself
        plan_card.append(task_list);
        //append todo to DOM
        $(".mdc-top-app-bar--fixed-adjust").append(plan_card);
    }
});