<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri ="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
 <%@ taglib uri = "http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<style>
	div.reply div{
		margin : auto;	
	}
	div.reply ul{
		list-style-type: none;
		margin-top: 3px;
	}
	div.reply li{
		padding-top: 1px;
		padding-bottom: 1px;
	}
	div.reply span{
		display: inline-block;
	}

</style>
<h3>상세 화면(board.jsp)</h3>
<form name = "myFrm" action = "removeForm.do">
<input type = "hidden" value = "${page }" name = "page">
<input type = "hidden" value = "${board.boardNo}" name = "bno">
<input type = "hidden" value = "${searchCondition }" name = "searchCondition">
<input type = "hidden" value = "${keyword }" name = "keyword">
<table class = "table">
	<tr>
		<th>글 번호 </th>
		<td ><c:out value = "${board.boardNo}"/></td>
		<th>조회수</th>
		<td ><c:out value = "${board.clickCnt}"/></td>
	</tr>
	<tr>
		<th>제목 </th>
		<td colspan = "3"><c:out value = "${board.title}"/></td>
	</tr>
	<tr>
		<th>내용 </th >
		<td colspan = "3"><textarea rows = "5" cols = "33"><c:out value = "${board.content}"/></textarea></td>
	</tr>
	<tr>
		<th>작성자 </th>
		<td colspan = "3"><c:out value = "${board.writer}"/></td>
	</tr>
		<tr>
		<th>작성일시 </th>
		<td colspan = "3"><fmt:formatDate pattern = "yyyy-MM-dd HH:mm:ss" value = "${board.creationDate}" /></td>
	</tr>
	<tr>
		<td>
		<c:choose>
			<c:when test="${!empty logId && logId == board.writer}">
						<button type = "submit" class ="btn btn-danger">삭제</button>
						<button type = "button" class ="btn btn-warning" >수정</button>
			</c:when>
			<c:otherwise>
						<button type = "submit" disabled class ="btn btn-danger">삭제</button>
						<button type = "button" disabled class ="btn btn-warning" >수정</button>
						<a href = "boardList.do?page=${page}" class ="btn btn-success">목록으로 이동 하기</a>
			</c:otherwise>
		</c:choose>
		
		</td>
	</tr>
</table>
</form>

<!-- 댓글관련 시작 -->
<div class = "container reply">
	<div class = "header">
		<input class="col-sm-5" id = "reply">
		<button class="col-sm-3, btn btn-success"  id = "addReply" >댓글 등록</button>
	</div>
	<div class = "content">
		<ul>
			<li>
				<span class = "col-sm-2">글번호</span>
				<span class = "col-sm-3">글내용</span>
				<span class = "col-sm-2">작성자</span>
				<span class = "col-sm-2">작성 일시</span>
				<span class = "col-sm-1">삭제</span>
			</li>
			<li><hr /></li>
			<li style = "display: none">
				<span class = "col-sm-2">3</span>
				<span class = "col-sm-3">잘봤슈~~!</span>
				<span class = "col-sm-2">happy</span>
				<span class = "col-sm-2">2024-06-20 11:08:22</span>
				<span class = "col-sm-1"><button onclick = "deleteRow(event)" >삭제</button></span>
			</li>
		</ul>
	</div>
</div>
<!-- 댓글관련 끝 -->
<script>
	const bno = "${board.boardNo}";
	const replyer = "${logId}";
	document.querySelector('button.btn-warning').addEventListener('click', function(e){
		
	// 삭제 화면 이동일 경우 removeForm.do
	// 수정 화면 이동일 경우 action = "modifyForm.do";
		document.forms.myFrm.action = "modifyForm.do";
		document.forms.myFrm.submit();			
	});
</script>
<script src = "js/replyService.js"></script>
<script src = "js/reply.js"></script>