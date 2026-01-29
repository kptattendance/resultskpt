import { poolPromise, sql } from "../config/db.js";

export const getStudentResult = async (req, res) => {
  try {
    const { regNo } = req.params;
    const pool = await poolPromise;

    /* 1️⃣ STUDENT DETAILS */
    const studentResult = await pool
      .request()
      .input("regNo", sql.VarChar, regNo).query(`
        SELECT 
          id,
          reg_no,
          name,
          department,
          semester,
          CAST(created_at AS DATE) AS result_date
        FROM students
        WHERE reg_no = @regNo
      `);

    if (studentResult.recordset.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    const student = studentResult.recordset[0];

    /* 2️⃣ SUBJECT + MARKS */
    const subjectResult = await pool
      .request()
      .input("studentId", sql.Int, student.id).query(`
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
        WHERE m.student_id = @studentId
      `);

    /* 3️⃣ RESPONSE */
    res.json({
      student: {
        register_no: student.reg_no,
        name: student.name,
        programme: student.department,
        semester: student.semester,
        result_date: student.result_date,
      },
      subjects: subjectResult.recordset,
    });
  } catch (error) {
    console.error("❌ getStudentResult error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
