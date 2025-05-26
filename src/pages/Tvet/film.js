import Header from "../../components/header";
import { FaChalkboardTeacher } from "react-icons/fa";

const FILM = () => {
  return (
    <>
      <Header />

      <div>
        <div className="bg-blue-900 text-white py-2 px-2 text-start text-sm font-semibold text-khmer">
          ភាពយន្ត
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-2 sm:p-8 lg:p-10">
                <div className="space-y-2">
                  <h1 className="text-sm lg:text-3xl font-bold text-orange-600 text-center">
                    សូមស្វាគមន៍មកកាន់សាលាភាពយន្ត
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
                    បរិញ្ញាបត្រ (BD)-សិក្សា ៣ ឆ្នាំ
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>ឯកទេសថតភាពយន្ដ</li>
                    <li>ឯកទេសកាត់ត និងកែពណ៏ភាពយន្ត វិស្វករសំលេងក្នុងភាពយន្ត</li>
                  </ul>
                </div>

                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>តម្រូការចូលរៀន ប្រឡងជាប់ថ្នាក់ទី១២ រឺសញ្ញាបត្រដែលមានតម្លៃស្មើ</li>
                    <li>កម្រិតភាសាអង់គ្លេសល្អបង្គូរ</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-gray-50">
              <div className="px-4 py-4">
                <h3 className="text-sm font-bold px-4 ">
                  ជំនាញទាំងអស់នៅក្នុងសាលាភាពយន្ត
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-3 text-left text-sm font-semibold">
                        លេខ
                      </th>
                      <th className="py-3 text-left text-sm font-semibold">
                        ជំនាញ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០១</td>
                      <td className="px-6 py-3 text-sm text-gray-800">ជំនាញថតភាពយន្ត</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០២</td>
                      <td className="px-6 py- text-sm text-gray-800">ជំនាញកាត់តភាពយន្ត</td>
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
