package co.yedam;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
// 제어의 역전(Inversion of Control)
// url -> tomcat -> 객체 생성 -> init -> service -> destroy.
// 서블릿의 생명 주기.

public class SecondServlet extends HttpServlet{
	public SecondServlet() {
		System.out.println("SecondServlet 생성자 호출.");
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init 메서드 호출");
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("service 메서드 호출");
	}
	
	@Override
	public void destroy() {
		System.out.println("destroy 메서드 호출");
	}
}
