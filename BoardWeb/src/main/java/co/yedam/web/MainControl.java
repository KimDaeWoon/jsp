package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.Control;
import co.yedam.common.DataSource;
import co.yedam.mapper.StudentMapper;
import co.yedam.vo.Student;

public class MainControl implements Control {
	
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("요청정보 : " + req + ", 응답정보 : " + resp);
		// WEB-INF/public/main.jsp
		// main.do 호출 - main.jsp 페이지 재지정
		
		Student student = new Student();		//Student 클래스에 student 변수 생성 으로 객체 만듦
		student.setStdNo("S1000");		// setter 외부에서 값을 넘겨준다
		student.setStdName("홍길동");
		student.setPhone("010-3211-6544");
		
		SqlSession sqlSession = DataSource.getInstance().openSession();
		StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
		List<Student> list = mapper.selectBlog();
		
		req.setAttribute("student", student);	// student 변수 명을 선언 하고 student 전달 받은 값을 받아 넘겨 준다
		req.setAttribute("studentList", list);
		
		req.getRequestDispatcher("WEB-INF/public/main.jsp").forward(req, resp);		//main.jsp 로 이동 해달라. 요청과 응답 정보를 함께 
	}
}
