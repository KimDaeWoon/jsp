<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
    
<div class="border-end bg-white" id="sidebar-wrapper">
		<c:choose>
			<c:when test = "${!empty logId }">
      				<div class="sidebar-heading border-bottom bg-light">Start Bootstrap (${logId })</div>			
			</c:when>
			<c:otherwise>
					<div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
			</c:otherwise>
		</c:choose>
      <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action list-group-item-light p-3" href="main.do">메인화면</a>
          <a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시글목록</a>
          <c:choose>
	          	<c:when test ="${!empty logId }">
			         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="logout.do">로그아웃</a>          	
	          	</c:when>
	          	<c:otherwise>
			         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="addForm.do">게시글 등록</a>          	
	          		<a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인</a>
	          	</c:otherwise>         
          </c:choose>
          
          <a class="list-group-item list-group-item-action list-group-item-light p-3" href="signupForm.do">회원가입</a>
          <a class="list-group-item list-group-item-action list-group-item-light p-3" href="script.do">자바스크립트</a>
      </div>
  </div>