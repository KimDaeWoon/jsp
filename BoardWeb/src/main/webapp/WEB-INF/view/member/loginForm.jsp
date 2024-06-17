<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib tagdir="/WEB-INF/tags" prefix="myTag"%>
<h3>로그인 화면 (loginForm.jsp)</h3>
<myTag:line/>

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