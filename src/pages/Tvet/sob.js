// src/pages/Tvet/sob.js
import Header from "../../components/header";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

const SOB = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-blue-900 text-white py-2 px-2 text-start text-sm font-semibold text-khmer">
          ពាណិជ្ជសាស្រ្ត
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-2 sm:p-8 lg:p-10">
                <div className="space-y-2">
                  <h1 className="text-sm lg:text-3xl font-bold text-orange-600 text-center">
                    សូមស្វាគមន៍មកកាន់សាលាពាណិជ្ជកម្ម
                  </h1>
                  <p className="text-sm leading-relaxed text-gray-700 px-4">
                    កម្រិតសញ្ញាបត្រ និងជំនាញ
                  </p>
                </div>
              </div>

              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-6">
                {/* Blue Card */}
                <div className="bg-[#004e7c] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <FaChalkboardTeacher size={28} />
                    <h2 className="text-sm font-bold leading-tight">
                      សញ្ញាបត្របច្ចេកទេស និងវជាជីវៈ <br />
                      (TVC) សិក្សា ២​ឆ្នាំ (C1 ដល់ C3)
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>សេវាកម្មរដ្ឋបាល</li>
                    <li>សេវាកម្មគណនេយ្យ</li>
                    <li>សេវាកម្មលក់</li>
                    <li>ការអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីលើទូរស័ព្ទដៃ</li>
                  </ul>
                </div>

                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <FaGraduationCap size={28} />
                    <h2 className="text-sm font-bold leading-tight">
                      សញ្ញាបត្រជាន់ខ្ពស់បច្ចេកទេសសិក្សា ២ឆ្នាំ
                      <br />
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>គណនេយ្យ</li>
                    <li>ការគ្រប់គ្រងធនធានមនុស្ស</li>
                    <li>ការគ្រប់គ្រងធុរៈកិច្ចលក់រាយ</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-gray-50">
              <div className=" px-4 py-4">
                <h3 className="text-sm font-bold px-4">
                  ជំនាញទាំងអស់នៅក្នុងសាលាពាណិជ្ជះសាស្រ្ដ
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-3 text-left text-sm font-semibold">
                        លេខ
                      </th>
                      <th className=" px-6 py-3 text-left text-sm font-semibold">
                        ជំនាញ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០១</td>
                      <td className="px-6 py-3 text-sm text-gray-800">សេវាកម្មរដ្ឋបាល</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០២</td>
                      <td className="px-6 py-3 text-sm text-gray-800">សេវាកម្មគណនេយ្យ</td>
                    </tr>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៣</td>
                      <td className="px-6 py-3 text-sm text-gray-800"> សេវាកម្មលក់</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៤</td>
                      <td className="px-6 py-3 text-sm text-gray-800">ការអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីលើទូរស័ព្ទដៃ</td>
                    </tr>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៥</td>
                      <td className="px-6 py-3 text-sm text-gray-800">គណនេយ្យ</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៦</td>
                      <td className="px-6 py-3 text-sm text-gray-800">ការគ្រប់គ្រងធនធានមនុស្ស</td>
                    </tr>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៧</td>
                      <td className="px-6 py-3 text-sm text-gray-800">ការគ្រប់គ្រងធុរៈកិច្ចលក់រាយ</td>
                    </tr>
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
