import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SurveyResultPage({ studentId }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    axios
      .get(`http://localhost:3001/api/survey/result/${studentId}`)
      .then((res) => {
        console.log("Survey result fetched:", res.data);
        setResults(res.data.results || []);
      })
      .catch((err) => {
        console.error("Failed to fetch survey result:", err);
        setResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [studentId]);

  if (!studentId) return <p>No student ID provided.</p>;

  if (loading) return <p>Loading survey results...</p>;

  if (results.length === 0) return <p>No results found for this student.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Survey Result for Student ID: {studentId}</h1>

      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-[#E37F0D] text-white">
          <tr>
            <th className="border px-4 py-2 w-[5%]">No</th>
            <th className="border px-4 py-2 w-[75%] text-left">Skill</th>
            <th className="border px-4 py-2 w-[15%] text-center">Total Rating</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2 text-center">{idx + 1}</td>
              <td className="border px-4 py-2">{item.skill}</td>
              <td className="border px-4 py-2 text-center">{item.totalRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
