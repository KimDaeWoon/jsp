package co.yedam.common;

import lombok.Data;

@Data
public class PageDTO {
	private int startPage, endPage;
	private boolean prev, next;	// 이전 10개 , 이후 10개
	private int page;
		
	
	// 생성자.
	public PageDTO(int page, int totalCnt) {
		
		this.page = page;   // 1pg ~ 4pg 이면  ~ 10pg
		this.endPage =(int) (Math.ceil(page/10.0)*10);
		this.startPage = this.endPage -9;
		
		int realEnd = (int)(Math.ceil(totalCnt/5.0));
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		
		this.prev = this.startPage > 1;
		this.next = this.endPage == realEnd ? false : true;
	}
}
