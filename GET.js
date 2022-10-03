const express = require('express');
const app = express();

const courses = [
	{id: 1, course: 'Node'},
	{id: 2, course: 'React'},
	{id: 3, course: 'Javascript'}
]

app.get('/api/courses', (req, res) => {
	res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(course => course.id === parseInt(req.params.id))
	if (!course) return res.status(404).send('The course with the given ID was not found!')
	res.send(course);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`));