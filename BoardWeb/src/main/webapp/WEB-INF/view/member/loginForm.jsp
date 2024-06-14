<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib tagdir="/WEB-INF/tags" prefix="myTag"%>
<h3>로그인 화면 (loginForm.jsp)</h3>
<myTag:line/>
<c:set var = "name" value = "hong"></c:set>
<c:out value = "${name}"></c:out>
<c:out value = "${name == 'hong' ? '맞다' : '다르다'}"></c:out>
<c:forEach var = "i" begin="1" end = "10" step = "3">
	<p>${i}</p>
</c:forEach>
<!-- JSP standard tag library -->
<form action = "login.do" method = "get">
<table>
	<tr>
		<th>아이디</th>
		<td><input type = "text" name = "id"></td>
	</tr>	
	<tr>
		<th>비밀번호</th>
		<td><input type = "text" name = "pw"></td>
	</tr>
	<tr>
		<td colspan = "2"><input type = "submit" value = "로그인"></td>
	</tr>	
</table>

</form>