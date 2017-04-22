const express = require('express');
const router = express.Router();

let Customer = require('../models/customer.js');
let Invoice = require('../models/invoice.js');

router.get('/', (req,res) => {
	Invoice.getInvoices((err,invoices) => {
		if(err) {
			res.send(err);
		}
			res.json(invoices);
	});
});

module.exports = router;