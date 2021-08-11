const express = require('express'),
	dotenv = require('dotenv').config(),
	methodOverride = require('method-override'),
	expressSanitizer = require('express-sanitizer'),
	app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(expressSanitizer())
app.use(methodOverride('_method'))

const mongoConnect = require('./connections/mongoConnect')
const blogRoute = require('./router/blogs')

mongoConnect

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/videos', (req, res) => {
	res.render('videos')
})

app.use('/blogs', blogRoute)

app.listen(process.env.PORT || 3000, () => {
	console.log('Connected')
})
