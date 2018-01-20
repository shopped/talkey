var question_canvas = document.getElementById("frequency");
var question_frequency_data = {
        labels: ["Who is the current actor?", "Who directed this film?", "What song is this?"],
        datasets: [{
            label: 'Popularity',
            data: [12, 9, 6, 0],
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
        }],
    };
var question_category_data = {
        labels: ["Products", "Production", "Crew", "Media"],
        datasets: [{
        label: 'Categories',
        data: [3, 6, 2, 8, 0],
        backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
            borderWidth:1
        }],
    };
var question_options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]

        }
    };
var question_chart = new Chart(question_canvas, {
	type: 'horizontalBar',
	data: JSON.parse(JSON.stringify(question_frequency_data)), //deep copy so I can manipulate without breaking animations
	options: question_options
    });

//Swapping out the charts
var toggled = false
var toggle = () => {
    //switch buttons
    prim = document.getElementById("primary");
    sec = document.getElementById("secondary");
    prim.setAttribute("onclick", "toggle()");
    sec.setAttribute("onclick", "");
    prim.className = "button-secondary";
    sec.className = "button-primary";
    prim.id = "secondary";
    sec.id = "primary";
    //switch data
    toggled ? updateData(question_chart, question_frequency_data) : updateData(question_chart, question_category_data);
    toggled = !toggled;
}
function updateData(chart, my_data) {
    chart.data.labels = my_data.labels;
    chart.data.datasets.forEach((dataset) => {
        dataset.label = my_data.datasets[0].label;
        dataset.data = my_data.datasets[0].data;
        dataset.backgroundColor = my_data.datasets[0].backgroundColor;
        dataset.borderColor = my_data.datasets[0].borderColor;
    });
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(my_data.data);
        dataset.backgroundColor.push(my_data.backgroundColor);
        dataset.borderColor.push(my_data.borderColor);
    });
    chart.update();
}
var timeline_options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };
var timeline_data = {
    labels: [":30", "1:00", "1:30", "2:00", "2:30", "3:00"],
        datasets: [{
            label: 'Sentiment',
            data: [5, -8, 2, 4, 1, -2],
            backgroundColor: [
                'rgba(0, 255, 0, 0.8)',
                'rgba(255, 0, 0, 0.8)',
                'rgba(0, 255, 0, 0.8)',
                'rgba(0, 255, 0, 0.8)',
                'rgba(0, 255, 0, 0.8)',
                'rgba(255, 0, 0, 0.8)'
            ],
            borderColor: [
                'rgba(0, 0, 255, 0.8)',
                'rgba(0, 0, 255, 0.8)',
                'rgba(0, 0, 255, 0.8)',
                'rgba(0, 0, 255, 0.8)',
                'rgba(0, 0, 255, 0.8)',
                'rgba(0, 0, 255, 0.8)'
            ],
            borderWidth: 1
        },
        {
            label: '# of Questions',
            type: 'line',
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
var timeline_canvas = document.getElementById("timeline");    
var timeline_chart = new Chart(timeline_canvas, {
	type:'bar',
	data: timeline_data,
	options: timeline_chart
    });