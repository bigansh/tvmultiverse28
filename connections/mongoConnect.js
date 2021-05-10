const mongoose = require('mongoose'),
	dotenv = require('dotenv')

dotenv.config()

const connect = mongoose
	.connect(process.env.DATABASEURL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(function () {
		console.log('Connected to DB')
	})
	.catch(function (err) {
		console.log('ERROR:', err.message)
	})

module.exports = connect
