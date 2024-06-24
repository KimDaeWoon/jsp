package co.yedam.service;

import java.util.List;

import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;
/* 
 * 목록, 단건조회, 등록, 수정, 삭제 
 * 기능의 실행은 mapper 실행
 */
public interface BoardService {
	List<BoardVO> boardList(SearchVO search);
	int boardTotal(SearchVO search);
	BoardVO getBoard(int bno); //단건조회. 정리부분
	boolean addBoard(BoardVO bvo);
	boolean editBoard(BoardVO bvo);
	boolean removeBoard(int bno);
	
	// checkMember(id, pw)
	MemberVO checkMember(String id, String pw);
	
	List<MemberVO> memberList();
	boolean addMemberAjax(MemberVO mvo);
	boolean checkMemberId(String id);
	boolean deleteMemberId(String id);
	
	boolean modifyMember(MemberVO mvo);
	
	// 파일 첨부 회원등록.
	boolean addMemberImage(MemberVO mvo);
	
}
