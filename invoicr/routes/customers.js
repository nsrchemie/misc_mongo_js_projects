const express = require('express');
const router = express.Router();

let Customer = require('../models/customer.js');
let Invoice = require('../models/invoice.js');

router.get('/', (req,res) => {
	Customer.getCustomers((err,customers) => {
		if(err) {
			res.send(err);
		}
			res.json(customers);
	});
});

router.get('/:id', (req,res) => {
	Customer.getCustomerById(req.params.id, (err,customer) => {
		if(err) {
			res.send(err);
		}
			res.json(customer);
	});
});

//Add customer POST
router.post('/', (req,res) => {
	let customer = req.body;
	Customer.addCustomer(customer, (err,customer) => {
		if(err) {
			res.send(err);
		}
			res.json(customer);
	});
});

//Update Customer
router.put('/:id', (req,res) => {
	let id = req.params.id;
	let customer = req.body;
	Customer.updateCustomer(id, customer, {}, (err,customer) => {
		if(err) {
			res.send(err);
		}
			res.json(customer);
	});
});
module.exports = router;
