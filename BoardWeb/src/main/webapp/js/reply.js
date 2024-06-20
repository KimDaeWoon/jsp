/**
 *  reply.js
 */



// 매개값 2개 1개는 bno 나머지는 함수 받는다
// 함수 호출
svc.replyList(bno, replyListFnc); 
 

// 댓글 등록 이벤트.
document.getElementById('addReply').addEventListener('click', addReplyFnc);

// 등록 실행 함수. 이미 bno 는 알고 있음
function addReplyFnc(){
	if(!replyer){
		alert('로그인 하세요!!');
		return;
	}
	let reply = document.getElementById('reply').value;
	if(!reply){
		alert('댓글을 등록 하세요!!');
		return;
	}
	svc.addReply({replyer, reply, bno}, addReplyCallback);	// 속성 : 값  => 속성과 값이 같을때 (replyer: replyer) 줄일 수 있다
}	// end of addReplyFnc

function addReplyCallback(){
	console.log(this.responseText);
	let result = JSON.parse(this.responseText);
	if(result.retCode == 'OK'){
		alert('등록 성공');
		let li = cloneRow(result.retVal);
		document.querySelector('div.content>ul').appendChild(li);
		document.getElementById('reply').value = '';		
	}else{
		alert('등록 실패 =>' + result.retVal);		
	}
}

 // replyList 의 매개값으로 사용될 함수.
 function replyListFnc(){
 console.log(this.responseText);
	 let data = JSON.parse(this.responseText);	// 자바언어로 변환 
	 data.forEach(reply => {
		 let li = cloneRow(reply);
		 document.querySelector('div.content>ul').appendChild( li);		
	})
}	// end of replyListFnc

// 댓글정보 => li 생성.
function cloneRow(reply = {}){
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true);
	template.style.display = 'block';
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	//template.setAttribute('id', reply.replyNo);
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
	template.querySelector('span:nth-of-type(5)').setAttribute('id',reply.replyNo);

	return template;
}

// 삭제 기능, 한건 삭제
function deleteRow(e){
	let li = e.target.parentElement.parentElement;
	let rno = e.target.parentElement.getAttribute('id');
	
	svc.revomeReply(rno, deleteReplyFnc);
	// removeReply 메소드의 매개값으로 전달될 함수. 화면에서 한건 지우기
	function deleteReplyFnc(){
		let result = JSON.parse(this.responseText);
		if(result.retCode == 'OK'){
			alert(result.retMsg)
			li.remove();
		}else{
			alert('Error =>' + result.retMsg);
		}
	}
	
}

