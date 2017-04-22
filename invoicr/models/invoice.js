const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
		customer_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Customer'
		},
		service: {
			type: String,
			required: true
		},
		price: {
			type: String,
		},
		due: {
			type: String,
		},
		status: {
			type: String,
		},
		createdAt:{
			type: Date,
			default:Date.now
		},
});

const Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

//GET all invoices
module.exports.getInvoices = (callback,limit) => {
	Invoice.find(callback).limit(limit).sort([['createdAt', 'descending']]);
}
//Get one invoice
module.exports.getInvoiceById = (id,callback) => {
	Invoice.findbyId(id,callback)
}

module.exports.addInvoice = (invoice,callback) => {
	let add = {
		customer: invoice.customer_id,
		service: invoice.service,
		price: invoice.price,
		due: invoice.due,
		status: invoice.status
	}
	Invoice.create(add,callback);
}

module.exports.updateInvoice = (id, invoice, options, callback) => {
	let query = {_id: id};
	let update = {
		service: invoice.service,
		price: invoice.price,
		due: invoice.due,
		status: invoice.status
	}
	Invoice.findbyId(query, update, options,callback);
}