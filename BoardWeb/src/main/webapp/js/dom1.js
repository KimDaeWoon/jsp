/**
 * 
 */

document.getElementById('fruit').style.display = 'none';	// 안보이게 함

document.querySelector('table.table tr:nth-of-type(5)').setAttribute('align', 'center');		// 버튼 가운데 정렬

// 페이지 로딩 하면서 회원3명(myMember) 출력
console.log(myMembers);

for(let my of myMembers){

document.getElementById('memberList').appendChild(addRow(my));
	
}


// 추가버튼 클릭이벤트 등록.
document.getElementById('addBtn').addEventListener('click', addMemberFnc);		// 클릭하면 함수 실행 하겠다
document.getElementById('modBtn').addEventListener('click', modMemberFnc);		// 클릭하면 함수 실행 하겠다
document.getElementById('delBtn').addEventListener('click', removeMemberFnc);		// 클릭하면 함수 실행 하겠다
//document.getElementById('delBtn').addEventListener('change', clickMemberFnc);		// 클릭하면 함수 실행 하겠다
document.querySelector('thead input[type ="checkbox"]').addEventListener('change', allCheckFnc);	// 전체 선택


// 수정 을 클릭 하면 같은 값을 찾아 그 배열에 집어 넣겠다
function modMemberFnc(){
	let targetTr = document.querySelectorAll('#memberList tr');
	// 비교 value 값 과 tr 값을 비교
	
	// 입력 화면의 회원 아이디 값을 가져와서 mid 변수 저장.
	let mid = document.getElementById('mid').value;
	let mname = document.getElementById('mname').value;
	let mphone = document.getElementById('mphone').value;
	let mpoint = document.getElementById('mpoint').value;
	
	for(let men of targetTr){
		if(men.children[0].innerText == mid || men.children[1].innerText == mname){
			men.children[0].innerText = mid;
			men.children[1].innerText = mname;
			men.children[2].innerText = mphone;
			men.children[3].innerText = mpoint;
		}else{
			alert('존재하지 않습니다');
		}
	}
	
}

function addMemberFnc() {
	const id = document.getElementById('mid').value;	// id 값을 mid 라는 값을 받는다
	const name = document.getElementById('mname').value;
	const phone = document.getElementById('mphone').value;
	const point = document.getElementById('mpoint').value;

	if (!id || !name || !phone || !point) {
		alert('필수 값을 입력 하세요');
		return;
	}

	document.getElementById('memberList').appendChild(addRow({ id, name, phone, point }));
	document.getElementById('mid').value = "";
	document.getElementById('mname').value = "";
	document.getElementById('mphone').value = " ";
	document.getElementById('mpoint').value = " ";
}	// end of addMemberFnc

function addRow(member = { id, name, phone, point }) {
	// tr  > td *4 개 만듦
	const tr = document.createElement('tr');
	tr.addEventListener('click', showDetailFnc);
	
	for (let prop in member) {
		const td = document.createElement('td');
		td.innerHTML = member[prop];
		tr.appendChild(td);
	}
	
	
	// 삭제 버튼 생성
	// <td><button>삭제</button></td>
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click', removeTrElement);
	//td.innerHTML = '<button>삭제</button>';
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);

	// 체크 박스 생성.
	td = document.createElement('td');
	btn = document.createElement('input');
	btn.setAttribute('type', 'checkbox');
	
	// 체크박스 클릭 되었을때 상위 체크 박스 클릭 변경
	btn.addEventListener('change', checkboxElement);
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
}	// end of addRow

function showDetailFnc(e){
	//console.log('tr', e);	// 연결되어 있다 
	document.getElementById('mid').value = this.children[0].innerText;
	document.getElementById('mname').value = this.children[1].innerText;
	document.getElementById('mphone').value = this.children[2].innerText;
	document.getElementById('mpoint').value = this.children[3].innerText;
}



function removeTrElement(e){
	console.log('btn', e);	//
	e.stopPropagation(); //  tr 이벤트 안됨 , 상위요소로 이벤트전파 차단.
	this.parentElement.parentElement.remove();
}


// 삭제 기능
function removeMemberFnc(){
		let targetTr = document.querySelectorAll('#memberList tr');
		for(let tr of targetTr){
			console.log(tr.children[5].children[0].checked);
			if(tr.children[5].children[0].checked){
				tr.remove();
			}
		}
}


// 선택 기능
// this 는 1.이벤트 (이벤트 대상), 2. 함수(window), 3 객체(객체 자신)
function allCheckFnc(){
//	let checkVal =	this.checked;
	let targetTr = document.querySelectorAll('tbody#memberList tr')
//		.forEach(item => item.children[5].children[0].checked = this.checked);
// 함수 안에서 선언 된 this 는 window 객체.
	for(let tr of targetTr){
		//tr.children[5].children[0].checked = true;
		//tr.children[5].children[0].checked = false;

		if(this.checked == true){
			tr.children[5].children[0].checked = true;
	}else{
			tr.children[5].children[0].checked = false;
		}
		
	}
}

function checkboxElement(){
	let targetTr = document.querySelectorAll('#memberList tr');
	let chb = document.querySelector('thead input[type ="checkbox"]');
	
	for(let ele of targetTr){
		if(ele.children[5].children[0].checked == false){
			chb.checked = false;
			break;
		}else{
			chb.checked = true;
		}
	}
	
	
}


