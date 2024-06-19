<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<form action = "signup.do">
	<table>
		<tr>
		<th>아이디</th>
		<td><input type = "text" name = "userId"></td>
		</tr>
		
		<tr>
			<th>비밀번호</th>
			<td><input type = "text" name = "userPw"></td>
		</tr>
		
		<tr>
			<th>사용자 이름</th>
			<td><input type = "text" name = "userName"></td>
		</tr>
	
		<tr>
			<td><input type = "submit" value = "회원가입"></td>
		</tr>	
	</table>
</form>