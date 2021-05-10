const express = require('express'),
	router = express.Router()

const Blog = require('../models/blogSchema')

router.get('/', (req, res) => {
	res.render('blogs')
})

router.get('/new', (req, res) => {
	res.render('new-blog')
})

router.post('/', (req, res) => {
	req.body.blog.body = req.sanitize(req.body.blog.body)
	Blog.create(req.body.blog, function (err, newBlog) {
		if (err) res.render('new')
		else res.redirect('/blogs')
	})
})

router.get('/:category', (req, res) => {
	if (req.params.category === 'science') {
		Blog.find({ tag: 'Science' })
			.sort([['created', -1]])
			.exec(function (err, blogs) {
				if (err) res.redirect('/blogs')
				else
					res.render('show-blogs', {
						blogs: blogs,
						category: 'Science',
						urlCat: 'science',
						image:
							'https://image.freepik.com/free-vector/science-research-illustration_159144-89.jpg',
					})
			})
	}
	if (req.params.category === 'business') {
		Blog.find({ tag: 'Business' })
			.sort([['created', -1]])
			.exec(function (err, blogs) {
				if (err) res.redirect('/blogs')
				else
					res.render('show-blogs', {
						blogs: blogs,
						category: 'Business',
						urlCat: 'business',
						image:
							'https://image.freepik.com/free-vector/creative-business-strategy-idea-illustration-concept_1344-194.jpg',
					})
			})
	}
	if (req.params.category === 'technology') {
		Blog.find({ tag: 'Technology' })
			.sort([['created', -1]])
			.exec(function (err, blogs) {
				if (err) res.redirect('/blogs')
				else
					res.render('show-blogs', {
						blogs: blogs,
						category: 'Technology',
						urlCat: 'technology',
						image:
							'https://i.pinimg.com/736x/21/39/d7/2139d7dab403a5c8926fb2122c360daf.jpg',
					})
			})
	}
})

router.get('/:category/:id', (req, res) => {
	Blog.findById(req.params.id, function (err, foundBlog) {
		if (err) {
			res.redirect('/blogs')
		} else {
			res.render('view-blog', { blog: foundBlog })
		}
	})
})

router.get('/:category/:id/edit', (req, res) => {
	Blog.findById(req.params.id, function (err, foundBlog) {
		if (err) res.redirect('/blogs')
		else
			res.render('edit-blog', {
				blog: foundBlog,
				category: req.params.category,
			})
	})
})

router.put('/:category/:id/', (req, res) => {
	req.body.blog.body = req.sanitize(req.body.blog.body)
	Blog.findByIdAndUpdate(
		req.params.id,
		req.body.blog,
		function (err, foundBlog) {
			if (err) res.redirect('/blogs')
			else res.redirect('/blogs/' + req.params.category + '/' + req.params.id)
		}
	)
})

module.exports = router
