const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/invoicr');
const db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.send('Please use /api/customers or /api/invoices');
});

app.listen(3000);
console.log('Listening on port 3000');
