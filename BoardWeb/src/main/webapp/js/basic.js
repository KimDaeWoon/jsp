/**
 * 		
	
 */
//DOM 연습
document.querySelector('ul#fruit>li').innerHTML = '사과';
//Li 생성.
let li = document.createElement('li');	//<li>태그 만들고
li.innerHTML = '<b>오렌지</b>';		// <li><b>오렌지</b></li>

document.querySelector('ul#fruit').appendChild(li);	// 추가

document.querySelector('ul#fruit>li').remove();	// 삭제
document.querySelector('ul#fruit>li').style.backgroundColor = 'yellow';	// 배경색

console.log(document.querySelectorAll('ul#fruit>li'));
let lists = document.querySelectorAll('ul#fruit>li');

for (let list of lists) {
	let btn = document.createElement('button');	// button 태그 생성
	btn.innerText = '삭제';		//	<
	btn.setAttribute('class', 'btn btn-primary');	// 클래스 추가
	btn.addEventListener('click', function() {	//이벤트 등록
		btn.parentElement.remove();
	});	// 이벤트 유형
	list.appendChild(btn);
}