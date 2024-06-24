<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      // ajax 호출 url : centerChart.do
      let centerAry = [];
      centerAry.push(['시도명', '센터갯수']);
      
      fetch('centerChart.do')
      .then(result => result.json())
      .then(result =>{
    	 for(let elem in result){
    		 centerAry.push([elem, result[elem]]);
    	 }
          google.charts.setOnLoadCallback(drawChart);
      })
      
      function drawChart() {
    	  // 
        var data = google.visualization.arrayToDataTable(centerAry);
	
        var options = {
          title: '시도별 센터갯수',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
  </body>
</html>