package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.MemberVO;

public class Signup implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
			String id = req.getParameter("userId");
			String pw = req.getParameter("userPw");
			String name = req.getParameter("userName");
			
			BoardService svc = new BoardServiceImpl();
			MemberVO mvo = new MemberVO();
			
			
			
		
	}

}
