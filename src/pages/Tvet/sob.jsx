// src/pages/Tvet/sob.js
import Header from "../../components/header";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

const SOB = () => {
  return (
    <>
      <Header />
      <div>
        {/* Title Bar */}
        <div className="bg-blue-900 text-white py-3 px-4 text-start text-3xl font-semibold text-khmer">
          ពាណិជ្ជសាស្រ្ត
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8 text-2xl">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden space-y-10">
            {/* Intro Section */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold text-orange-600 text-center mb-2">
                  សូមស្វាគមន៍មកកាន់សាលាពាណិជ្ជកម្ម
                </h1>
                <p className="leading-relaxed text-gray-700 mt-4 text-center">
                  កម្រិតសញ្ញាបត្រ និងជំនាញ
                </p>
              </div>
            </div>

            {/* Two Cards with equal height */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {/* Card 1 */}
              <div className="bg-[#004e7c] text-white p-6 rounded-2xl w-full md:w-[350px] h-full shadow-lg flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <FaChalkboardTeacher size={30} />
                  <h2 className="font-semibold leading-tight">
                    សញ្ញាបត្របច្ចេកទេស និងវជាជីវៈ <br />
                    (TVC) សិក្សា ២​ឆ្នាំ (C1 ដល់ C3)
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 flex-1">
                  <li>សេវាកម្មរដ្ឋបាល</li>
                  <li>សេវាកម្មគណនេយ្យ</li>
                  <li>សេវាកម្មលក់</li>
                  <li>ការអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីលើទូរស័ព្ទដៃ</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[350px] h-full shadow-lg flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <FaGraduationCap size={30} />
                  <h2 className="font-semibold leading-tight">
                    សញ្ញាបត្រជាន់ខ្ពស់បច្ចេកទេសសិក្សា ២ឆ្នាំ
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 flex-1">
                  <li>គណនេយ្យ</li>
                  <li>ការគ្រប់គ្រងធនធានមនុស្ស</li>
                  <li>ការគ្រប់គ្រងធុរៈកិច្ចលក់រាយ</li>
                </ul>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4 text-center">
                ជំនាញទាំងអស់នៅក្នុងសាលាពាណិជ្ជសាស្រ្ត
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-3 text-left font-semibold">លេខ</th>
                      <th className="px-6 py-3 text-left font-semibold">ជំនាញ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "សេវាកម្មរដ្ឋបាល",
                      "សេវាកម្មគណនេយ្យ",
                      "សេវាកម្មលក់",
                      "ការអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីលើទូរស័ព្ទដៃ",
                      "គណនេយ្យ",
                      "ការគ្រប់គ្រងធនធានមនុស្ស",
                      "ការគ្រប់គ្រងធុរៈកិច្ចលក់រាយ",
                    ].map((skill, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-gray-200" : "bg-white"
                        } border-b border-gray-300`}
                      >
                        <td className="px-6 py-3 text-gray-800">{`០${index + 1}`}</td>
                        <td className="px-6 py-3 text-gray-800">{skill}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOB;
