/**
 *  reply.js
 */



// 매개값 2개 1개는 bno 나머지는 함수 받는다
// 함수 호출
let page = 1;
svc.replyList({ bno, page }, replyListFnc);


// 댓글 등록 이벤트.
document.getElementById('addReply').addEventListener('click', addReplyFnc);

// 페이징 a 태그를 클릭하면 목록보여주기.
document.querySelectorAll('div.pagination a').forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault(); // a태그는 페이지 이동이기에 기본기능 차단 
		page = item.innerHTML;
		svc.replyList({ bno, page }, replyListFnc);
	})
})



// 댓글 건수 를 활용해서 페이징 계산 하고 목록 출력
function makePagingFnc() {
	svc.replyTotalCnt(bno, createPagingList);
}

let pagination = document.querySelector('div.pagination')
function createPagingList() {
	let totalCnt = this.responseText;
	console.log(totalCnt);	// 632건 / 5 = 127pg
	let startPage, endPage;
	let prev, next;
	let realEnd = Math.ceil(totalCnt / 5);	// 127pg

	endPage = Math.ceil(page / 10) * 10;	// 10pg 씩 보여주기
	startPage = endPage - 9;
	endPage = endPage > realEnd ? realEnd : endPage;	// end = 10 real 127 이면 ~~>
	prev = startPage > 1;
	next = endPage < realEnd;
	
	pagination.innerHTML = '';
	// startPage, endPage, prev, next => a태그 생성.
	if (prev) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', startPage-1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML =  "&laquo;";
		pagination.appendChild(aTag);
	}
	for (let p = startPage; p <= endPage; p++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', p);

		aTag.setAttribute('href', '#');
		aTag.innerHTML = p;
		if (page == p) {
			aTag.className = 'active';
		}
		pagination.appendChild(aTag);
	}
	if (next) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', endPage+1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&raquo;";
		pagination.appendChild(aTag);
	}
	document.querySelectorAll('div.pagination a').forEach(item => {
		item.addEventListener('click', function (e) {
			e.preventDefault(); // a태그는 페이지 이동이기에 기본기능 차단 
			page = item.dataset.page;
			svc.replyList({ bno, page }, replyListFnc);
		})
	})
}
createPagingList();

// 등록 실행 함수. 이미 bno 는 알고 있음
function addReplyFnc() {
	if (!replyer) {
		alert('로그인 하세요!!');
		return;
	}
	let reply = document.getElementById('reply').value;
	if (!reply) {
		alert('댓글을 등록 하세요!!');
		return;
	}
	svc.addReply({ replyer, reply, bno }, addReplyCallback);	// 속성 : 값  => 속성과 값이 같을때 (replyer: replyer) 줄일 수 있다
}	// end of addReplyFnc


function addReplyCallback() {
	console.log(this.responseText);
	let result = JSON.parse(this.responseText);
	if (result.retCode == 'OK') {
		alert('등록 성공');
		//let li = cloneRow(result.retVal);
		//document.querySelector('div.content>ul').appendChild(li);
		//댓글 등록을 눌렀을때 (1번으로 다시와서 리스트 다시 불러오기)
		svc.replyList({ bno, page : 1 }, replyListFnc);
		document.getElementById('reply').value = '';
	} else {
		alert('등록 실패 =>' + result.retVal);
	}
}

// replyList 의 매개값으로 사용될 함수.
function replyListFnc() {
	// 댓글을 을 지우고 새롭게 목록 출력
	document.querySelectorAll('div.content>ul>li').forEach((item, idx) => {
		if (idx > 2) {
			item.remove();
		}
	});
	console.log(this.responseText);
	let data = JSON.parse(this.responseText);	// 자바언어로 변환 
	data.forEach(reply => {
		let li = cloneRow(reply);
		document.querySelector('div.content>ul').appendChild(li);
	})
	makePagingFnc();
}	// end of replyListFnc

// 댓글정보 => li 생성.
function cloneRow(reply = {}) {
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true);
	template.style.display = 'block';
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	//template.setAttribute('id', reply.replyNo);
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
	template.querySelector('span:nth-of-type(5)').setAttribute('id', reply.replyNo);

	return template;
}

// 삭제 기능, 한건 삭제
function deleteRow(e) {
	let li = e.target.parentElement.parentElement;
	let rno = e.target.parentElement.getAttribute('id');

	svc.revomeReply(rno, deleteReplyFnc);
	// removeReply 메소드의 매개값으로 전달될 함수. 화면에서 한건 지우기
	function deleteReplyFnc() {
		let result = JSON.parse(this.responseText);
		if (result.retCode == 'OK') {
			alert(result.retMsg)
			svc.replyList({bno, page}, replyListFnc);
			//li.remove();
		} else {
			alert('Error =>' + result.retMsg);
		}
	}

}

