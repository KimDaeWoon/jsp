package co.yedam.common;
// 검색 조건을 담는 클래스

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor	// 생성자 만들어 주는 클래스
@NoArgsConstructor	// 기본 생성자 클래스
public class SearchVO {
	private int page;
	private  String searchCondition;
	private String keyword;
	
	
}
