
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Net Income With 10-year Repayment', 'Net Income with Minimum Payments', 'Net Income with High School Diploma Only And No Student Debt'],
          [2010,13210,13137,32784],
  [2011,14998,14019,33768],
  [2012,16891,14933,34781],
  [2013,18896,15883,35824],
  [2014,21022,16869,36899],
  [2015,23162,17884,38006],
  [2016,25549,18949,39146],
  [2017,28088,20057,40320],
  [2018,30791,21212,41530],
  [2019,33671,22416,42776],
  [2020,36571,23656,44059]

      
        ]);
      
        // Create and draw the visualization.
        var options= {  title: "Business Administration",
                        curveType: "function",
                        colors: ['#3366CC', '#dc3912', 'green'],
                        width: 450, height: 350,
                       vAxis: {viewWindow: {min: 12000, max: 48000}},
                       hAxis: {slantedText: true, ticks: [2012]},
                       legend: {position: "none"}
                      };
                       
                 
          
      var chart= new google.visualization.LineChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
    

​