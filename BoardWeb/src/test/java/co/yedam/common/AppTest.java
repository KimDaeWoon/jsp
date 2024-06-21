package co.yedam.common;

import java.util.List;
import java.util.function.Consumer;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.BoardMapper;
import co.yedam.mapper.ReplyMapper;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;
import co.yedam.vo.ReplyVO;

public class AppTest {

	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession();
//		
//		//interface - 구현객체
		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
		// interface에 구현해 메소드가 하나만 있는 인터페이스 :함수형인터페이스.
		mapper.selectListPaging(2, 2).forEach(reply -> System.out.println(reply));	// 람다 표현식
		
//		ReplyVO rvo = new ReplyVO();
//		try {
//			if(mapper.deleteReply(6) == 1) {
//				System.out.println("성공");
//			}			
//		} catch (Exception e) {
//			// TODO: handle exception
//			System.out.println("실패");
//		}
//		mapper.selectList(201).forEach(reply -> 	System.out.println(reply));
//		List<BoardVO> list = mapper.boardListPaging(3);
//				
//		for(BoardVO bvo : list) {
//			System.out.println(bvo.toString());
//		}
		
//		BoardService svc = new BoardServiceImpl();
//		
//		System.out.println(svc.getBoard(100));
		
		//SearchVO search = new SearchVO(1, "W", "happy");
		//mapper.boardListPaging(search).forEach(bvo -> System.out.println(bvo));
		
		
		
	}
	
}
