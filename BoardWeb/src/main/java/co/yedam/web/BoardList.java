package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.common.PageDTO;
import co.yedam.common.SearchVO;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

/*
 * oracle db에 글목록을 조회 -> boardList.jsp 출력.
 */
public class BoardList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String page = req.getParameter("page");
		
		String sc = req.getParameter("searchCondition");	// 검색 기능
		String kw = req.getParameter("keyword");
		
		page = page == null ? "1" : page;
		// 검색 조건들은 담는 SearchVO
		SearchVO search = new SearchVO(Integer.parseInt(page), sc, kw);	// 페이지, 컨디션, 키워드
		
		

		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList(search);

		req.setAttribute("boardList", list);		
		req.setAttribute("searchCondition", sc); // 검색 기능
		req.setAttribute("keyword", kw);
		
		
		
		// paging 계산.
		int totalCnt = svc.boardTotal(search);
		PageDTO dto = new PageDTO(Integer.parseInt(page), totalCnt);
		req.setAttribute("paging", dto);

		req.getRequestDispatcher("board/boardList.tiles").forward(req, resp);
	}

}
