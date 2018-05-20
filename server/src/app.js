const bodyParser = require('body-parser');
const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const config = require('./config/config');
const {sequelize} = require('./models');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app); // pass in route to routes.js


sequelize.sync()
	.then(()=>{
		app.listen(config.port, ()=>console.log('Connected to express server'));
	})

