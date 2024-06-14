package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.BoardMapper;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class AppTest {

	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession();
//		
//		//interface - 구현객체
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
//		
//		List<BoardVO> list = mapper.boardListPaging(3);
//				
//		for(BoardVO bvo : list) {
//			System.out.println(bvo.toString());
//		}
		
//		BoardService svc = new BoardServiceImpl();
//		
//		System.out.println(svc.getBoard(100));
		
		SearchVO search = new SearchVO(1, "W", "happy");
		mapper.boardListPaging(search).forEach(bvo -> System.out.println(bvo));
		
	}
	
}
