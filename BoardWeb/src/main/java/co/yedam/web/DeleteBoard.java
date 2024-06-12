package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;

public class DeleteBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		BoardService bsc = new BoardServiceImpl();
		int deleteNo = Integer.parseInt(req.getParameter("delete"));
		if(bsc.removeBoard(deleteNo)) {
			resp.sendRedirect("boardList.do");
		}
		
		
	}

}
