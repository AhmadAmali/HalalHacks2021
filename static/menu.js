const drawer =  mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = $('.mdc-drawer .mdc-list');

listEl.click(() => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});

const menu = $(".mdc-top-app-bar__navigation-icon");
menu.click(() =>{
    drawer.open = true;
});