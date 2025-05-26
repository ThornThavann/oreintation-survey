// src/pages/Tvet/sob.js
import Header from "../../components/header";

const SOC = () => {
  return (
    <>
      <Header />
      <div>
        {/* Page Title */}
        <div className="bg-blue-900 text-white py-3 px-6 text-start text-2xl font-semibold text-khmer">
          សំណង់
        </div>
        <div className="flex-1 p-6 sm:p-10 bg-white rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">
                  សូមស្វាគមន៍មកកាន់សាលាសំណង់
                </h1>
              </div>

        <div className="min-h-screen bg-gray-50 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden space-y-12">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Content */}
           

              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                {/* Card 1 */}
                <div className="bg-[#004e7c] text-white p-8 rounded-xl w-full md:w-[350px] shadow-lg flex flex-col">
                  <h2 className="text-2xl font-semibold mb-4">
                    ជំនាញការដំឡើងបណ្តាញអគ្គិសនីក្នុងអគារ
                  </h2>
                  <ul className="list-decimal list-inside text-2xl space-y-2">
                    <li>សេម៉ាអគ្គិសនី</li>
                    <li>ការដំឡើងទូរបញ្ជារ</li>
                    <li>ប្រព័ន្ធបំភ្លឺខាងក្នុងនិងក្រៅអគារ</li>
                    <li>ការដំឡើងប្រព័ន្ធកាំមេរាសុវត្ថិភាព</li>
                    <li>ការដំឡើងប្រព័ន្ធខ្សែដី</li>
                    <li>សេម៉ាបញ្ជារម៉ូទ័រ</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-[#f26c23] text-white p-8 rounded-xl w-full md:w-[350px] shadow-lg flex flex-col">
                  <h2 className="text-2xl font-semibold mb-4">
                    ជំនាញថែទាំអគារ​ Building Maintenance (BM)
                  </h2>
                  <ul className="list-decimal list-inside text-2xl space-y-2">
                    <li>មូលដ្ជានគ្រឺះគូប្លង់</li>
                    <li>ថែទាំនិងដំឡើងប្រព័ន្ធទឺក/ភ្លើង/ម៉ាសុីនត្រជាក់</li>
                    <li>ជូសជុលនិងលាបថ្នាំពណ៌</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0DABAB] text-white p-8 rounded-xl w-full md:w-[350px] shadow-lg flex flex-col">
                  <h2 className="text-2xl font-semibold mb-4">
                    ជំនាញការដំឡើងបណ្តាញបំពង់ទឹកនិងសេវាកម្ម<br />បរិក្ខាត្រជាក់
                  </h2>
                  <ul className="list-decimal list-inside text-2xl space-y-2">
                    <li>ការអាន និង​គូសប្លង់</li>
                    <li>ដំឡើងម៉ាសុីនត្រជាក់</li>
                    <li>ការដំឡើង និងរៀបចំប្រព័ន្ធទុយោទឹកស្អាតទឺកបង្ហូរចេញ</li>
                    <li>ដំឡើងប្រព័ន្ធពន្លត់អគ្គិភ័យ និង ផ្សារលោហៈ</li>
                    <li>ដំឡើងបរិក្ខារបន្ទប់ទឹកធម្មតា និងទំនើប</li>
                    <li>ដំឡើងប្រព័ន្ធទឹកក្តៅ (ប្រើអគ្គិសនី និង​ SOLAR)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                ជំនាញទាំងអស់នៅក្នុងសាលាសំណង់
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse text-2xl">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-3 text-left font-semibold">លេខ</th>
                      <th className="px-6 py-3 text-left font-semibold">ជំនាញ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 border-b">
                      <td className="px-6 py-3 text-gray-800">០១</td>
                      <td className="px-6 py-3 text-gray-800">
                        ការដំេឡើងបណ្តាញអគ្គិសនីក្នុងអគារ BEW
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-3 text-gray-800">០២</td>
                      <td className="px-6 py-3 text-gray-800">
                        ការដំេឡើងបណ្តាញបំពង់ទឹក និងសេវាកម្មបរិក្ខារត្រជាក់ (PAS)
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-6 py-3 text-gray-800">០៣</td>
                      <td className="px-6 py-3 text-gray-800">ការថែទាំអគារ (BM)</td>
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

export default SOC;
