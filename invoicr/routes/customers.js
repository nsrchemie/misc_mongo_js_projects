const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	res.send('/customers route');
});
module.exports = router;
