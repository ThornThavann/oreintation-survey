// src/pages/Tvet/sob.js
import Header from "../../components/header";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

const SOM = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-blue-900 text-white py-2 px-2 text-start text-sm font-semibold text-khmer">
          មេកានិក
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-2 sm:p-8 lg:p-10">
                <div className="space-y-2">
                  <h1 className="text-sm lg:text-3xl font-bold text-orange-600 text-center">
                    សូមស្វាគមន៍មកកាន់សាលាមេកានិក
                  </h1>
                </div>
              </div>

              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-6">
                {/* Blue Card */}
                <div className="bg-[#004e7c] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <FaChalkboardTeacher size={28} />
                    <h2 className="text-sm font-bold leading-tight">
                        ជំនាញការថែទាំ និងជួសជុសរថយន្ត                     
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>ថែទាំរថយន្តមូលដ្ឋាន</li>
                    <li>ជួសជុលប្រព័ន្ធបព្ចុាះកម្តៅម៉ាសុីនរថយន្ត</li>
                    <li>ជួសជុលប្រព័ន្ធអាំប្រាយ៉ា និង ប្រព័ន្ធហ្រាំ្វង</li>
                    <li>ជួសជុលប្រព័ន្ធគ្រឿងកោ្រម ប្រព័ន្ធចង្កូត និង ប្រអប់បញ្ជារដោយដៃ</li>
                    <li>ជួសជុលប្រព័ន្ធភ្លើង និង ម៉ាស៊ីនត្រជាក់</li>
                    <li>ប្រើប្រាស់កុំព្យូទ័រត្រួតពិនិត្យកំហូចរបស់ម៉ាសុីន(SCANNER)</li>
                    <li>ជូសជុលប្រអប់លេខស្វ័ុប្រវត្តិ</li>
                    <li>ជូសជុលប្រព័ន្ធHYBRID របស់រថយន្ត</li>
                    <li>ប្រឡងយកប័ណ្ណបើកបររថយន្ត</li>

                  </ul>
                </div>

                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <FaGraduationCap size={28} />
                    <h2 className="text-sm font-bold leading-tight">
                    ​​ សមត្ថភាពក្រោយបញ្ចប់ការសិក្សា
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>សុវត្តិភាពការងារ</li>
                    <li>ប្រើប្រាស់ឧបករណ៍ និងសម្ភារ:ដើម្បើជូសជុល</li>
                    <li>អ្នកជំនាញផ្សារដែក</li>
                    <li>អ្នកបច្ចេកទេសខាងការងារគ្រឿងដែក វាស់ កាត់ ឆាប​ ស្វាន សំលៀង ធ្វើខ្សែខ្ចៅ ផ្គុំគ្រឿង៊។ល។</li>
                    <li>ថែទាំ និងជូសជុលរថយន្ត</li>


                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-gray-50">
              <div className=" px-4 py-4">
                <h3 className="text-sm font-bold px-4">
                  ជំនាញទាំងអស់នៅក្នុងសាលាមេកានិក
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-3 text-left text-sm font-semibold">
                        លេខ
                      </th>
                      <th className=" py-3 text-left text-sm font-semibold">
                        ជំនាញ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០១</td>
                      <td className="px-6 py-3 text-sm text-gray-800">ជំនាញការថែទាំ និងជូសជុលរថយន្ត</td>
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

export default SOM;
