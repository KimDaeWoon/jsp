package co.yedam;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.web.AddBoard;
import co.yedam.web.AddForm;
import co.yedam.web.AddReply;
import co.yedam.web.AddStudent;
import co.yedam.web.AjaxForm;
import co.yedam.web.BoardList;
import co.yedam.web.CenterChart;
import co.yedam.web.CenterForm;
import co.yedam.web.CenterInfo;
import co.yedam.web.CheckIdAjax;
import co.yedam.web.CheckPwAjax;
import co.yedam.web.DeleteBoard;
import co.yedam.web.DeleteId;
import co.yedam.web.GetBoard;
import co.yedam.web.LoginControl;
import co.yedam.web.LoginForm;
import co.yedam.web.LogoutControl;
import co.yedam.web.MainControl;
import co.yedam.web.MapForm;
import co.yedam.web.MemberAddAjax;
import co.yedam.web.MemberAjax;
import co.yedam.web.MemberList;
import co.yedam.web.ModifyAjax;
import co.yedam.web.ModifyBoard;
import co.yedam.web.ModifyForm;
import co.yedam.web.ProductControl;
import co.yedam.web.PublicData;
import co.yedam.web.RemoveBoard;
import co.yedam.web.RemoveForm;
import co.yedam.web.RemoveReply;
import co.yedam.web.ReplyList;
import co.yedam.web.ScriptForm;
import co.yedam.web.Signup;
import co.yedam.web.SignupForm;
import co.yedam.web.StudentForm;
import co.yedam.web.TotalCnt;

// front -> 요청url(*.do) - 실행컨트롤 매칭
// main.do -> FrontController -> /WEB-INF/public/main.jsp
// 객체생성 -> init -> service -> destroy
public class FrontController extends HttpServlet {
	
	private Map<String, Control> map;	//key : url, value : control
	
	public FrontController() {
		map = new HashMap<String, Control>();
	}
	
	@Override
	public void init() throws ServletException {
		map.put("/main.do", new MainControl());
		map.put("/product.do", new ProductControl());
		map.put("/StudentForm.do", new StudentForm());	//등록화면
		map.put("/addStudent.do", new AddStudent());	//db에 정보 저장
		
		//게시글 목록
		map.put("/boardList.do", new BoardList());
		
		//상세화면
		map.put("/getBoard.do", new GetBoard());
		
		//게시판 등록폼으로 이동
		map.put("/addForm.do", new AddForm());
		
		//게시판 등록
		map.put("/addBoard.do", new AddBoard());
		
		//게시판 삭제 화면으로 이동
		map.put("/removeForm.do", new RemoveForm());
		
		//게시판 삭제
		map.put("/removeBoard.do", new RemoveBoard());
		
		// 수정 화면으로 이동 
		map.put("/modifyForm.do", new ModifyForm());
		
		//수정 처리
		map.put("/modifyBoard.do", new ModifyBoard());
		
		//로그인 화면 이동
		map.put("/loginForm.do", new LoginForm());
		
		//로그인 처리
		map.put("/login.do", new LoginControl());
		
		//로그아웃 처리
		map.put("/logout.do", new LogoutControl());
		
		//회원 가입
		map.put("/signupForm.do", new SignupForm());
		
		//회원 가입 처리
		map.put("/signup.do", new Signup());
	
		//회원목록(관리자템플릿)
		map.put("/memberList.do", new MemberList());
		
		// 자바스크립트 연습용 페이지
		map.put("/script.do", new ScriptForm());
		
		// ajax 연습
		map.put("/ajax.do", new AjaxForm());
		
		map.put("/membersAjax.do", new MemberAjax());
		// 추가
		map.put("/addAjax.do", new MemberAddAjax());
		
		// 아이디 중복값 controll
		map.put("/checkIdAjax.do", new CheckIdAjax());
		
		// pW control 
		map.put("/checkPwAjax.do", new CheckPwAjax());
		
		// 아이디 삭제
		map.put("/deleteId.do", new DeleteId());
		
		// 정보 수정
		map.put("/modifyAjax.do", new ModifyAjax());
		
		//댓글 관련
		map.put("/replyListJson.do", new ReplyList());
		
		//댓글 삭제
		map.put("/removeReply.do", new RemoveReply());
		
		//댓글 등록 
		map.put("/addReply.do", new AddReply());
		
		map.put("/replyTotalCnt.do", new TotalCnt());
		
		map.put("/publicData.do", new PublicData());
		
		// map api 호출
		map.put("/map.do", new MapForm());
		// json 문자열 data =>  DB insert 
		map.put("/uploadCenter.do", new CenterInfo());
		
		// 센터 차트
		map.put("/centerForm.do", new CenterForm());
		map.put("/centerChart.do", new CenterChart());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String uri = req.getRequestURI();	// url : http://localhost/BoardWeb/main.do
//		System.out.println("uri : " + uri);	// uri : /BoardWeb/main.do
		String context = req.getContextPath();	//project name
//		System.out.println("context : " + context);	// context : /BoardWeb
		String page = uri.substring(context.length());
//		System.out.println("page : " + page);	// page : /main.do
		Control result = map.get(page);
		result.exec(req, resp);
	}
}
