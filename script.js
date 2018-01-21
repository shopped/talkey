var question_canvas = document.getElementById("popular");
var question_popular_data = {
        labels: [],
        datasets: [{
            label: 'Popular Topics',
            data: [],
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
// Get three most popular labels
var get_popular_data = popular_data;
get_popular_data.sort(function(a, b) {
    return a.num < b.num;
})
question_popular_data.labels = [
    get_popular_data[0].name,
    get_popular_data[1].name,
    get_popular_data[2].name,
];
// Populate three popular topic numbers
question_popular_data.datasets[0].data = [
    get_popular_data[0].num,
    get_popular_data[1].num,
    get_popular_data[2].num,
];

var question_categories_data = {
        labels: [],
        datasets: [{
        label: 'Questions by Category',
        data: [],
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
// Get all categories
var get_categories_data = categories_data;
// get_categories_data.sort(function(a, b) {
//     return a.num < b.num;
// })
get_categories_data.forEach(function(category) {
    question_categories_data.labels.push(category.name)
    question_categories_data.datasets[0].data.push(category.num)
})
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
	data: JSON.parse(JSON.stringify(question_popular_data)), //deep copy so I can manipulate without breaking animations
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
    toggled ? updateData(question_chart, question_popular_data) : updateData(question_chart, question_categories_data);
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

// Unanswered questions logic
// unanswered.appendChild

var get_unanswered_data = unanswered_data;

unanswered_data.forEach(function(q) {
    var new_point = document.createElement("li");
    new_point.setAttribute("id", q.name);
    var mylist = document.getElementById("unanswered");
    mylist.appendChild(new_point);

    var question = document.createElement("span");
    new_point.appendChild(question);
    var node = document.createTextNode(q.name);
    question.appendChild(node);

    var myinput = document.createElement("span");
    new_point.appendChild(myinput);
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", q.name);
    myinput.append(inp);
    var node = document.createTextNode(q.name);
    inp.appendChild(node);

    var mysubmit = document.createElement("span");
    new_point.appendChild(mysubmit);
    var btn = document.createElement("button");
    btn.addEventListener("click", () => {
        console.log(document.getElementById(q.name));
        document.getElementById(q.name).style.display = "none";
    });
    mysubmit.appendChild(btn);
    btn.className = "button-primary";
    var node = document.createTextNode("answer");
    btn.appendChild(node);
});