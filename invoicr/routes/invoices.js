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

router.get('/:id', (req,res) => {
	Invoice.getInvoiceById(req.params.id, (err,invoice) => {
		if(err) {
			res.send(err);
		}
			res.json(invoice);
	});
});

module.exports = router;