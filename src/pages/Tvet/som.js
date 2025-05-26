import Header from "../../components/header";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

const SOM = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-blue-900 text-white py-3 px-4 text-start font-semibold text-khmer text-2xl">
          មេកានិក
        </div>
        <div className="flex-1 p-6 lg:p-10">
          <h1 className="text-center text-orange-600 font-bold text-3xl mb-6">
            សូមស្វាគមន៍មកកាន់សាលាមេកានិក
          </h1>
        </div>
        <div className="min-h-screen bg-gray-50 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Content */}
              {/* (If you want to add left content, place it here) */}

              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-start p-6">
                {/* Blue Card */}
                <div className="bg-[#004e7c] text-white p-6 rounded-2xl w-full md:w-[600px] lg:w-[720px] shadow-md hover:shadow-lg transition flex-shrink-0">
  <div className="flex items-center gap-4 mb-5">
    <FaChalkboardTeacher size={30} />
    <h2 className="text-2xl font-bold leading-tight">
      ជំនាញការថែទាំ និងជួសជុសរថយន្ត
    </h2>
  </div>
  <ul className="list-decimal list-inside space-y-2 text-2xl leading-relaxed pl-1">
    <li>ថែទាំរថយន្តមូលដ្ឋាន</li>
    <li>ជួសជុលប្រព័ន្ធបំពង់កម្តៅម៉ាស៊ីនរថយន្ត</li>
    <li>ជួសជុលប្រព័ន្ធអាំប្រាយ៉ា និងប្រព័ន្ធហ្រាំ្វង</li>
    <li>ជួសជុលប្រព័ន្ធគ្រឿងកោ្រម ប្រព័ន្ធចង្កូត និងប្រអប់បញ្ជារដោយដៃ</li> 
    <li>ជួសជុលប្រព័ន្ធភ្លើង និងម៉ាស៊ីនត្រជាក់</li>
    <li>ប្រើប្រាស់កុំព្យូទ័រត្រួតពិនិត្យកំហូចរបស់ម៉ាស៊ីន (SCANNER)</li>
    <li>ជួសជុលប្រអប់លេខស្វ័យប្រវត្តិ</li>
    <li>ជួសជុលប្រព័ន្ធ HYBRID របស់រថយន្ត</li>
    <li>ប្រឡងយកប័ណ្ណបើកបររថយន្ត</li>
  </ul>
</div>


                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[320px] shadow-md hover:shadow-lg transition flex-shrink-0">
                  <div className="flex items-center gap-4 mb-5">
                    <FaGraduationCap size={30} />
                    <h2 className="text-2xl font-bold leading-tight">
                      សមត្ថភាពក្រោយបញ្ចប់ការសិក្សា
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside space-y-2 text-2xl leading-relaxed pl-1">
                    <li>សុវត្តិភាពការងារ</li>
                    <li>ប្រើប្រាស់ឧបករណ៍ និងសម្ភារៈដើម្បីជួសជុល</li>
                    <li>អ្នកជំនាញផ្សារដែក</li>
                    <li>
                      អ្នកបច្ចេកទេសខាងការងារគ្រឿងដែក វាស់ កាត់ ឆាប ស្វាន សំលៀង
                      ធ្វើខ្សែខ្ចៅ ផ្គុំគ្រឿងៗ
                    </li>
                    <li>ថែទាំ និងជួសជុលរថយន្ត</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-gray-50 mt-12 rounded-lg shadow-lg">
              <div className="px-6 py-6 border-b border-orange-300">
                <h3 className="text-2xl font-bold text-gray-800">
                  ជំនាញទាំងអស់នៅក្នុងសាលាមេកានិក
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-2xl text-gray-800">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">លេខ</th>
                      <th className="px-6 py-4 text-left font-semibold">
                        ជំនាញ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 border-b border-gray-300">
                      <td className="px-6 py-4">០១</td>
                      <td className="px-6 py-4">
                        ជំនាញការថែទាំ និងជួសជុលរថយន្ត
                      </td>
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
