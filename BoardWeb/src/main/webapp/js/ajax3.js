/**
 * 		ajax3.js
 */
const xthp = new XMLHttpRequest();
xthp.open('get', 'membersAjax.do');
xthp.send();
xthp.onload = function(){
	console.log(xthp);	
	let data = JSON.parse(xthp.responseText);
	data.forEach(user =>{
		document.getElementById('list').appendChild(makeRow(user));
	});
	
	
}
 const fields = ['userId','userName','userPw','responsibility'];
 function makeRow(obj = {}){
	const tr = document.createElement('tr');
	tr.setAttribute('id', obj.userId);
	tr.addEventListener('dblclick', function(){
		document.getElementById('myModal').style.display = 'block';
		// 선택된 사용자의 이름, 비번을 모달에 출력
		console.log(this);
		document.getElementById('modify_name').value = this.children[1].innerHTML;
		document.getElementById('modify_pass').value = this.children[2].innerHTML;
		document.getElementById('modify_id').value = this.children[0].innerHTML;

	})
	fields.forEach(field => {
		const td = document.createElement('td');
		td.innerHTML = obj[field];
		tr.appendChild(td);
	});
	
	const td = document.createElement('td');
	const btn = document.createElement('button');
	btn.setAttribute('data-delId', obj.userId);
	btn.addEventListener('click', removeMemberFnc);	
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	
	tr.appendChild(td);	
	
		return tr;
}
// 수정 이벤트
document.getElementById('modBtn').addEventListener('click', function(){
	let id = document.getElementById('modify_id').value;
	let name = document.getElementById('modify_name').value;
	let pass = document.getElementById('modify_pass').value;

	// ajax 생성
	const modAjax = new XMLHttpRequest();
	



	// 정상적으로 정보가 업데이트 되면 화면 수정.
	// 수정이 안됬으면 화면수정X


	let targetTr = document.getElementById(id);
	targetTr.children[1].innerHTML = name;
	targetTr.children[2].innerHTML = pass;

	// 모달창 닫기.
	document.getElementById('myModal').style.display = 'none';
})


 // data 추가  등록이벤트
 document.getElementById('addBtn').addEventListener('click', function(){
	let id = document.getElementById('uid').value;
	let pw = document.getElementById('upw').value;
	let name = document.getElementById('uname').value;
	let auth = document.getElementById('auth').value;
	
	const addAjax = new XMLHttpRequest();
	let url = 'addAjax.do?id='+id+'&pw='+pw+'&nm='+name+'&auth='+auth;
	addAjax.open('get', url);
	addAjax.send();
	
	addAjax.onload = function(){
		let result = JSON.parse(addAjax.responseText);		//
				console.log(result);

		if(result.retCode == 'OK'){
			let newMem = {userId: id, userPw: pw, userName: name, responsibility: auth};
			document.getElementById('list').appendChild(makeRow(newMem));
			alert(result.retMsg);
		}else{
			alert(result.retMsg);
		}
	}
 })
 
 // 아이디 중복값 이벤트 설정
 document.getElementById('uid').addEventListener('change', function(){
	let checkId = this.value;
	
	const checkAjax = new XMLHttpRequest();
	checkAjax.open('get', 'checkIdAjax.do?id='+checkId);
	checkAjax.send();
	checkAjax.onload = function(){
		let result = JSON.parse(checkAjax.responseText);
		if(result.retCode == 'Exist'){
			alert('이미 존재 하는 아이디 입니다.');
			document.querySelector('#addBtn').disabled = true;
		}else{
			alert('등록 가능한 아이디 입니다.');
			document.querySelector('#addBtn').disabled = false;
		}
	}
 })
 
 // 아이디 삭제 
 document.getElementById('delBtn').addEventListener('click', function(){
	let deleteId = document.getElementById('uid').value;
	
	const deleteAjax = new XMLHttpRequest();
	deleteAjax.open('get', 'deleteId.do?id='+deleteId);
	deleteAjax.send();
	deleteAjax.onload = function(){
		let result = JSON.parse(deleteAjax.responseText);
		if(result.retCode == 'Good'){
			alert('삭제 완료 되었습니다');
			document.querySelectorAll('#list tr').forEach(tr =>{
				if(tr.children[0].innerHTML == deleteId){
					tr.remove();
					return;
				}
			})	
		}else{
			alert('등록된 아이디가 없습니다')
		}
	}
 })
 
 // tr 에 삭제 button 함수설정 
 function removeMemberFnc(e){
	console.log(e);
	let did = this.getAttribute('data-delId');		// == let did = this.dataset.delId;
	let tr = document.getElementById(did);
	const delAjax = new XMLHttpRequest();
	delAjax.open('get', 'deleteId.do?id=' + did);
	delAjax.send();
	delAjax.onload = function(){
		let result = JSON.parse(delAjax.responseText);
		if(result.retCode == 'Good'){
			alert('삭제 완료');
			tr.remove();
		}
	}
 }
 
 
 
 
 
 
 
 
 
 

 