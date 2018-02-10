




const CHART = document.getElementById("lineChart");
 console.log(CHART);
let lineChart = new Chart(CHART, {
	type: 'line',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fill: false,
	            lineTension: 0.1,
	            backgroundColor: "rgba(75,192,192,0.4)",
	            borderColor: "rgba(75,192,192,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "rgba(75,192,192,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "rgba(75,192,192,1)",
	            pointHoverBorderColor: "rgba(220,220,220,1)",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 90, 75],
	        },
	        {
	            label: "My Second dataset",
	            fill: true,
	            lineTension: 0.1,
	            backgroundColor: "rgba(75,75,192,0.4)",
	            borderColor: "rgba(75,72,192,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "rgba(75,72,192,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "rgba(75,72,192,1)",
	            pointHoverBorderColor: "rgba(220,220,220,1)",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: [100, 20, 60, 20, 80, 55, 90, 60, 30, 50, 45, 75],
	        }
	    ]
    },
    options: {
    	// showLines: false,
    	scales: {
    		yAxes: [{
    			ticks: {
    				// reverse: true,
    				beginAtZero: true
    			}
    		}]
    	}
    }
});



















