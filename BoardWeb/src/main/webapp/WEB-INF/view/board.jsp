<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri ="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
 <%@ taglib uri = "http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:include page = "../public/header.jsp" />

<h3>상세 화면(board.jsp)</h3>
<form name = "myFrm" action = "removeForm.do">
<input type = "hidden" value = "${board.boardNo}" name = "bno">
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
					<!-- <button type = "submit" disabled class ="btn btn-danger">삭제</button>
						<button type = "button" disabled class ="btn btn-warning" >수정</button> -->
			</c:otherwise>
		</c:choose>
		
		</td>
	</tr>
</table>
</form>
<script>
	document.querySelector('button.btn-warning').addEventListener('click', function(e){
		
	// 삭제 화면 이동일 경우 removeForm.do
	// 수정 화면 이동일 경우 action = "modifyForm.do";
		document.forms.myFrm.action = "modifyForm.do";
		document.forms.myFrm.submit();			
	});
</script>
<a href = "boardList.do?page=${page}">목록으로 이동 하기</a>
<jsp:include page = "../public/footer.jsp" />