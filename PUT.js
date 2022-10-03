
const express = require("express");
const { validateCourse } = require("./validation");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, courseName: "Node" },
  { id: 2, courseName: "React" },
	{ id: 3, courseName: "Javascript" },
	{ id: 4, courseName: "Red"}
];


app.put("/api/courses/:id", (req, res) => {
  const course = courses.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!course)
    res.status(404).send("The course with the given ID was not found!");
	
	const {error} = validateCourse(req.body);
	if (error) res.status(400).send(error.details[0].message);

	course.courseName = req.body.courseName;
	res.send(course)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`));
