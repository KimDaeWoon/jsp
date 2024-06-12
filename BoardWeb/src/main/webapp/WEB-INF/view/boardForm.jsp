<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp"%>

<h3>게시판 등록</h3>

<form action="addBoard.do" method="get">
	<table class="table" style="width:350px">
		<tr>
			<th>제목</th>
			<td><input type="text" name="title" required></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><input type="text" name="writer" required></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><textarea rows = "5" cols = "33" name = "content"></textarea></td>
		</tr>	
		<tr>
			<td colspan="2" align="center"><input type="submit" value="등록하기" class="btn btn-primary"></td>
		</tr>
	</table>
</form>


<%@include file="../public/footer.jsp"%>