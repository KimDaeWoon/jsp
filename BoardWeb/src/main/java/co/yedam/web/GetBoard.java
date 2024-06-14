package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class GetBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 파라미터정보를 읽어 게시글 번호 조회
		// board.jsp 페이지 출력
		
		String bno = req.getParameter("bno");
		
		String sc = req.getParameter("searchCondition");	// 검색 기능
		String kw = req.getParameter("keyword");
		
		BoardService svc = new BoardServiceImpl();
		BoardVO brd = svc.getBoard(Integer.parseInt(bno));
		
		String page = req.getParameter("page");
		
		req.setAttribute("board", brd);
		req.setAttribute("page", page);
		
		req.setAttribute("searchCondition", sc); // 검색 기능
		req.setAttribute("keyword", kw);
		
		
		req.getRequestDispatcher("board/board.tiles").forward(req, resp);
	}

}
