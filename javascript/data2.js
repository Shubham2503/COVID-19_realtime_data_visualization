var d;
var av_case=[],av_time = [];
fetch("https://covid-193.p.rapidapi.com/history?country=USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "21c81af395msh576535b9213bbe7p199063jsn76a07b108ba6"
	}
})
.then(response => response.json())
.then(data => {
 d = data.response;

 d.forEach(a =>
 {
 	if(av_time[av_time.length - 1] != a.day)
 	{
	 	av_time.push(a.day);
	 	av_case.push(a.cases.active);
 	}
 	
 })

 av_case.reverse();
 av_time.reverse();

 console.log(av_case);
 console.log(av_time);
 console.log(d);
 chart();
})
.catch(err => {
	console.log(err);
});



async function chart(){
document.getElementById("status_").innerHTML = " ";
var ctx = document.getElementById("Chart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: av_time,
        datasets: [{
            label: '# of Cases in USA',
            data: av_case,
            backgroundColor:'rgba(143, 88, 249, 0.2)',
            borderColor:'rgba(143, 88, 249, 1)',
            borderWidth: 1,
            fill : false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}