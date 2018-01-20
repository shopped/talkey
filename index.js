const express = require('express')
const app = express()
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('static'))

app.get('/', function(req, res) {
        res.sendFile(__dirname + "/static/" + "index.html");
})

app.post('/', function(req, res) {
        var product = JSON.stringify(req.body.parameters.products[0]);
        console.log("product");
        var unfound = "I can't answer that. Try asking again later.";
        var speech = unfound;

        fs.readFile('metadata.json', (err, data) => {
        	if (err) throw err;
        	let metadata = JSON.parse(data);
        	var hasResponse = false;
        	metadata.forEach(function(item) {
        		if (item.intent === product) {
        			hasResponse = true;
        			speech = item.answer;
        		}
        	})
        	if (!hasResponse) {
        		fs.readFile('unanswered.json', function(err, data) {
        			if (err) throw err;
        			var json = JSON.parse(data);
        			console.log(data);
        		})
        	}
        	// send response
	        var sweetdata = JSON.stringify({"speech": speech, "data": speech});
	        res.setHeader('Content-Type', 'application/json');
	        res.send(sweetdata);
        });


        // console.log("Request body: " + JSON.stringify(req.body));
})

const port = 3000;
app.listen(port, () => console.log("Listening on %s", port))
