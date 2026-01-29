"use client";

import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResultPage() {
  const [data, setData] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const pdfRef = useRef();

  useEffect(() => {
    const stored = sessionStorage.getItem("resultData");
    if (stored) {
      setData(JSON.parse(stored));
    }

    // 🔥 AUTO OPEN PDF MODAL
    const shouldOpenPdf = sessionStorage.getItem("openPdf");
    if (shouldOpenPdf === "true") {
      setShowPdf(true);
      sessionStorage.removeItem("openPdf");
    }
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  const { student, subjects } = data;

  const generatePDF = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${student.register_no}_Result.pdf`);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-8 shadow-xl">
      {/* NORMAL VIEW (BACKGROUND CONTENT) */}
      <div ref={pdfRef}>
        <table className="w-full mb-6 border text-sm">
          <tbody>
            <tr>
              <td>Programme</td>
              <td>{student.programme}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{student.name}</td>
            </tr>
            <tr>
              <td>Register Number</td>
              <td>{student.register_no}</td>
            </tr>
            <tr>
              <td>Date of Result</td>
              <td>{student.result_date}</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th>Code</th>
              <th>Title</th>
              <th>Credits</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s, i) => (
              <tr key={i} className="border-t text-center">
                <td>{s.subject_code}</td>
                <td className="text-left px-2">{s.subject_name}</td>
                <td>{s.credits}</td>
                <td>{s.total_marks}</td>
                <td>{s.result_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 PDF MODAL (AUTO OPEN) */}
      {showPdf && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-4xl rounded-lg shadow-xl relative">
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-3 border-b">
              <h2 className="font-semibold">Result PDF Preview</h2>
              <button
                onClick={() => setShowPdf(false)}
                className="text-2xl font-bold hover:text-red-600"
              >
                ×
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 max-h-[75vh] overflow-auto">
              <div ref={pdfRef}>
                <table className="w-full mb-6 border text-sm">
                  <tbody>
                    <tr>
                      <td>Programme</td>
                      <td>{student.programme}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{student.name}</td>
                    </tr>
                    <tr>
                      <td>Register Number</td>
                      <td>{student.register_no}</td>
                    </tr>
                    <tr>
                      <td>Date of Result</td>
                      <td>{student.result_date}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full border text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th>Code</th>
                      <th>Title</th>
                      <th>Credits</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((s, i) => (
                      <tr key={i} className="border-t text-center">
                        <td>{s.subject_code}</td>
                        <td className="text-left px-2">{s.subject_name}</td>
                        <td>{s.credits}</td>
                        <td>{s.total_marks}</td>
                        <td>{s.result_status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-4 px-6 py-3 border-t">
              <button
                onClick={() => setShowPdf(false)}
                className="px-4 py-2 border rounded"
              >
                Close
              </button>
              <button
                onClick={generatePDF}
                className="px-4 py-2 bg-indigo-900 text-white rounded"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
