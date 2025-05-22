
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button.js";
import { Link } from "react-router-dom";


export default function Survey() {
  const [student, setStudent] = useState({
    full_name: "",
    grade: "",
    gender: "male",
    school: "inside",
  });
  const [questions, setQuestions] = useState([]);
  const [ratings, setRatings] = useState({}); // { question_id: rating }

  // Fetch questions from API
  useEffect(() => {
    axios.get("http://localhost:3000/api/question/all")
      .then((res) => {
        setQuestions(res.data.questions);
      });
  }, []);

  // Handle student input
  const handleInput = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // Handle rating select
  const handleRating = (questionId, value) => {
    setRatings({
      ...ratings,
      [questionId]: Number(value),
    });
  };

  // Submit form
  const handleSubmit = async () => {
    const skillData = Object.entries(ratings).map(([question_id, rating]) => ({
      question_id: Number(question_id),
      rating,
    }));

    const payload = {
      student,
      skill: skillData,
    };

    try {
      const res = await axios.post("http://localhost:3000/api/survey/submit", payload);
      alert("Submit success!");
      // Optionally: redirect to result page with studentId
    } catch (err) {
      console.error(err);
      alert("Submit failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-8">

      <h2 className="text-2xl font-bold text-center">Information</h2>

      {/* Student Name */}
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Student Name</span>
          <input
            type="text"
            name="full_name"
            onChange={handleInput}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>
      </div>

      {/* Grade */}
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Grade</span>
          <input
            type="text"
            name="grade"
            onChange={handleInput}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>
      </div>

      {/* School */}
      <div>
        <h3 className="text-xl font-semibold mb-2">What school are you?</h3>
        <select
          name="school"
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="outside">Outside</option>
          <option value="inside">Inside</option>
        </select>
      </div>

      {/* Gender */}
      <div>
        <h3 className="text-xl font-semibold mb-2">What is your gender</h3>
        <select
          name="gender"
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

      </div>

      {/* Skill Questions Table */}
      <div>

        <h3 className="text-xl font-bold mb-4">Skill Questions</h3>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>

                <th className="border px-4 py-2 text-left">Question</th>
                {[1, 2, 3, 4].map((num) => (
                  <th key={num} className="border px-4 py-2 text-center">{num}</th>

                ))}
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="even:bg-gray-100">
                  <td className="border px-4 py-2">{q.text}</td>
                  {[1, 2, 3, 4].map((num) => (
                    <td key={num} className="border text-center">
                      <input
                        type="radio"
                        name={`q_${q.id}`}
                        value={num}
                        onChange={() => handleRating(q.id, num)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit */}
      <div className="text-center">

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          ដាក់បញ្ជូន
        </button>

      </div>
    </div>
  );
}
