package co.yedam;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/FirstServelt")
public class FirstServelt extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public FirstServelt() {
        super();
      
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter(); // 출력 스트림 (사용자의 웹 브라우저)
		String id = request.getParameter("id"); // input name = "id"
		String pw = request.getParameter("pw");
		
		out.print("안녕하세요");
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		out.print("<a href = 'index.html'> 인덱스페이지로 이동 </a>");
		out.print("<p>입력한 아이디 " + id + "</p>");
		out.print("<p>입력한 비밀번호 " + pw + "</p>");
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {		
//		doGet(request, response);
		request.setCharacterEncoding("UTF-8");
		String no = request.getParameter("stdNo");
		String name = request.getParameter("stdName");
		String phone = request.getParameter("phone");
		String btype = request.getParameter("bloodType");
		
		Student std = new Student();
		std.setStdNo(no);
		std.setStdName(name);
		std.setPhone(phone);
		std.setBldType(btype);
		
		PrintWriter out = response.getWriter();
		
		StudentDAO sdao = new StudentDAO();
		if(	sdao.insertStudent(std)) {
			out.print("<b>OK</b>");
		}else {
			out.print("<b>Fail</b>");
		}
		
	}

}
