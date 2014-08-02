/* 네임스페이스는 프로그램에서 필요로 하는 전역 변수의 개수를 줄이는 동시에, 과도한 접두어를 사용하지 않고도 이름이 겹치지 않게 해 준다.
 * 1. 사용법
 * 전역 객체를 하나 만든 후에, 모든 기능을 이 객체에 추가한다.
 * 2. 장점
 * 전역 변수의 개수가 줄어들고 이름이 중복되는 걸 막아준다.
 * 3. 예제코드
 */

//전역 객체를 선언한다.
var GLOBAL = {};

//전역 객체에 Name과 Class라는 함수를 할당한다.
GLOBAL.Name = function() {};
GLOBAL.Class = function() {};

//변수를 넣는다.
GLOBAL.real_var = 0;

//객체 컨테이너를 선언한다.
GLOBAL.modul = {};

//객체 컨테이너에 객체를 추가한다.
GLOBAL.modul.modul1 = {};
GLOBAL.modul.modul2 = {a : 0, b : 1};


/* 여기서 네임 스페이스에 중복된 이름을 집어넣는 일이 발생할 수도 있다.
 * 추가하기 전에 프로퍼티의 중복여부를 확인하는 함수를 만들어 보자
 */

//GLOBAL을 넣거나, 존재하지 않는다면 {}로 초기화한다.
 var GLOBAL = GLOBAL || {};

 //namespace함수를 선언한다.
GLOBAL.namespace = function (ns_string) {

	//입력받은 변수를 '.'을 기준으로 자른다. 입력받은 값이 GLOBAL.* 의 형식일 수도 있기 때문이다.
	var parts = ns_string.split('.'),
	parent = GLOBAL;
	i;

	//앞에 들어온 값이 GLOBAL이면 자른다.
	if(parts[0] === "GLOBAL") {
		parts = parts.slice(1);
	}

	//크기만큼 돌면서, 부모에 입력한 프로퍼티가 있는지 확인한다.
	for(i = 0; i<parts.length; i++) {
		//입력한 프로퍼티가 존재하지 않으므로 생성한다.
		if(typeof parent[parts[i]]==="undefined") {
			parent[parts[i]] = {};
		}

		parent = parent[parts[i]];
	}
	return parent;
}
