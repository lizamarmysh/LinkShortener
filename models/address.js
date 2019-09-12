const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new mongoose.Schema({
	original_url:{
		type: String,
		reqired: true,
	},
	short_url: {
		type: String,
		reqired: true,
	}
}, {timestamps: true});

mongoose.model('address', addressSchema);