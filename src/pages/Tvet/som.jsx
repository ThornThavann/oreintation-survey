import Header from "../../components/header";
import Footer from "../../components/footer";

const SOM = () => {
  return (
    <>
      <Header />
      <div>
        {/* Title Bar */}
        <div className="bg-blue-900 text-white py-3 px-4 text-lg sm:text-2xl font-semibold text-khmer">
          មេកានិក
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-lg sm:text-xl">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden space-y-10">
            {/* Welcome Section */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1">
                <h1 className="text-lg sm:text-2xl font-bold text-orange-600 text-center mb-2">
                  សូមស្វាគមន៍មកកាន់សាលាមេកានិក
                </h1>
                <p className="leading-relaxed text-gray-700 mt-4 text-center text-base sm:text-xl font-semibold">
                  ជំនាញ និងសមត្ថភាពក្រោយបញ្ចប់ការសិក្សា
                </p>
              </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {/* Card 1 */}
              <div className="bg-[#004e7c] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-semibold text-base sm:text-xl leading-tight">
                    ជំនាញការថែទាំ និងជួសជុលរថយន្ត
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>ថែទាំរថយន្តមូលដ្ឋាន</li>
                  <li>ជួសជុលប្រព័ន្ធបំពង់កម្តៅម៉ាស៊ីន</li>
                  <li>ជួសជុលប្រព័ន្ធអាំប្រាយ៉ា និងប្រព័ន្ធហ្រាំ្វង</li>
                  <li>ជួសជុលប្រព័ន្ធចង្កូត និងប្រអប់បញ្ជារដោយដៃ</li>
                  <li>ជួសជុលប្រព័ន្ធភ្លើង និងម៉ាស៊ីនត្រជាក់</li>
                  <li>ប្រើប្រាស់ SCANNER ត្រួតពិនិត្យកំហូចម៉ាស៊ីន</li>
                  <li>ជួសជុលប្រអប់លេខស្វ័យប្រវត្តិ</li>
                  <li>ជួសជុលប្រព័ន្ធ HYBRID</li>
                  <li>ប្រឡងយកប័ណ្ណបើកបរ</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-semibold text-base sm:text-xl leading-tight">
                    សមត្ថភាពក្រោយបញ្ចប់ការសិក្សា
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>សុវត្ថិភាពការងារ</li>
                  <li>ប្រើប្រាស់ឧបករណ៍ និងសម្ភារៈជួសជុល</li>
                  <li>ជំនាញផ្សារដែក</li>
                  <li>
                    វាស់ កាត់ ឆាប ស្វាន សំលៀង ផ្គុំ និងសំអាតគ្រឿងដែក
                  </li>
                  <li>ថែទាំ និងជួសជុលរថយន្ត</li>
                </ul>
              </div>
            </div>

            {/* Skills Table */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4 text-center text-lg sm:text-xl">
                ជំនាញទាំងអស់នៅក្នុងសាលាមេកានិក
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-4 py-3 text-left font-semibold">លេខ</th>
                      <th className="px-4 py-3 text-left font-semibold">ជំនាញ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-gray-800">០១</td>
                      <td className="px-4 py-3 text-gray-800">
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
      <Footer />
    </>
  );
};

export default SOM;
