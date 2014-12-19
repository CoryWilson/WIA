//Load the google Vis library and the core cahrt package
//core contains bar, pie, line, etc
google.load('visualization','1',{packages:['corechart']});

//once libraries are loaded run function
google.setOnLoadCallback(drawChart);

function drawChart(){
  //create a data table using an array
  var data = google.visualization.arrayToDataTable([
      ['task','hours per day'],
      ['work',8],
      ['eat',2],
      ['commute',2],
      ['watch tv',2],
      ['sleep',7]
    ]);
    var options = {
      title: 'My Daily Activities',
      pieHole: 0.4,
      pieSliceText: 'label',
      pieStartAngle: 100,
      legend: {position: 'labeled'},
      tooltip: {trigger:'none'}
    };
    //create the chart variable and location where it goes
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    //draw the chart
    chart.draw(data,options);

};
