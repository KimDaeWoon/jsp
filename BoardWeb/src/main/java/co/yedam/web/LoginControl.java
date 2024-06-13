package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String id = req.getParameter("id");		// 문자열 id 변수를 name이 "id"를  HTTP에서 요청 한다  
		String pw = req.getParameter("pw");
		
		BoardService svc = new BoardServiceImpl();
		
		if(svc.checkMember(id, pw)) {	// id 가 "happy" 와 pw 가 "1111"이면 
			HttpSession session = req.getSession();
			session.setAttribute("logId", id);	// session 객체에 변수 명이 "logId" 이고 id 를 data 등록 
			
			resp.sendRedirect("main.do");	// main.do 로 보낸다 
		}else {
			resp.sendRedirect("loginForm.do");
		}
		
		
	}

}
