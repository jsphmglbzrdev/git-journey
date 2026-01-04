import Student from '../models/Student.js';

// CREATE STUDENT
export const createStudent = async (req, res) => {
	try {
		const { name, age, email } = req.body;

		if (!name || !age || !email) {
			return res.status(400).json({ message: 'All fields are required' });
		}

		const newStudent = new Student({ name, age, email });
		await newStudent.save();

		// Return immediately after sending response
		return res.status(201).json({
			message: 'Student created successfully',
			student: newStudent
		});
	} catch (err) {
		// Return immediately after sending error response
		return res.status(500).json({
			message: 'Server Error',
			error: err.message
		});
	}
}

// GET ALL STUDENTS
export const getStudents = async (req, res) => {
	try {
		const students = await Student.find();
		return res.status(200).json({ students });
	} catch (err) {
		return res.status(500).json({
			message: 'Server Error',
			error: err.message
		});
	}
}
