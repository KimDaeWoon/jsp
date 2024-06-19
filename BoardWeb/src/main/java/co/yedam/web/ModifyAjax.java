package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.Document;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.MemberVO;

public class ModifyAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
			MemberVO mvo = new MemberVO();
			
			String id = req.getParameter("id");
			String name = req.getParameter("nm");
			String pass = req.getParameter("pw");

			mvo.setUserId(id);
			mvo.setUserName(name);
			mvo.setUserPw(pass);
			
			BoardService svc = new BoardServiceImpl();
			
			
			if(svc.modifyMember(mvo)) {
				resp.getWriter().print("{\"retCode\" : \"Good\", \"retMsg\": \"Win\"}");
			}else {
				resp.getWriter().print("{\"retCode\" : \"Bad\", \"retMsg\": \"Lose\"}");
			}
	}

}
