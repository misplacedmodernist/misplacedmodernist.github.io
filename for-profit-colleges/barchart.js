
    
      google.load('visualization', '1', {packages: ['corechart']});
   
   
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
         
          ['Type', 'Default Rate', {role: 'style'}],
          ['90/10 Violaters',  24.5, '#dc3912'],
          ['All For-Profit',  13.6, '#ff9900'],
          ['National Average',  9, '#3366CC'],
          
        ]);
      
        var options= {title:"2-Year Student Loan Default Rates",
                  width:700, height:400,
                  hAxis: {title: "Percent of Students in Default"},
                  legend: {position: "none"},

                     };
        
        // Create and draw the visualization.
        var chart = new google.visualization.BarChart(document.getElementById('visualization'));
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);
  