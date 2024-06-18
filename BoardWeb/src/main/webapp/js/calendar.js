/**
 * 아주 좋아!
 * 
 * 
 * 
 */
document.querySelectorAll('.container -fluid h3')// 반환 타입 NodeList
	.forEach(item => item.remove());
	
	document.querySelectorAll('.container -fluid table.tabel')// 반환 타입 NodeList
	.forEach(item => item.remove());
	
	document.getElementById('fruit').remove();
// 월을 변경하면 달력을 출력하는 이벤트를 등록 
document.getElementById('selectMonth').addEventListener('change', function(){
	makeCalendar(parseInt(this.value)); //parseInt 문자를 숫자로
})

	// document.getElementById('selectMonth').addEventListener('change', makeCalendar);

	
// 달력을 첫째날 계산하는 함수, 마지막날 계산 함수
function getFirstDay(month = 6){
	switch(month){
		case 5:
			return 4;
		case 7:
			return 2;
	}
	return 7;	// 어디에 시작 하는지
}

function getLastDate(month = 6){
	switch(month){
		case 5:
		case 7:
			return 31;
	}
	return 30;		// 몇일까지

}

function makeCalendar(month = 6){
	let firstDay = getFirstDay(month);
	let lastDay = getLastDate(month);

	// table 생성. border = "2"
	let tbl = document.createElement('table');
	tbl.setAttribute('class', 'table');
	let thd = document.createElement('thead');
	let tbd = document.createElement('tbody');
	
	document.getElementById('show').innerHTML = '';	// 짜증난다
	
	// thead 하위 요소
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
	let tr = document.createElement('tr');
	
	// 배열 돌릴때 forEach 사용 한다
	days.forEach(day =>{
		let th = document.createElement('th');
		th.innerHTML = day;
		tr.appendChild(th);
	});
		thd.appendChild(tr);
	// ---------------------------------------------	---------------------------------------------	
	// tbody 하위 요소
	tr = document.createElement('tr');
	
	// 빈 날짜
	for(let i = 1; i < firstDay; i++){
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	//날짜 출력
	for(let d = 1; d <= lastDay; d++){	//getLastDate = 마지막 날 
		let td = document.createElement('td');
		td.innerHTML = d;
		if((d+firstDay - 1) % 7 == 0){
			td.setAttribute('style', 'background-color :blue;');
		}
		if((d+firstDay - 1) % 7== 1){
			td.setAttribute('style', 'background-color :red;');
		}
		
		
		tr.appendChild(td);
			
		if ((d+firstDay - 1) % 7 == 0) {	// 7일 짜리 줄바꿈
			tbd.appendChild(tr);
			tr = document.createElement('tr');
			
		}
	}
	tbd.appendChild(tr);
	// ---------------------------------------------	---------------------------------------------	

	tbl.appendChild(thd);
	tbl.appendChild(tbd);
	



	document.getElementById('show').appendChild(tbl);

} // end of makeCalendar

makeCalendar();

