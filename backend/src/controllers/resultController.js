import db from "../config/db.js";

export const getStudentResult = async (req, res) => {
  try {
    const { regNo } = req.params;

    /* 1️⃣ STUDENT DETAILS */
    const [studentRows] = await db.query(
      `
      SELECT 
        id,
        reg_no,
        name,
        department,
        semester,
        DATE(created_at) AS result_date
      FROM students
      WHERE reg_no = ?
      `,
      [regNo],
    );

    if (studentRows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    const student = studentRows[0];

    /* 2️⃣ SUBJECT + MARKS */
    const [subjectRows] = await db.query(
      `
      SELECT
        s.subject_code,
        s.subject_name,
        s.credits,
        m.internal_marks,
        m.external_marks,
        m.practical_marks,
        m.total_marks,
        m.result_status
      FROM marks m
      JOIN subjects s ON m.subject_id = s.id
      WHERE m.student_id = ?
      `,
      [student.id],
    );

    /* 3️⃣ RESPONSE */
    res.json({
      student: {
        register_no: student.reg_no,
        name: student.name,
        programme: student.department,
        semester: student.semester,
        result_date: student.result_date,
      },
      subjects: subjectRows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
