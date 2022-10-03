const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("hello world")
})

app.get('/api/courses', (req, res) => {
	res.send([1, 2, 3])
})

//route parameters
app.get('/api/course/:id', (req, res) => {
	res.send(req.params.id)
})

//query string parameters
app.get('/api/course/:month/:year', (req, res) => {
	res.send(req.query)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`lisetening on port ${PORT}....`))