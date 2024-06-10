package co.yedam;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class StudentDAO extends DAO{
	// 등록, 수정, 삭제 기능 구현	
	boolean updateStudent(Student std1) {
		getConnection(); // DB에 연결
		String sql = "update tbl_student set phone = ? where std_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(2, std1.getStdNo());
			psmt.setString(1, std1.getPhone());
			if(psmt.executeUpdate() == 1) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			disconn();
		}
		return false;
	}
	
	
	
	
	
	boolean deleteStudent(String stdNo) {	//삭제
		getConnection(); // DB에 연결
		String sql = "delete from tbl_student where std_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, stdNo);		// 몰루
			int cnt = psmt.executeUpdate();
			if(cnt == 1) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			disconn();
		}
		return false;
	}
	
	boolean insertStudent(Student std1) {	//등록
		getConnection();	// DB에 접속 방법
		String sql = "insert into tbl_student(std_no, std_name, phone, bld_type) values(?, ?, ?, ?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, std1.getStdNo());
			psmt.setString(2, std1.getStdName());
			psmt.setString(3, std1.getPhone());
			psmt.setString(4, std1.getBldType());
			if(psmt.executeUpdate() == 1) { // 처리된 건수 == 1
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconn();
		}
		return false;

	}	// end of insertStudent
	
	

	List<Student> studentList(){
		getConnection(); // Connection 객체 (세션) 필요
		String sql = "select * from tbl_student order by std_no";
		List<Student> sts = new ArrayList<Student>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			// 조회된 결과목록을 List<Student>에 담아서 반환.
			while(rs.next()) {
				Student std1 = new Student();
				std1.setStdNo(rs.getString("std_no"));
				std1.setStdName(rs.getString("std_name"));
				std1.setPhone(rs.getString("phone"));
				std1.setBldType(rs.getString("bld_type"));
//				std1.setCreateDate(rs.getDate("create_date"));
				
				sts.add(std1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			disconn();	// 자원 해제
		}
		return sts;
	}
}
