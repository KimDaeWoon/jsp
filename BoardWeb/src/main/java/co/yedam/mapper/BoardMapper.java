package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.BoardVO;

//목록, 등록, 수정, 삭제, 단건조회

public interface BoardMapper {
	List<BoardVO> boardList();	// 전체 목록
	List<BoardVO> boardListPaging(int page);	// 페이지 별로 5건씩
	int getTotalCnt();	// 페이징 계산 용도.
	int insertBoard(BoardVO bvo); // 게시판 등록
	int updateBoard(BoardVO bvo);
	int deleteBoard(int bno);
	BoardVO selectBoard(int bno);	// 단건 조회
	// int bno  = parameter type, result type = boardvod
}
