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

module.exports.getCustomers = (callback,limit) => {
	Customer.find(callback).limit(limit).sort([['first_name', 'ascending']]);
}