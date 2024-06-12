<%@page import="java.text.SimpleDateFormat"%>
<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp"%>

<%
	String pg = (String) request.getParameter("page");
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	BoardVO board = (BoardVO) request.getAttribute("board");
	String yyyymmdd = sdf.format(board.getCreationDate());
%>
<table class = "table">
	<tr>
		<th>글 번호 </th>
		<td ><%=board.getBoardNo() %></td>
		<th>조회수</th>
		<td ><%= board.getClickCnt() %></td>
	</tr>
	<tr>
		<th>제목 </th>
		<td colspan = "3"><%= board.getTitle() %></td>
	</tr>
	<tr>
		<th>내용 </th >
		<td colspan = "3"><textarea rows = "5" cols = "33"><%= board.getContent() %></textarea></td>
	</tr>
	<tr>
		<th>작성자 </th>
		<td colspan = "3"><%= board.getWriter() %></td>
	</tr>
		<tr>
		<th>작성일시 </th>
		<td colspan = "3"><%= yyyymmdd %></td>
	</tr>
</table>

<a href = "boardList.do?page=<%= pg%>">목록으로 이동 하기</a>
<a href = "deleteBoard.do?delete=<%= board.getBoardNo() %>">삭제</a>
<%@include file="../public/footer.jsp"%>