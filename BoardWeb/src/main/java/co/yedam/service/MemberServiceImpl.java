package co.yedam.service;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.MemberMapper;
import co.yedam.vo.MemberVO;

public class MemberServiceImpl implements MemberService{
	SqlSession sqlSession = DataSource.getInstance().openSession(true);	//true넣으면 자동 commit
	MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);

	@Override
	public boolean signUp(MemberVO mvo) {
		// TODO Auto-generated method stub
		return true;
	}

}
