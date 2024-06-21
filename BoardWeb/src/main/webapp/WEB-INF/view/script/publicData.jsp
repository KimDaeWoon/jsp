<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- publicData.jsp -->
<h3>공공 data 연습</h3>
<input type = "text" id = "search" ><button id = "findBtn" placeholder = "ex) 동구">검색</button>
<h4>sido 정보에서 중복된 값을 제거해서 위 option태그를 생성하고 검색하기</h4>
<select id = "sido">
    <option>서울특별시</option>

</select>
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

<script src ="js/public.js"></script>



