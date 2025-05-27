import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/header";

export default function SurveyResultPage() {
  const { studentId } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}api/student-results/${studentId}`)
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
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded shadow p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-[#4361EE] sm:mb-6 text-center sm:text-left">
            លទ្ធផលការវាយតម្លៃ
          </h1>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-sm sm:text-base">
              <thead className="bg-[#E37F0D] text-white">
                <tr>
                  <th className="border px-2 sm:px-4 py-2 w-[5%]">ល.រ</th>
                  <th className="border px-2 sm:px-4 py-2 w-[75%] text-left">ជំនាញ</th>
                  <th className="border px-2 sm:px-4 py-2 w-[20%] text-center">បូកសរុបការវាយតម្លៃ</th>
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

          {/* Explanation Table */}
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4 text-[#4361EE]">
              តម្លៃរបស់ពិន្ទុ​ នៃចំណូលចិត្ត
            </h1>
            <table className="table-auto w-full border border-gray-300">
              <thead className="bg-[#E37F0D] text-white">
                <tr>
                  <th className="border px-4 py-2 w-[33.66%] text-center">កម្រិតទាប</th>
                  <th className="border px-4 py-2 w-[33.33%] text-center">កម្រិតមធ្យម</th>
                  <th className="border px-4 py-2 w-[33.33%] text-center">កម្រិតខ្ពស់</th>
                </tr>
              </thead>
              <tbody className="text-center text-sm font-semibold">
                <tr>
                  <td className="border px-4 py-2 ">ពិន្ទុ ៦ - ១២</td>
                  <td className="border px-4 py-2 ">ពិន្ទុ ១៣ - ​១៨</td>
                  <td className="border px-4 py-2 ">ពិន្ទុ ១៩ - ២០</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Explanation Section */}
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4 text-[#4361EE]">សេចក្តីពន្យល់៖</h1>
            <div className="space-y-2 text-base leading-relaxed">
              <p><span className="font-bold">កម្រិតទាប</span>៖ មានន័យថាចំណូលចិត្តរបស់អ្នកមិនសូវបង្ហាញពីសារៈសំខាន់ដែលអាចនាំរូបអ្នកឆ្ពោះទៅរកភាពជោគជ័យក្នុងការសិក្សាឬអាជីពនោះបានឡើយ។</p>
              <p><span className="font-bold">កម្រិតមធ្យម</span>៖ បញ្ជាក់ថាចំណូលចិត្តរបស់អ្នកអាចជាការធានាថាអ្នកនឹងនាំរូបអ្នកទៅដល់ភាពជោគជ័យក្នុងការសិក្សា។ ឬអាជីពប្រសិនបើមានការខិតខំប្រឹងប្រែងបន្ថែមទៀតក្នុងការបំពេញកិច្ចការនោះ។</p>
              <p><span className="font-bold">កម្រិតខ្ពស់</span>៖ ជាប្រការល្អបំផុតប្រសិនបើអ្នកមានបំណងចាប់យកមកជំនាញសិក្សាឬអាជីពនោះ ពីព្រោះវាជាកត្តាមួយដែលអាចនាំឲ្យអ្នកចំពោះទៅរកភាពជោគជ័យបានដោយងាយស្រួល។</p>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4 text-[#4361EE]">គូរយល់ដឹង</h1>
            <div className="space-y-2 text-base leading-relaxed">
              <p>
                ប្រសិនបើលពិនិត្យឃើញថា​ កម្រងសំណួរណាមួយមានចំនួនពិន្ទុច្រើនជាងគេបំផុត​ នោះបញ្ជាក់ថា អ្នកគួរពិចារណាជ្រើសរើស 
                <span className="font-bold"> មុខជំនាញសិក្សា រឺអាជីព </span>
                នោះ ពីព្រោះអ្នកមានទំនោរ និង 
                <span className="font-bold"> ចូលចិត្តខ្លាំងជាងគេ។</span>
              </p>
            </div>
            <div className="mt-6">
            <h1 className="text-xl font-bold mb-4 text-[#4361EE]">កំណត់ចំណាំ</h1>
            <div className="space-y-2 text-base leading-relaxed">
              <p>- ជំនាញដែលទាមទារអោយប្អូនជាប់ថ្នាក់ទី៩ (រឺមានសញ្ញាបត្រស្ពានចម្លង) → ទទួលបានសញ្ញាបត្របច្ចេកទេសនិងវិជ្ជាជីវៈ C3 (សមមូលទី១២) នៅពេលចប់ពីសាលាជំនាញ។</p>
              <p>- ជំនាញដែលទាមទារអោយប្អូនជាប់ រឺធ្លាក់ថ្នាក់ទី១២​​​ → ទទួលបានសញ្ញាបត្ររងបច្ចេកទេស នៅពេលចប់ពីសាលាជំនាញ។</p>
              <p>- ជំនាញដែលទាមទារអោយប្អូនជាប់ថ្នាក់ទី១២​​​ → ទទួលបានសញ្ញាបត្របរិញ្ញាបត្របច្ចេកវិទ្យា នៅពេលចប់ពីសាលាជំនាញ។</p>
              <p>- ជំនាញដែលមិនទាមទារកម្រិតសញ្ញាបត្របរិញ្ញាបត្រ → ជាជំនាញវគ្គខ្លី។</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
