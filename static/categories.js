const dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
const textField = mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
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