const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
	title: String,
	image: String,
	body: String,
	tag: String,
	created: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Blog', blogSchema)
