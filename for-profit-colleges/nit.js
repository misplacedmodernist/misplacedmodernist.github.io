
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Net Income With 10-year Repayment', 'Net Income with Minimum Payments', 'Net Income with High School Diploma Only And No Student Debt'],
        
  
  [2010,26880,26810,32784],
  [2011,29065,28117,33768],
  [2012,31366,29472,34781],
  [2013,33789,30876,35824],
  [2014,36346,32334,36899],
  [2015,38929,33835,38006],
  [2016,41770,35406,39146],
  [2017,44775,37039,40320],
  [2018,47956,38738,41530],
  [2019,51328,40507,42776],
  [2020,54733,42329,44059]


        ]);
      
        // Create and draw the visualization.
        var options= {  title: "Network and Information Technology",
                        curveType: "function",
                        colors: ['#3366CC', '#dc3912', 'green'],
                        width: 450, height: 350,
                       vAxis: {viewWindow: {min: 24000, max: 56000}},
                       hAxis: {slantedText: true, ticks: [2012]},
                       legend: {position: "none"}
                      };
                       
                 
          
      var chart= new google.visualization.LineChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
    

​