package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;

public class RemoveBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		BoardService bsrc = new BoardServiceImpl();
		
		int removeNo = Integer.parseInt(req.getParameter("bno"));
		
		if(bsrc.removeBoard(removeNo)) {
			resp.sendRedirect("boardList.do");
		}
	}

}
