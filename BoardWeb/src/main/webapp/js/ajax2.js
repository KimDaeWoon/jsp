/**
 * ajax2.js
 * XMLHTTPRequest 객체.
 */

const xhtp = new XMLHttpRequest();		// 아작스
xhtp.open('get', 'data/MOCK_DATA.json');	
xhtp.send();
xhtp.onload = function(){
	let data = JSON.parse(xhtp.responseText);	// json 문자열 - > 자바스크립트 객체.
	console.log(data);
	
	// DOM 활용해서 페이지 작성
	data.forEach(element => {
		document.getElementById('list').appendChild(makeRow(element));

	});

}

let fields = ['id', 'first_name', 'email', 'salary'];
function makeRow(obj = {}){
	const tr = document.createElement('tr');
	fields.forEach(field => {
		const td = document.createElement('td');
		td.innerHTML = obj[field];
		tr.appendChild(td);
	});
		return tr;
}


const xhtm = new XMLHttpRequest();
xhtm.open('get', 'loginForm.do');
xhtm.send();
xhtm.onload = function(){
	console.log(xhtm);
	//document.getElementById('show').innerHTML = xhtm.responseText;
}

console.log('end');