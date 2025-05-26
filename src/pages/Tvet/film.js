import Header from "../../components/header";
import { FaChalkboardTeacher } from "react-icons/fa";

const FILM = () => {
  return (
    <>
      <Header />

      <div>
        {/* Title Bar */}
        <div className="bg-blue-900 text-white py-3 px-4 font-semibold text-khmer text-2xl lg:text-3xl">
          ភាពយន្ត
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <h1 className="text-orange-600 text-center text-3xl font-bold">
              សូមស្វាគមន៍មកកាន់សាលាភាពយន្ត
            </h1>

            {/* Welcome and Description */}
            <div className="flex-1">
              <p className="text-gray-700 text-2xl px-2 md:px-4 text-center lg:text-left">
                កម្រិតសញ្ញាបត្រ និងជំនាញ
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
                {/* Blue Card */}
                <div className="bg-[#004e7c] text-white p-6 rounded-2xl w-full md:w-[350px] shadow hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <FaChalkboardTeacher size={28} />
                    <h2 className="text-2xl font-bold">បរិញ្ញាបត្រ (BD) - សិក្សា ៣ ឆ្នាំ</h2>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-2xl">
                    <li>ឯកទេសថតភាពយន្ដ</li>
                    <li>ឯកទេសកាត់ត និងកែពណ៏ភាពយន្ត វិស្វករសំលេងក្នុងភាពយន្ត</li>
                  </ul>
                </div>

                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[350px] shadow hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold mb-4">លក្ខណៈវិនិច្ឆ័យចូលរៀន</h3>
                  <ul className="list-disc list-inside space-y-2 text-2xl">
                    <li>ប្រឡងជាប់ថ្នាក់ទី១២ រឺសញ្ញាបត្រដែលមានតម្លៃស្មើ</li>
                    <li>កម្រិតភាសាអង់គ្លេសល្អបង្គូរ</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <div className="bg-orange-100 px-6 py-4">
                <h3 className="text-3xl font-bold text-gray-800">
                  ជំនាញទាំងអស់នៅក្នុងសាលាភាពយន្ត
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-2xl text-gray-700">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-3 text-left font-semibold">លេខ</th>
                      <th className="px-6 py-3 text-left font-semibold">ជំនាញ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="px-6 py-4">០១</td>
                      <td className="px-6 py-4">ជំនាញថតភាពយន្ត</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4">០២</td>
                      <td className="px-6 py-4">ជំនាញកាត់តភាពយន្ត</td>
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

export default FILM;
