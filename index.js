const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const ejsMate = require('ejs-mate')

// Configure app to use EJS as view engine
app.set('view engine', 'ejs')

// Configure app to use 'views' folder as default for templates
app.set('views', path.join(__dirname, 'views'))

// Configure app to use EJS boilerplates
app.engine('ejs', ejsMate)

// Configure app to use public directory (css, ejs...)
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/signin', (req, res) => {
    res.render('signin')
})

// App listening
app.listen(3000, () => {
    console.log('Listening on port 3000...')
})