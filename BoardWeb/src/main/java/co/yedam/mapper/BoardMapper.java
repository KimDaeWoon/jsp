package co.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;

//목록, 등록, 수정, 삭제, 단건조회

public interface BoardMapper {
	List<BoardVO> boardList();	// 전체 목록
	List<BoardVO> boardListPaging(SearchVO search);	// 페이지 별로 5건씩
	int getTotalCnt(SearchVO search);	// 페이징 계산 용도.
	int insertBoard(BoardVO bvo); // 게시판 등록
	int updateBoard(BoardVO bvo);
	int deleteBoard(int bno);
	// int bno  = parameterType, resultType = BoardVO   // resultType 반환 값
	BoardVO selectBoard(int bno);	// 단건 조회
	
	// 회원 id, pw
	int selectMember(@Param("id") String id, @Param("pw") String pw);
	
}
