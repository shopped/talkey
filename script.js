var canvas1 = document.getElementById("frequency");
var canvas2 = document.getElementById("timeline");
var data1 = {
        labels: ["Who is the current actor?", "Who directed this film?", "What song is this?"],
        datasets: [{
            label: 'Popularity',
            data: [12, 9, 6, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
};
var options1 = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };
var options2 = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };
var data2 = {
	labels: [":30", "1:00", "1:30", "2:00", "2:30", "3:00"],
        datasets: [{
            label: '# of Questions',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
var frequencyChart = new Chart(canvas1, {
	type: 'horizontalBar',
	data: data1,
	options: options1
});

var timelineChart = new Chart(canvas2, {
	type:'line',
	data: data2,
	options: options2
});
