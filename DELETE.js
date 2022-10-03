const express = require('express');
const app = express();

const courses = [
  { id: 1, courseName: "Node" },
  { id: 2, courseName: "React" },
  { id: 3, courseName: "Javascript" },
];

app.delete('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id))
	if (!course) return res.status(404).send('The course with the given ID was not found. Please enter the correct Id!')

	const index = courses.indexOf(course)
	courses.splice(index, 1)

	res.send(courses);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`))