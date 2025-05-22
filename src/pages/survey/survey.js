import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // <-- import useNavigate

export default function SkillsWithQuestionsAndRatings() {
  const [skills, setSkills] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [ratings, setRatings] = useState({});
  const [formData, setFormData] = useState({
    full_name: "",
    grade: "",
    school: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();  // <-- initialize navigate hook

  useEffect(() => {
    async function fetchData() {
      try {
        const skillRes = await axios.get("http://localhost:3000/api/skill/all");
        const questionRes = await axios.get("http://localhost:3000/api/question/all");

        setSkills(skillRes.data.skills);
        setQuestions(questionRes.data.questions);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Failed to load skills or questions.");
      }
    }

    fetchData();
  }, []);

  const questionsBySkill = questions.reduce((acc, question) => {
    if (!acc[question.skill_id]) acc[question.skill_id] = [];
    acc[question.skill_id].push(question);
    return acc;
  }, {});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (questionId, value) => {
    setRatings((prev) => ({
      ...prev,
      [questionId]: Number(value),
    }));
  };

  const handleSubmit = async () => {
    setMessage("");
    if (!formData.full_name || !formData.grade || !formData.school || !formData.gender) {
      setMessage("Please fill in all your personal details.");
      return;
    }

    if (Object.keys(ratings).length < questions.length) {
      setMessage("Please rate all questions.");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        student: {
          full_name: formData.full_name,
          gender: formData.gender,
          school: formData.school,
          grade: formData.grade,
        },
        skill: Object.entries(ratings).map(([question_id, rating]) => ({
          question_id: Number(question_id),
          rating: rating,
        })),
      };

      const response = await axios.post("http://localhost:3000/api/survey/submit", payload);
      console.log("Survey submitted successfully:", response.data);
      setMessage("Survey submitted successfully!");

      // Clear form & ratings
      setFormData({ full_name: "", grade: "", school: "", gender: "" });
      setRatings({});

      // Navigate to result page with student ID (assuming response.data.studentId contains it)
      // Adjust property based on your API response shape
      const studentId = response.data.studentId || response.data.student?.id;
      if (studentId) {
        navigate(`/result/${studentId}`);
      } else {
        setMessage("Student ID not found in response.");
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
      setMessage("Failed to submit survey. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Skills and Questions with Ratings
      </h1>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.includes("successfully") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      {/* Student Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Student Name</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          disabled={loading}
        />
      </div>

      {/* Grade */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Grade</label>
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          disabled={loading}
        />
      </div>

      {/* School */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">School</label>
        <select
          name="school"
          value={formData.school}
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          disabled={loading}
        >
          <option value="">-- Select --</option>
          <option value="outside">Outside</option>
          <option value="inside">Inside</option>
        </select>
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          disabled={loading}
        >
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Skills and Questions */}
      {skills.map((skill) => (
        <div key={skill.id} className="mb-10 border p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">{skill.skill_name}</h2>

          {questionsBySkill[skill.id] ? (
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-left">Question</th>
                  {[1, 2, 3, 4].map((num) => (
                    <th key={num} className="border px-4 py-2 text-center">{num}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {questionsBySkill[skill.id].map((q) => (
                  <tr key={q.id} className="even:bg-gray-100">
                    <td className="border px-4 py-2">{q.question}</td>
                    {[1, 2, 3, 4].map((num) => (
                      <td key={num} className="border text-center">
                        <input
                          type="radio"
                          name={`rating_${q.id}`}
                          value={num}
                          checked={ratings[q.id] === num}
                          onChange={() => handleRatingChange(q.id, num)}
                          disabled={loading}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">No questions available for this skill.</p>
          )}
        </div>
      ))}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-4 px-6 py-2 rounded text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
