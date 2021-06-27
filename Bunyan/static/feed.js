let post= {
	0:{
		title:"Al-Nasr",
		author:"Ahmad Amali",
		category:"Quran",
		plan: "Front Cover to Back Cover",
		num_comments: 75,
		num_likes: 132,
		post_content:"I had this aha moment with this ayah, I hope you guys appreciate it as much as I did"
	},
	1:{
		title:"5 Pillars of Islam",
		author:"Leena Elzeiny",
		category:"Prayers",
		plan: "On Time",
		num_comments: 64,
		num_likes: 127,
		post_content:"Making sure to practice these holy five daily, one for each prayer. Are you? #LeenaAsks"
	},
	2:{
		title:"Reading Quran daily",
		author:"Nawfal Dajani",
		num_comments: 53,
		num_likes: 104,
		post_content:"Anyone know any ways to stay commited to reading the Quran each day? I feel embarrassed I have to ask this.."
	}
}

$(document).ready(function(){
	for(let p in post) {
		$(".feed-container").append(`<div class="mdc-card">
		<div class="cardheader"> <span class="title">${post[p]['title']}</span><span class="author">by ${post[p]['author']}</span></div>
		<div class="details"><div class="chip">${post[p]['category']}: ${post[p]['plan']}</div></div>
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