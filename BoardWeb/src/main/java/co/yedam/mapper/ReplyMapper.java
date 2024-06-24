package co.yedam.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import co.yedam.common.CenterVO;
import co.yedam.vo.ReplyVO;

public interface ReplyMapper {
		// 목록, 단건조회, 등록, 삭제
		List<ReplyVO> selectList(int boardNo);	// 목록
		List<ReplyVO> selectListPaging(@Param("boardNo") int boardNo, @Param("page") int page);
		ReplyVO selectReply(int replyNo);	// 단건조회
		int insertReply(ReplyVO rvo);	// 등록
		int deleteReply(int replyNo);	// 삭제
		
		// 댓글 건수
		int selectReplyCnt(int bno);
		
		// 센터 정보 생성
		int insertCenter(CenterVO[] array);
		
		//시도별 센터 갯수 차트
		List<Map<String, Object>> centerBysido();
	
}
