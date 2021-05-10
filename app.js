const express = require('express'),
	dotenv = require('dotenv'),
	app = express()

dotenv.config()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/videos', (req, res) => {
	res.render('videos')
})

app.get('/blogs', (req, res) => {
	res.render('blogs')
})

app.get('sitemap.xml', (req, res) => {
	res.sendFile('sitemap.xml', { root: __dirname })
})

app.listen(process.env.PORT, () => {
	console.log('Connected')
})
