
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Net Income With 10-year Repayment', 'Net Income with Minimum Payments', 'Net Income with High School Diploma Only And No Student Debt'],
        ['2010', 19745,19682,32784],
        ['2011', 21670,20826,33768],
        ['2012', 23700,22020,34781],
        ['2013', 25842,23266,35824],
        ['2014',28104,24568,36899],
        ['2015',30385,25909,38006],
        ['2016',32906,27334,39146],
        ['2017',35576,28828,40320],
        ['2018',38406,30398,41530],
        ['2019',41410,32048,42776],
        ['2020',44436,33747,44059]
      
        ]);
      
        // Create and draw the visualization.
        var options= {  title: "Criminal Justice",
                        curveType: "function",
                        colors: ['#3366CC', '#dc3912', 'green'],
                        width: 450, height: 350,
                       vAxis: {viewWindow: {min: 15000, max: 48000}},
                       hAxis: {slantedText: true, ticks: [2012]},
                       legend: {position: "none"}
                      };
                       
                 
          
      var chart= new google.visualization.LineChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
    

​