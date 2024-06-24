<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<style>
	.center {
	  text-align: center;
	}
	
	.pagination {
	  display: inline-block;
	}
	
	.pagination a {
	  color: black;
	  float: left;
	  padding: 8px 16px;
	  text-decoration: none;
	  transition: background-color .3s;
	  border: 1px solid #ddd;
	  margin: 0 4px;
	}
	
	.pagination a.active {
	  background-color: #4CAF50;
	  color: white;
	  border: 1px solid #4CAF50;
	}
	
	.pagination a:hover:not(.active) {background-color: #ddd;}
	
	</style>   
<!-- publicData.jsp -->
<h3>공공 data 연습</h3>
<input type = "text" id = "search" ><button id = "findBtn" placeholder = "ex) 동구">검색</button>
<h4>sido 정보에서 중복된 값을 제거해서 위 option태그를 생성하고 검색하기</h4>
<select id = "sidoList">
    <option>서울특별시</option>
    <option>대구시</option>
    <option>제주도</option>

</select>
<button id = "centerDB">센터DB생성</button>
<table class="table">
    <thead>
        <tr>
            <th>센터 id</th>
            <th>센터명</th>
            <th>연락처</th>
            <th>주소</th>
        </tr>
    </thead>
    <tbody id = "centerList">       
    </tbody>
</table>

<div id = "paging" class="pagination">
	<a>1</a>
	<a>2</a>
	<a>3</a>
	<a>4</a>
</div>
<script src ="js/public.js"></script>



