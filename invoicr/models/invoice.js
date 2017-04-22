const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
		customer: {
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