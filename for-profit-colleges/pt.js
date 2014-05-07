
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Net Income With 10-year Repayment', 'Net Income with Minimum Payments', 'Net Income with High School Diploma Only And No Student Debt'],
        
  
  [2010,10461,10403,32784],
  [2011,12214,11440,33768],
  [2012,14073,12536,34781],
  [2013,16047,13696,35824],
  [2014,18144,14926,36899],
  [2015,20255,16192,38006],
  [2016,22620,17579,39146],
  [2017,25142,19057,40320],
  [2018,27834,20635,41530],
  [2019,30710,22326,42776],
  [2020,33604,24065,44059]


        ]);
      
        // Create and draw the visualization.
        var options= {  title: "Pharmacy Technician",
                        curveType: "function",
                        colors: ['#3366CC', '#dc3912', 'green'],
                        width: 450, height: 350,
                       vAxis: {viewWindow: {min: 9000, max: 48000}},
                       hAxis: {slantedText: true, ticks: [2012]},
                       legend: {position: "none"}
                      };
                       
                 
          
      var chart= new google.visualization.LineChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
    

​