const dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
const chipSetEl = document.querySelector('.mdc-chip-set');
// const chipSet = mdc.chipSet.MDCChipSet.attachTo(chipSetEl);
const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  mdc.textField.MDCTextField.attachTo(el);
});

const contentElement = document.querySelector('.mdc-drawer-app-content');
dialog.listen('MDCDialog:opened', function() {
    // Assuming contentElement references a common parent element with the rest of the page's content
    contentElement.setAttribute('aria-hidden', 'true');
  });
  dialog.listen('MDCDialog:closing', function() {
    contentElement.removeAttribute('aria-hidden');
  });

$(".mdc-fab").click(()=>{
    dialog.open();
});

$(".mdc-dialog__button").click(()=>{
  window.location.href = "./new_plan"
})