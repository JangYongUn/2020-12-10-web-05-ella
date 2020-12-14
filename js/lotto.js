/**
 * ! A. 알고리즘
 * 1. 1~45까지의 숫자 중 원하는 번호를 생성한다. - Math.random()
 * 2. 추출된 번호를 lotto배열의 넣는다. 단 중복되면 안된다.
 * 3. 6개의 번호가 추출되면 .result-wrap에 공을 만들어 넣는다.
 * 
 * ! B. 알고리즘
 * 1. 1~45까지의 번호가 존재하는 배열이 있다.
 * 2. numbers에서 6개의 번호를 추출하여 lotto배열에 넣는다.
 * 3. 6개의 번호가 추출되면 .result-wrap에  공을 만들어 넣는다.
 * 
 * ? 다 만들면 booldook@gmail.com으로 폴더 전체를 압축하여 보낸다.
 * ? 보내는 제목 : [장용운] 로또 숙제
 */
/* 
var numbers = [];
for(for i=1; i<=45; i++) numbers.push(i);
var lotto = [];

      indexOf()란?
'yellow', 'blue', 'red', 'gray', 'green', ''
 */

function onLucky(){
	var numbers = [];
	var lotto = [];
	for(var i=1; i<=45; i++) numbers.push(i);
	$(".result-wrap").empty();
	number = Math.ceil(Math.random()*44);
	$(".result-wrap").append('<div class ="number'+numbers[number]+'"></div>');
}

$("#btLucky").click(onLucky);