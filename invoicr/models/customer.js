const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
		first_name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		},
		company: {
			type: String,
		},
		logo_url: {
			type: String,
		},
		email: {
			type: String,
			required: true
		},
		phone: {
			type: String,
		},
		address: {
			street: String,
			city: String,
			state: String,
			zip: String
		},
		createdAt:{
			type: Date,
			default:Date.now
		},
});

const Customer = module.exports = mongoose.model('Customer', customerSchema);
//GET all customers
module.exports.getCustomers = (callback,limit) => {
	Customer.find(callback).limit(limit).sort([['first_name', 'ascending']]);
}
//Get one customer
module.exports.getCustomerById = (id,callback) => {
	Customer.findById(id,callback)
}

//Add Customer POST
module.exports.addCustomer = (customer, callback) => {
	let add = {
		first_name: customer.first_name,
		last_name: customer.last_name,
		company: customer.company,
		logo_url: customer.logo_url,
		email: customer.email,
		phone: customer.phone,
		address: {
			street: customer.address.street,
			city: customer.address.city,
			state: customer.address.state,
			zip: customer.address.zip
		}
	}
	Customer.create(add,callback);
}

module.exports.updateCustomer = (id, customer, options, callback) => {
	let query = {_id: id};
	let update = {
		first_name: customer.first_name,
		last_name: customer.last_name,
		company: customer.company,
		logo_url: customer.logo_url,
		email: customer.email,
		phone: customer.phone,
		address: {
			street: customer.address.street,
			city: customer.address.city,
			state: customer.address.state,
			zip: customer.address.zip
		}
	}
	Customer.findOneAndUpdate(query, update, options, callback);
}