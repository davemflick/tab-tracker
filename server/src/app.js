const bodyParser = require('body-parser');
const express = require('express');
const morgan = require("morgan");
const cors = require('cors');

//Build app server
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res)=>{
	console.log(req.params);
	res.send({
		message: 'Your user was registered. Have fun.',
		request: req.params
	})
});

app.listen(process.env.PORT || 8081, ()=>console.log('Connected to express server'));