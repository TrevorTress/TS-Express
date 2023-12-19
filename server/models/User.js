const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const { Schema, model } = mongoose;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, 'Must match an email address!'],
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
});

const User = model('User', userSchema);

module.exports = User;
