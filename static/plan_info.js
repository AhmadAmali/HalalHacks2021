const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

$(".mdc-top-app-bar--fixed-adjust").on("MDCTabBar:activated", function(event){
    console.log(event.detail);
    if(event.detail.index == 0){
        $(".info-container").hide();
        $(".feed-container").show();
    }
    else{
        $(".feed-container").hide();
        $(".info-container").show();
    }
});