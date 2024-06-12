<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp"%>

<%
	BoardVO board = (BoardVO) request.getAttribute("board");
%>
<table class = "table">

</table>


<p><%=board %></p>
<%@include file="../public/footer.jsp"%>