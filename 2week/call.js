function nextMan(name, age) {
	this.name = name;
	this.age = age;
}

function RecoverPeople(name, age) {
        //여기서의 this는 아래처럼 new 키워드로 호출할 때 RecoverPeople를 가리킨다고 할 수 있죠.
	nextMan.call(this, name, age); //이 함수에서의  this 는 RecoverPeople을 가리킵니다.
}
RecoverPeople.prototype = new nextMan();

function Teacher(name, age) {
	nextMan.call(this, name, age); //이 함수에서의 this는 Teacher를 가리킵니다.
}
Teacher.prototype = new nextMan();

var jongUn = new RecoverPeople('jongun', 25);
var heesu = new Teacher('heesu', 21);


/* apply와 call의 차이점은 call은 인자를 콤마를 찍어서 하나하나 전달하지만 apply는 인자를 array로 전달한다. */

