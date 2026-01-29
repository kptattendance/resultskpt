"use client";

import { useState, useRef } from "react";
import Swal from "sweetalert2";
import api from "../lib/axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function WaitMessagePage() {
  const [regNo, setRegNo] = useState("");
  const [resultData, setResultData] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const pdfRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!regNo.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Register Number Required",
        text: "Please enter your Register Number",
        confirmButtonColor: "#1f2937",
      });
      return;
    }

    try {
      Swal.fire({
        title: "Fetching Result",
        text: "Please wait...",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading(),
      });

      const response = await api.get(`/results/${regNo}`);

      Swal.close();

      setResultData(response.data);
      setShowPdf(true); // 🔥 OPEN PDF MODAL DIRECTLY
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Result Not Found",
        text:
          error.response?.status === 404
            ? "Invalid Register Number"
            : "Server error. Please try again later.",
        confirmButtonColor: "#1f2937",
      });
    }
  };

  const generatePDF = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${resultData.student.register_no}_Result.pdf`);
  };

  return (
    <>
      <div>
        <div className="w-full max-w-xl bg-white text-black shadow-md p-1 mx-auto  text-center">
          <h1 className="text-2xl font-bold mb-4 text-indigo-900">
            📢 Result Announcement
          </h1>

          <p className="text-lg font-semibold mb-3">
            Results will be displayed on
          </p>

          <p className="text-xl font-bold text-red-700 mb-6">
            🗓️ 29-01-2026 at ⏰ 3:00 PM
          </p>

          <p className="text-base text-gray-700">
            Please wait patiently. 🌱 Hard work always pays off — and success is
            loading!
          </p>

          <p className="mt-6 text-sm font-semibold text-green-700">
            💐 All the best… and congratulations in advance!
          </p>
        </div>
      </div>

      {/* 🔥 PDF MODAL */}
      {showPdf && resultData && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white text-black w-[90%] max-w-4xl rounded-lg shadow-xl relative">
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
              <div
                ref={pdfRef}
                className="text-[13px] leading-relaxed text-gray-900"
              >
                {/* HEADER */}
                <div className="text-center mb-6">
                  <h2 className="text-lg font-bold text-red-700 tracking-wide">
                    KARNATAKA (GOVT.) POLYTECHNIC, MANGALURU
                  </h2>
                  <p className="text-xs italic text-gray-700">
                    (Department of Collegiate and Technical Education,
                    Government of Karnataka)
                  </p>
                  <p className="mt-2 text-sm font-semibold underline">
                    PROVISIONAL EXAMINATION RESULT
                  </p>
                </div>

                {/* STUDENT INFO */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-3 mb-6">
                  <div>
                    <span className="font-semibold">Programme:</span>{" "}
                    {resultData.student.programme}
                  </div>
                  <div>
                    <span className="font-semibold">Register No:</span>{" "}
                    {resultData.student.register_no}
                  </div>
                  <div>
                    <span className="font-semibold">Name:</span>{" "}
                    {resultData.student.name}
                  </div>
                  <div>
                    <span className="font-semibold">Date of Result:</span>{" "}
                    {resultData.student.result_date}
                  </div>
                </div>

                {/* SUBJECT LIST HEADER */}
                <div className="grid grid-cols-12 font-semibold text-xs uppercase text-gray-600 mb-2">
                  <div className="col-span-2">Code</div>
                  <div className="col-span-6">Course Title</div>
                  <div className="col-span-2 text-center">Credits</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>

                {/* SUBJECT LIST */}
                <div className="space-y-2">
                  {resultData.subjects.map((s, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-12 items-start py-2 border-b border-gray-200 last:border-none"
                    >
                      <div className="col-span-2 font-medium">
                        {s.subject_code}
                      </div>
                      <div className="col-span-6">{s.subject_name}</div>
                      <div className="col-span-2 text-center">{s.credits}</div>
                      <div className="col-span-2 text-center font-medium">
                        {s.total_marks}
                      </div>
                    </div>
                  ))}
                </div>

                {/* FOOT NOTE */}
                <div className="mt-8 text-xs text-gray-600">
                  <p>
                    Note: This result is provisional and subject to verification
                    with original records of the institution.
                  </p>
                </div>
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
    </>
  );
}
