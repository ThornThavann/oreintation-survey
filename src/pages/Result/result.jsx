import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SurveyResultPage() {
  const { studentId } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    axios
      .get(`http://localhost:3000/api/student-results/${studentId}`)
      .then((res) => {
        console.log("Survey result fetched:", res.data);
        setResults(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch survey result:", err);
        setResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [studentId]);

  if (!studentId) return <p className="text-center mt-10">No student ID provided.</p>;
  if (loading) return <p className="text-center mt-10">Loading survey results...</p>;
  if (results.length === 0) return <p className="text-center mt-10">No results found for this student.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded shadow p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
          Survey Results
        </h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-[#E37F0D] text-white">
              <tr>
                <th className="border px-2 sm:px-4 py-2 w-[5%]">No</th>
                <th className="border px-2 sm:px-4 py-2 w-[75%] text-left">Skill</th>
                <th className="border px-2 sm:px-4 py-2 w-[20%] text-center">Total Rating</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="border px-2 sm:px-4 py-2 text-center">{idx + 1}</td>
                  <td className="border px-2 sm:px-4 py-2">{item.skill_name || "N/A"}</td>
                  <td className="border px-2 sm:px-4 py-2 text-center">{item.total_rating ?? "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
