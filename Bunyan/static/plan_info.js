const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

let post= {
	0:{
		title:"Bunyaan",
		author:"Ahmad Amali",
		num_comments: 75,
		num_likes: 132,
		post_content:"Celebrate the launch of our new app with us! Share a picture of your favorite feature and tell us why you like it so much!"
	},
	1:{
		title:"5 Pillars of Islam",
		author:"Leena Elzeiny",
		num_comments: 64,
		num_likes: 127,
		post_content:"Making sure to practice these holy five daily. Are you? #LeenaAsks"
	},
	2:{
		title:"Reading Quran daily",
		author:"Nawfal Dajani",
		num_comments: 53,
		num_likes: 104,
		post_content:"Anyone know any ways to stay commited to reading the Quran each day? I feel embarrassed I have to ask this.."
	}
}

$(".mdc-top-app-bar--fixed-adjust").on("MDCTabBar:activated", function(event){
    if(event.detail.index == 0){
        $(".info-container").hide();
        $(".feed-container").show();
    }
    else{
        $(".feed-container").hide();
        $(".info-container").show();
    }
});

$(document).ready(function(){
    $(".info-container").hide();
	for(let p in post) {
		$(".feed-container").append(`<div class="mdc-card">
		<div class="cardheader"> <span class="title">${post[p]['title']}</span><span class="author">by ${post[p]['author']}</span></div>
		<p class="post-content">
		  ${post[p]['post_content']}
		</p>
		
		<div class="mdc-card__actions">
		  <button
			class="mdc-icon-button mdc-card__action mdc-card__action--icon"
			aria-pressed="false"
			aria-label="Add to favorites"
			title="Add to favorites"
		  >
			<i
			  class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
			  >favorite</i
			>
			<i class="material-icons mdc-icon-button__icon"
			  >favorite_border</i
			>
		  </button><span class="likes">${post[p]['num_likes']}</span>
		  <button
			class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
			title="Share"
		  >
			chat
		  </button><span class="comments">${post[p]['num_comments']}</span> 
		</div>
	  </div>`)
	}
})
