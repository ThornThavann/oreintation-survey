import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

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

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const skillRes = await axios.get(`${process.env.REACT_APP_BASE_URL}api/skill/all`);
        const questionRes = await axios.get(`${process.env.REACT_APP_BASE_URL}api/question/all`);

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
      return null;
    }

    if (Object.keys(ratings).length < questions.length) {
      setMessage("Please rate all questions.");
      return null;
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

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/survey/submit`, payload);
      setMessage("Survey submitted successfully!");
      setFormData({ full_name: "", grade: "", school: "", gender: "" });
      setRatings({});
      const studentId = response.data[0]?.studentId;
      return studentId ?? null;
    } catch (error) {
      console.error("Error submitting survey:", error);
      setMessage("Failed to submit survey. Please try again.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    const studentId = await handleSubmit();
    if (studentId) navigate(`/student-results/${studentId}`);
  };

  return (
    <>
    <Header />
    <div className="max-w-4xl w-full mx-auto mt-6 p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-blue-700">
        កម្រងសំនួរការវាយតម្លៃ
      </h1>

      {message && (
        <div
          className={`mb-6 p-4 rounded-md text-center font-semibold text-sm sm:text-base ${
            message.includes("successfully")
              ? "bg-blue-100 text-blue-800 border border-blue-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      {/* Student Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
        {["full_name", "grade", "school", "gender"].map((field) => (
          <div key={field}>
            <label className="block mb-1 sm:mb-2 font-semibold text-gray-700 capitalize" htmlFor={field}>
              {field.replace("_", " ")}
            </label>
            {field === "school" || field === "gender" ? (
              <select
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInput}
                disabled={loading}
                className="w-full px-4 py-3 border bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                {field === "school" ? (
                  <>
                    <option value="outside">Outside</option>
                    <option value="inside">Inside</option>
                  </>
                ) : (
                  <>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </>
                )}
              </select>
            ) : (
              <input
                id={field}
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleInput}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder={`Enter ${field.replace("_", " ")}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Questions */}
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="mb-10 border border-blue-300 rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">{skill.skill_name}</h2>

          {questionsBySkill[skill.id] ? (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm sm:text-base border border-gray-300 rounded-md">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border border-blue-300 px-4 py-3 text-left font-semibold text-blue-800">
                      Question
                    </th>
                    {[1, 2, 3, 4].map((num) => (
                      <th
                        key={num}
                        className="border border-blue-300 px-4 py-3 text-center font-semibold text-blue-800"
                      >
                        {num}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {questionsBySkill[skill.id].map((q) => (
                    <tr
                      key={q.id}
                      className="bg-blue-50 hover:bg-blue-100 transition"
                    >
                      <td className="border border-blue-300 px-4 py-3">{q.question}</td>
                      {[1, 2, 3, 4].map((num) => (
                        <td
                          key={num}
                          className="border border-blue-300 text-center"
                        >
                          <input
                            type="radio"
                            name={`rating_${q.id}`}
                            value={num}
                            checked={ratings[q.id] === num}
                            onChange={() => handleRatingChange(q.id, num)}
                            disabled={loading}
                            className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5 accent-blue-600"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-blue-600 italic">No questions available for this skill.</p>
          )}
        </div>
      ))}

      {/* Submit */}
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full sm:w-auto block mx-auto mt-6 px-6 py-3 rounded-md font-semibold text-white text-sm sm:text-base transition
          ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400"}`}
      >
        {loading ? "Submitting..." : "ដាក់ស្នើ"}
      </button>
    </div>
    </>
  );
}
