<%@page import="java.text.SimpleDateFormat"%>
<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
 <%@ taglib uri = "http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
	BoardVO board = (BoardVO) request.getAttribute("board");
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	String yyyymmdd = sdf.format(board.getCreationDate());
%>

<form action = "removeBoard.do" method = "get">
<input type = "hidden" value = "${searchCondition }" name = "searchCondition">
<input type = "hidden" value = "${keyword }" name = "keyword">
<input type = "hidden" value = "${page }" name = "page">
	<table class = "table">
		<tr>
			<th>글 번호 </th>
			<td ><input type = "hidden" name = "bno" value="${board.boardNo }"></td>
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
				<button type = "submit" class ="btn btn-danger">삭제</button>
			</td>
		</tr>
	</table>
</form>