# SE102 Assesment
http://json.parser.online.fr/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

function drawLineChart(sportNumber, team1, team2) {
	array1 = []
	array2 = []
	for (var i = 0; i < the2018Games.allMySports[sportNumber].allMyMatches.length; i++) {
		if (the2018Games.allMySports[sportNumber].allMyMatches[i].myTeamA.name == team1) {
			array1.push(the2018Games.allMySports[sportNumber].allMyMatches[i].scoreA)
		} else if (the2018Games.allMySports[sportNumber].allMyMatches[i].myTeamB.name == team2) {
			array2.push(the2018Games.allMySports[sportNumber].allMyMatches[i].scoreB)
		}
	}
	console.log(array1, array2)
	
	var data = google.visualization.arrayToDataTable([
	['Year', 'Sales', 'Expenses'],
          ['2004',  array1[0],      400],
          ['2005',  array1[1],      460],
          ['2006',  array1[2],       1120],
          ['2007',  array1[3],      540]
]);
    var options = {
		title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
	makeParagraph(document.body.childNodes[5], "", "curve_chart")
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
