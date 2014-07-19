var obj = {
	StrTexts : " 은 정말 몸에 좋아요 ^^",
	registerEvents : function() {
		var eventPos = document.getElementsByClassName('clickEvent');
		var text = this.StrTexts;
		for(var i =0; i<eventPos.length; i++) {
			eventPos[i].addEventListener("click", function(e) {
				//debugger;
				console.log(e.currentTarget.innerHTML + text);
			}, false);
		}
	}
};

obj.registerEvents();
