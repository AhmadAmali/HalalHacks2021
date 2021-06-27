
const buttonRipple = mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    mdc.textField.MDCTextField.attachTo(el);
});
let textEl = [];

$(".mdc-fab").click(()=>{
    window.location.href = "./explore_plans";
});

let day_count = 1;

$(".mdc-button").click(()=>{
    day_count++
    $(".day-container").append(`
    <div><hr />
    <h1 class="title">Day ${String.fromCharCode(day_count + 64)}</h1>
    <div class="text-input">
        <span class="material-icons">
            date_range
        </span>
        <label class="mdc-text-field mdc-text-field--filled">
            <span class="mdc-text-field__ripple"></span>
            <span class="mdc-floating-label" id="goal-hint">Length</span>
            <input class="mdc-text-field__input" type="text" aria-labelledby="len-content" maxlength="100">
            <span class="mdc-line-ripple"></span>
        </label>
        <div class="mdc-text-field-helper-line">
            How many times to repeat
        </div>
    </div>
    <div class="text-input">
        <span class="material-icons">
            done_all
        </span>
        <label class="mdc-text-field mdc-text-field--filled">
            <span class="mdc-text-field__ripple"></span>
            <span class="mdc-floating-label" id="task-hint">Tasks</span>
            <input class="mdc-text-field__input" type="text" aria-labelledby="goal-content" maxlength="100">
            <span class="mdc-line-ripple"></span>
        </label>
        <div class="mdc-text-field-helper-line">
            Separate by commas (i.e. "Fajr, Duhr, ...")
        </div>
    </div></div>`);
    textEl = document.querySelectorAll('.mdc-text-field');
    mdc.textField.MDCTextField.attachTo(textEl[textEl.length - 1]);
    mdc.textField.MDCTextField.attachTo(textEl[textEl.length - 2]);
});