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
        tasks: ["Go to Helping Hands", "Make mom food", "Treat coworker", "Find a homeless person"]
    }
}

let rec_data = {
    "Wear Hijab":{
        goal: "Wear Hijab",
        subscribers: "17K",
        length: "180 days",
        category: "Physical",
        tasks: ["Long pants", "Long sleeves", "Full attire", "No attire"]
    },
    "Random Kindness":{
        goal: "Random Kindness",
        subscribers: "61K",
        length: "10 days",
        category: "Social Impact",
        tasks: ["Smile", "Compliment someone", "Call family", "Make dad food"]
    },
    "Be organized":{
        goal: "Be organized",
        subscribers: "61K",
        length: "10 days",
        category: "Personality",
        tasks: ["Use planner", "Don't miss a meeting"]
    },
}

mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-fab'));
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
    mdc.ripple.MDCRipple.attachTo(el);
});

$(".favorite").click((event)=>{
    console.log(event);
    $(".favorite").text = "star";
})

$(document).ready(function(){
    for(let d in todo_data){
        let plan_card = $("<div class='mdc-card' style='background-color: #FFE45C'></div>").html(
            `<div class="card-content">
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
        $("#current").append(plan_card);
    }

    for(let d in rec_data){
        let plan_card = $("<div class='mdc-card'></div>").html(
            `<div class="card-content">
                <div class="left">
                    <p class="title">${rec_data[d].goal}</p>
                    <p class="subtitle">${rec_data[d].category}</p>
                </div>
                <div class="right">
                    <div class="plan-icons">
                        <span class="material-icons">
                            group
                            </span>
                        <span class="streak">${rec_data[d].subscribers}</p>
                    </div>
                    <div class="plan-icons">
                        <span class="material-icons">
                            today
                            </span>
                        <span class="streak">${rec_data[d].length}</p>
                    </div>
                </div>
            </div>`);
        let task_list = $("<div class='task-list'></div>")
        for(let t in rec_data[d].tasks){
            //create one list item
            let chip = $("<div class='chip'></div>").html(
                `<span>${rec_data[d].tasks[t]}</span>`
            );
            //append to a div of all list items, todo_tasks
            task_list.append(chip);
        }
        //append list of all list items to todo itself
        plan_card.append(task_list);
        //append action items
        plan_card.append(
            `<div class="mdc-card__actions">
                <button class="mdc-icon-button mdc-card__action mdc-card__action--icon"
                aria-pressed="false"
                aria-label="Add to favorites"
                title="Add to favorites">
                <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">star</i>
                <i class="material-icons mdc-icon-button__icon favorite">star_border</i>
                </button>
                <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Add">add_circle_outline</button>
            </div>`)
        //append todo to DOM
        $("#recommended").append(plan_card);
    }
});