
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Net Income With 10-year Repayment', 'Net Income with Minimum Payments', 'Net Income with High School Diploma Only And No Student Debt'],
        
  [2010,14083,14007,32784],
  [2011,15913,14898,33768],
  [2012,17849,15820,34781],
  [2013,19900,16775,35824],
  [2014,22074,17763,36899],
  [2015,24265,18781,38006],
  [2016,26706,19843,39146],
  [2017,29303,20944,40320],
  [2018,32067,22086,41530],
  [2019,35013,23273,42776],
  [2020,37981,24496,44059]

      
        ]);
      
        // Create and draw the visualization.
        var options= {  title: "Medical Billing and Coding",
                        curveType: "function",
                        colors: ['#3366CC', '#dc3912', 'green'],
                        width: 450, height: 350,
                       vAxis: {viewWindow: {min: 13000, max: 48000}},
                       hAxis: {slantedText: true, ticks: [2012]},
                       legend: {position: "none"}
                      };
                       
                 
          
      var chart= new google.visualization.LineChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
    

​