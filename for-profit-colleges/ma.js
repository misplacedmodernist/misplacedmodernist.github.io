function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Net Income With 10-year Repayment', 'Net Income with Minimum Payments', 'Net Income with High School Diploma Only And No Student Debt'],
        
  
  ['2010',11105,11030,32784],
  ['2011',12844,11832,33768],
  ['2012',14686,12663,34781],
  ['2013',16640,13523,35824],
  ['2014',18714,14414,36899],
  ['2015',20801,15332,38006],
  ['2016',23135,16290,39146],
  ['2017',25621,17285,40320],
  ['2018',28271,18319,41530],
  ['2019',31099,19394,42776],
  ['2020',33944,20500,44059]


      
        ]);
      
        // Create and draw the visualization.
        var options= {  title: "Net Income with a Certificate in Medical Assisting vs Net Income with a High School Diploma",
                        curveType: "function",
                        colors: ['#3366CC', '#dc3912', 'green'],
                        width: 750, height: 500,
                        vAxis: {format: '$##,###', viewWindow: {min: 10000, max: 46000}},
                       hAxis: {slantedText: true},
                       legend: {position: "right"}
                      };
                       
                 
          
      var chart= new google.visualization.LineChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
    

​