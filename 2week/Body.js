var obj = {
	StrTexts : " 은 정말 몸에 좋아요 ^^",
	registerEvents : function() {
		var eventPos = document.getElementsByClassName('clickEvent');
                //bind 방법을 배웠으니 적용해보는 게 좋겠네요 ~!
		var text = this.StrTexts;
		for(var i =0; i<eventPos.length; i++) {
			eventPos[i].addEventListener("click", function(e) {
				//debugger;
                                //여기 아래 text가 아닌 this.StrTexts를 사용해서 변경해야하고요
				console.log(e.currentTarget.innerHTML + text);
			}, false);
		}
	}
};

obj.registerEvents();
