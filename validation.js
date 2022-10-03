const Joi = require('joi');

function validateCourse(course) {
	const schema = Joi.object({
		courseName: Joi.string().min(5).required()
	})
	return schema.validate(course);
}

exports.validateCourse = validateCourse