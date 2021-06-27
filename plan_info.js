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
		author:"Nawfal",
		num_comments: 53,
		num_likes: 104,
		post_content:"Anyone know any ways to stay commited to reading the Quran each day? I feel embarrassed I have to ask this.."
	}
}
$(document).ready(function(){
	for(let p in post) {
		$(".container").append(`<div class="mdc-card">
		<h1 class="title">${post[p]['title']}</h1>
		<p class="subtitle">
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
		  </button>
		  <button
			class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
			title="Share"
		  >
			share
		  </button>
		  <button
			class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
			title="More options"
		  >
			more_vert
		  </button>
		</div>
	  </div>`)
	}
})

const tabBar = mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
