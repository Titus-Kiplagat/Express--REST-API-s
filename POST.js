const express = require("express");
const Joi = require("joi");
const { validateCourse } = require("./validation");

const app = express();

//Middleware
app.use(express.json());

const courses = [
  { id: 1, courseName: "Node" },
  { id: 2, courseName: "React" },
  { id: 3, courseName: "Javascript" },
];

app.post('/api/courses', (req, res) => {
	//input validation
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	
	const course = {
		id: courses.length + 1,
		courseName: req.body.courseName
	}
	courses.push(course)

	res.send(courses);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`));
