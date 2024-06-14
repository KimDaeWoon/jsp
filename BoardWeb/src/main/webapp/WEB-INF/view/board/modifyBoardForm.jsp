<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<h3>수정 화면(modifyBoardForm.jsp)</h3>
<%
	BoardVO board = (BoardVO) request.getAttribute("board");
%>
<p>여기 페이지 >> ${page }</p>
<form action = "modifyBoard.do">
<input type = "hidden" value = "${searchCondition }" name = "searchCondition">
<input type = "hidden" value = "${keyword }" name = "keyword">
<input type = "hidden" value = "${page }" name = "page">
<table class = "table">
	<tr>
		<th>글 번호 </th>
		<td><input type = "text"  readonly value = "${board.boardNo }" name = "bno" ></td>
		<th>조회수</th>
		<td ></td>
	</tr>
	<tr>
		<th>제목 </th>
			<td>
				<input type = "text" value = "${board.title }" name = "title" >
			</td>
	</tr>
	<tr>
	<th>내용 </th>
		<td colspan = "3">
			<textarea class = "form-control" name = "content">
				<c:out value="${board.content }"/>
			</textarea>
		</td>
	</tr>
	<tr>
		<th>작성자 </th>
		<td><c:out value="${board.writer }"/></td>
						
	</tr>
	<tr>
		<th>작성일시 </th>
		<td><c:out value="${board.creationDate }"/></td>
		
	</tr>
	<tr>
		<td colspan = "4">
			<input type = "submit"  value ="수정처리">
		</td>
	</tr>
</table>
</form>