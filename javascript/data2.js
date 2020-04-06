function fetch_for()
{
    document.getElementById("status_").innerHTML = "Wait";

    let x = document.getElementById("site-search").value;
    var d;
    var av_case=[],av_time = [],total_case = [],recovered = [];
    console.log(x);
    fetch("https://covid-193.p.rapidapi.com/history?country=" + x, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "covid-193.p.rapidapi.com",
    		"x-rapidapi-key": "21c81af395msh576535b9213bbe7p199063jsn76a07b108ba6",
            "Access-Control-Allow-Origin" : "*"
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
            total_case.push(a.cases.total);
            recovered.push(a.cases.recovered);
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
                    label: '# of Cases in ' + x,
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
                        },
                        stacked: true
                    }]
                }
            }
        });
    }
}