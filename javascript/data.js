var dat;
var av_data=[],av_label = [];
fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "21c81af395msh576535b9213bbe7p199063jsn76a07b108ba6"
	}
})
.then(response => response.json())
.then(data => {
 dat = data.response;

 dat.forEach(a =>
 {
 	if(a.cases.active > 2000 && a.country != "World" && a.country != "All")
 	{
	 	av_label.push(a.country);
	 	av_data.push(a.cases.active);
 	}
 })

 console.log(av_data.length);
 console.log(av_data);
 console.log(av_label);
 console.log(dat);
 chartIt();
})
.catch(err => {
	console.log(err);
});

async function chartIt(){
document.getElementById("status").innerHTML = " ";
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: av_label,
        datasets: [{
            label: '# of Cases',
            data: av_data,
            backgroundColor: [
                'rgba(86, 80, 146, 0.2)',
				'rgba(58, 218, 84, 0.2)',
				'rgba(162, 218, 22, 0.2)',
				'rgba(143, 88, 249, 0.2)',
				'rgba(133, 138, 213, 0.2)',
				'rgba(188, 108, 65, 0.2)',
				'rgba(166, 76, 147, 0.2)',
				'rgba(171, 41, 123, 0.2)',
				'rgba(12, 71, 6, 0.2)',
				'rgba(27, 42, 122, 0.2)',
				'rgba(155, 162, 169, 0.2)',
				'rgba(252, 87, 91, 0.2)',
				'rgba(45, 28, 104, 0.2)',
				'rgba(35, 147, 18, 0.2)',
				'rgba(86, 125, 209, 0.2)',
				'rgba(201, 201, 250, 0.2)',
				'rgba(72, 44, 44, 0.2)',
				'rgba(62, 195, 232, 0.2)',
				'rgba(89, 160, 39, 0.2)',
				'rgba(217, 19, 55, 0.2)'
            ],
            borderColor: [
                'rgba(86, 80, 146, 1)',
				'rgba(58, 218, 84, 1)',
				'rgba(162, 218, 22, 1)',
				'rgba(143, 88, 249, 1)',
				'rgba(133, 138, 213, 1)',
				'rgba(188, 108, 65, 1)',
				'rgba(166, 76, 147, 1)',
				'rgba(171, 41, 123, 1)',
				'rgba(12, 71, 6, 1)',
				'rgba(27, 42, 122, 1)',
				'rgba(155, 162, 169, 1)',
				'rgba(252, 87, 91, 1)',
				'rgba(45, 28, 104, 1)',
				'rgba(35, 147, 18, 1)',
				'rgba(86, 125, 209, 1)',
				'rgba(201, 201, 250, 1)',
				'rgba(72, 44, 44, 1)',
				'rgba(62, 195, 232, 1)',
				'rgba(89, 160, 39, 1)',
				'rgba(217, 19, 55, 1)'
            ],
            borderWidth: 1
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

//console.log(dat);