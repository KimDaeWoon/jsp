/**
 * 	reply.js
 */
// 댓글 -> li 생성.

function makeRow(reply = {}){
	let fields = ['replyNo', 'reply', 'replyer', 'replyDate'];
	let li = document.createElement('li');
	fields.forEach(field => {
		let span = document.createElement('span');
		span.innerHTML = reply[field];
		if(field == 'reply'){
			width = '3';
		}else{
			width = '2';
		}
		span.setAttribute('class', 'col-sm-' + width);
		li.appendChild(span);
	})
	return li;
	
}

function cloneRow(reply = {}){
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true);
//	console.dir(template);
	template.style.display = 'block';
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
	template.querySelector('span:nth-of-type(5)').setAttribute('id',reply.replyNo);

	return template;
}
//cloneRow();
// 한건 삭제


// button 태그 안에 onclick event를 따로 주었기에 this 가 아닌 e.target으로 주어야 한다. 
function deleteRow(e){
let rno = e.target.parentElement.getAttribute('id');
const removeRp = new XMLHttpRequest();
removeRp.open('get', 'removeReply.do?rno='+rno);
removeRp.send();
removeRp.onload = function(){
	let data1 = JSON.parse(removeRp.responseText);
	
	if(data1.retCode == 'Good'){
		alert('삭제가 잘되었습니다.')
		e.target.parentElement.parentElement.remove();
	}else{
		alert('잘못 삭제 되었습니다')
	}
}




//	e.target.remove();
}

 const listAjax = new XMLHttpRequest();
 listAjax.open('get', 'replyListJson.do?bno='+bno);
 listAjax.send();
 listAjax.onload = function(){
	let data = JSON.parse(listAjax.responseText);
	console.log(data);
	data.forEach(reply =>{
		//document.querySelector('div.content>ul').appendChild(makeRow(reply));
		document.querySelector('div.content>ul').appendChild(cloneRow(reply));		
	})
 }
 
 
 
 
 
 