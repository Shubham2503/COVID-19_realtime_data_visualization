function fetch_for(){
    document.getElementById("status_").innerHTML = "Wait";
    var canvas = document.getElementById("Chart");
        var ctx = document.getElementById("Chart").getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);


    let x = document.getElementById("site-search").value;
    var d;
    console.log(x);
    var av_case=[],av_time = [],total_case = [],recovered = [],deaths = [];
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
            deaths.push(a.deaths.total);
     	}
     	
     })

     av_case.reverse();
     av_time.reverse();
     total_case.reverse();
     recovered.reverse();
     deaths.reverse();

     console.log(av_case);
     console.log(av_time);
     console.log(d);
     chart();
    })
    .catch(err => {
    	console.log(err);
    });

    function chart(){

        document.getElementById("status_").innerHTML = " ";
        var ctx = document.getElementById("Chart").getContext("2d");
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Active Cases of ' + x,
                    data: av_case,
                    backgroundColor: 'rgba(171, 41, 123, 0.2)',
                    borderColor: 'rgba(171, 41, 123, 1)',
                    fill: false
                },{
                    label: 'Total Cases',
                    data: total_case,
                    type: 'line',
                    backgroundColor: 'rgba(143, 88, 249, 0.2)',
                    borderColor: 'rgba(143, 88, 249, 1)',
                    fill: false
                },{
                    label: 'Recovered',
                    data: recovered,
                    type: 'line',
                    backgroundColor: 'rgba(162, 218, 22, 0.2)',
                    borderColor: 'rgba(162, 218, 22, 1)',
                    fill: false
                },{
                    label: 'Deaths',
                    data: deaths,
                    type: 'line',
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    fill: false
                }],
                labels: av_time,

            }
        });
    }
}