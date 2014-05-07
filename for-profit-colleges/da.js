
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Net Income With 10-year Repayment', 'Net Income with Minimum Payments', 'Net Income with High School Diploma Only And No Student Debt'],
        
  [2010,15013,14940,32784],
  [2011,16861,15869,33768],
  [2012,18816,16832,34781],
  [2013,20884,17831,35824],
  [2014,23076,18867,36899],
  [2015,25285,19934,38006],
  [2016,27743,21049,39146],
  [2017,30356,22208,40320],
  [2018,33136,23414,41530],
  [2019,36097,24668,42776],
  [2020,39079,25960,44059]

        ]);
      
        // Create and draw the visualization.
        var options= {  title: "Criminal Justice",
                        curveType: "function",
                        colors: ['#3366CC', '#dc3912', 'green'],
                        width: 450, height: 350,
                       vAxis: {viewWindow: {min: 14000, max: 46000}},
                       hAxis: {slantedText: true, ticks: [2012]},
                       legend: {position: "none"}
                      };
                       
                 
          
      var chart= new google.visualization.LineChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
    

​