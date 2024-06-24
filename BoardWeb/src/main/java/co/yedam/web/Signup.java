package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.MemberVO;

public class Signup implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 파일 첨부일 경우에는 multipart 요청 을 처리.
		// Multipart요청 (1. 요청 정보 2. 저장위치 3. 최대크기 4. 인코딩 5. 리네임정책)
			String savePath = req.getServletContext().getRealPath("images");
			int maxSize = 1024*1024*5;
			String encoding = "utf-8";
			MultipartRequest mr =	new MultipartRequest(req, savePath, maxSize, encoding, new DefaultFileRenamePolicy());
			
			String id = mr.getParameter("userId");
			String pw = mr.getParameter("userPw");
			String name = mr.getParameter("userName");
			String img = mr.getFilesystemName("myImage");
			
			BoardService svc = new BoardServiceImpl();
			MemberVO mvo = new MemberVO();
			
			mvo.setUserId(id);
			mvo.setUserPw(pw);
			mvo.setUserName(name);
			mvo.setImage(img);
			
			try {
					if(svc.addMemberAjax(mvo)) {
				    	System.out.println("회원가입 완료");
				    	resp.sendRedirect("memberList.do");
				    }
			} catch (Exception e) {
				
				}
		    
	}

}
