/**
 * public.js
 */

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=TVEcjRXWY4Ec9cSw04kntDkWum2w6EHVqv1aAzL6Z8eWyNhJRgRq%2FCsftwrtHgviJaGYoySh9v2Ut6OMbH4F3A%3D%3D';

let publicData;
const target = document.querySelector('#centerList');
let daegu = document.querySelector('#sidoList');

// String "ddddd".indexOf("a") ==> -1
// Array [1, 5, 51, 30].indexOf(2) ==> -1
//[{}, {}, {}].indexOf()
// [] 가 배열 하나 생성 => 모든 데이터 중에 시도 확인 => 가 배열 안에 확인한 시도가 없으면 추가 

let opt;

let sidoArray = [];


fetch(url)
	.then((responseText) => responseText.json()) //[{"id": 1, "center.."}] => [{},{}]
	.then((result) => {
		publicData = result.data;
		
		publicData.forEach(center => {
			target.appendChild(makeRow(center));
			if(sidoArray.indexOf(center.sido) == -1){
				sidoArray.push(center.sido);
			}

		});
		sidoArray.forEach(fields =>{
			opt = document.createElement('option');
			opt.setAttribute('value', fields);
			opt.innerText = fields;
			daegu.appendChild(opt);
		})
		pagiNation();
	})


//  center data 보여주기 
let fields = ['id', 'centerName', 'phoneNumber', 'address'];
function makeRow(center) {
	let tr = document.createElement('tr');
	//    tr.setAttribute('id', fields.id);
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = center[field];
		tr.appendChild(td);
	})
	return tr;
}


// 배열을 갖고 와서 td 값 내부 innerHTML 값에서 '동구' 값을 가져 온다
// 
document.querySelector('#findBtn').addEventListener('click', findBtnFnc);

function findBtnFnc() {
	let CoList = document.querySelector('#search').value;
	target.innerHTML = "";
	publicData.forEach(field => {
		if (field.address.includes(CoList)) {
			target.appendChild(makeRow(field));
		}

	})
}
// 


document.querySelector('#sidoList').addEventListener('change', coVid);

// 공공데이터 받아서 시도데이터를 추출 => 셀렉트의 옵션을 생성
function coVid() { // 
	target.innerHTML = "";
	publicData.forEach(field => {
		let koreanList = daegu.options[daegu.selectedIndex].value;
		 if(field.address.indexOf(koreanList) != -1){
			target.appendChild(makeRow(field));
		}
	})

}

	let page = 1; // 현재 페이지
	let pageId = document.querySelector('#paging');
	let list = document.querySelector('#centerList');
	//list.innerHTML = '';
	let startPg;	// 시작 페이지
	let endPg;		// 마지막 페이지
	let prev;
	let next;
	let realEnd = Math.ceil(284/10); //29
// 페이지 생성
function pagiNation(){

	//publicData
	// 284개 / 10 ::29페이지 까지 있음(1페이지당 10개)

	endPg = Math.ceil(page / 10)*10; //10개씩 보여주기 
	endPg = endPg > realEnd ? realEnd : endPg; 	// 
	startPg = endPg-9;
	prev = startPg > 1;		// 10보다 크면 발생
	next = endPg < realEnd;		//? 
	pageId.innerHTML = '';

	if(prev){
		tagA = document.createElement('a')
		tagA.setAttribute('data-page', startPg-1);
		//tagA.setAttribute('href', '#');
		tagA.innerHTML = "&laquo;";
		pageId.appendChild(tagA);
	}
	for(p = startPg; p <= endPg; p++){
		let tagA = document.createElement('a');
		tagA.setAttribute('data-page', p)
		//tagA.setAttribute('href', '#');	
		tagA.innerHTML = p;
		 if(page == p){
			tagA.className = 'active';	
		}
		pageId.appendChild(tagA);
	}
	
		if(next){
		tagA = document.createElement('a')
		tagA.setAttribute('data-page', endPg+1);
		//tagA.setAttribute('href', '#');
		tagA.innerHTML = "&raquo;";
		pageId.appendChild(tagA);
	}
	
	
	let abc = document.querySelectorAll('#paging a');
	abc.forEach(item =>{
		item.addEventListener('click',(e) =>{
			e.preventDefault();
			page = item.dataset.page;
			console.log(page, "여기");
			let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=${page}&perPage=10&serviceKey=TVEcjRXWY4Ec9cSw04kntDkWum2w6EHVqv1aAzL6Z8eWyNhJRgRq%2FCsftwrtHgviJaGYoySh9v2Ut6OMbH4F3A%3D%3D`;
			console.log(url);
			fetch(url)
			.then((responseText) => responseText.json()) //[{"id": 1, "center.."}] => [{},{}]
			.then((result) => {
				publicData = result.data;
				target.innerHTML = "";
				publicData.forEach(center => target.appendChild(makeRow(center))); // 
			})
			for (elem of abc){
				elem.classList.remove('active');
			}
			e.target.classList.add('active');
			//page = item.dataset.page; //?

			pagiNation();
	})
	})

}







