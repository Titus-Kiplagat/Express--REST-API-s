const express = require("express");
const Joi = require("joi");

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
	const schema = Joi.object({
		courseName: Joi.string().min(5).required()
	})
	const result = schema.validate(req.body)
	console.log(result)
	if (result.error) {
		res.status(400).send(result.error.details[0].message)
	}
	// if (!req.body.courseName || req.body.name.length < 3) {
	// 	res.status(400).send('Course name required and should be minimum 3 characters')
	// }
	const course = {
		id: courses.length + 1,
		courseName: req.body.courseName
	}
	courses.push(course)

	res.send(courses);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`));
