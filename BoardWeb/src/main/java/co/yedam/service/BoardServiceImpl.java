
package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;

/*
 * 업무프로세스를 따라 실행하기 위한 서비스 
 */
public class BoardServiceImpl implements BoardService{
	
	SqlSession sqlSession = DataSource.getInstance().openSession(true);	//true넣으면 자동 commit
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);

	@Override
	public int boardTotal(SearchVO search) {
		return mapper.getTotalCnt(search);
	}
	
	@Override
	public List<BoardVO> boardList(SearchVO search) {
		// mapper에 등록된 기능
		return mapper.boardListPaging(search);
	}

	@Override
	public BoardVO getBoard(int bno) {		// 구현 부분
		return mapper.selectBoard(bno);
	}

	@Override
	public boolean addBoard(BoardVO bvo) {
		return mapper.insertBoard(bvo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO bvo) {
		return mapper.updateBoard(bvo) == 1;
	}

	@Override
	public boolean removeBoard(int bno) {
		return mapper.deleteBoard(bno) == 1;
	}

	@Override
	public MemberVO checkMember(String id, String pw) {
		// TODO Auto-generated method stub
		return mapper.selectMember(id, pw);
	}

	@Override
	public List<MemberVO> memberList() {
		// TODO Auto-generated method stub
		return mapper.memberList();
	}

	@Override
	public boolean addMemberAjax(MemberVO mvo) {
		// TODO Auto-generated method stub
		return mapper.insertMemberAjax(mvo) == 1;
	}

	@Override
	public boolean checkMemberId(String id) {
		// TODO Auto-generated method stub
		return mapper.selectMemeberAjax(id) == 1;
	}

	@Override
	public boolean deleteMemberId(String id) {
		// TODO Auto-generated method stub
		return mapper.deleteMemberAjax(id) == 1;
	}

	@Override
	public boolean modifyMember(MemberVO mvo) {
		// TODO Auto-generated method stub
		return mapper.modifyMemberAjax(mvo) == 1;
	}

	@Override
	public boolean addMemberImage(MemberVO mvo) {
		// TODO Auto-generated method stub
		return mapper.insertMemberAjax(mvo) == 1;
	}

	
	

}
