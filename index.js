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

var saved_questions = [];
app.post('/', function(req, res) {
        console.log(req.body);
        var product = JSON.stringify(req.body.result.parameters.products);
        var unfound = "I can't answer that. Try asking again later.";
        var speech = unfound;

        fs.readFile('static/metadata.json', function(err, data) {
                if (err) throw err;
                var metadata = JSON.parse(data)
        	var hasResponse = false;
        	metadata.forEach(function(item) {
                        console.log(item.intent);
                        console.log(product);
                        console.log(JSON.stringify(item.intent) == product);
        		if (JSON.stringify(item.intent) == product) {
        			hasResponse = true;
        			speech = item.answer;
        		}
        	})
        	if (!hasResponse) {
        		fs.readFile(__dirname + '/' + 'static/unanswered.json', 'utf8', function(err, data) {
                if (err) throw err;
                new_data = data.substring(0, data.length - 3);
                new_data += '}, {\n';
                new_data += '"name": ' + '"What is this product: ' + product.substring(1, product.length-1) + '?"' + ',\n';
                new_data += '"time": ":1:00"\n';
                new_data += '}];';
                fs.writeFile(__dirname + '/' + 'static/unanswered.json', new_data, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                }); 
        });
        	}
        	// send response
	        var sweetdata = JSON.stringify({"speech": speech, "data": speech});
	        res.setHeader('Content-Type', 'application/json');
	        res.send(sweetdata);
        });

        // console.log("Request body: " + JSON.stringify(req.body));
})

const port = 3000;
var new_data = "";
app.listen(port, () => {
	console.log("Listening on %s", port)
})
