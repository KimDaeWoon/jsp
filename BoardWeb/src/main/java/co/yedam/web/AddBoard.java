package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class AddBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		BoardService bsvc = new BoardServiceImpl();
		BoardVO bvo = new BoardVO();
		
		String title = req.getParameter("title");
		String writer =req.getParameter("writer");
		String content = req.getParameter("content");
		bvo.setTitle(title);
		bvo.setWriter(writer);
		bvo.setContent(content);
		
		if(bsvc.addBoard(bvo)) {
			resp.sendRedirect("boardList.do");
		}
		
		
	}

}
