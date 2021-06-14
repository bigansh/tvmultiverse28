const express = require('express'),
	dotenv = require('dotenv'),
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
dotenv.config()

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/videos', (req, res) => {
	res.render('videos')
})

app.use('/blogs', blogRoute)

app.get('sitemap.xml', (req, res) => {
	res.sendFile('sitemap.xml', { root: __dirname })
})

app.get('robots.txt', (req, res) => {
	res.sendFile('robots.txt', { root: __dirname })
})

app.listen(process.env.PORT, () => {
	console.log('Connected')
})
