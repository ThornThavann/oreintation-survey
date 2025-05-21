import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SurveyResult({ studentId }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Replace this with actual API to get result by studentId
    axios.get(`http://localhost:3001/api/survey/result/${studentId}`)
      .then((res) => {
        setResults(res.data.results); // expected: [{ skill: "Communication", totalRating: 12 }]
      });
  }, [studentId]);

  return (
    <div className="max-w-4xl mx-auto mt-3 p-6 bg-white rounded shadow space-y-8">
      <div>
        <h2>Result Student</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-[#E37F0D] text-white">
              <tr>
                <th className="border px-4 py-2 text-left w-[5%]">No</th>
                <th className="border px-4 py-2 text-left w-[75%]">Skill</th>
                <th className="border px-4 py-2 text-center w-[15%]">Total Rating</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{res.skill}</td>
                  <td className="border px-4 py-2 text-center">{res.totalRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
