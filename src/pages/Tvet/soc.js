// src/pages/Tvet/sob.js
import Header from "../../components/header";

const SOC = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-blue-900 text-white py-2 px-2 text-start text-sm font-semibold text-khmer">
          សំណង់
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-2 sm:p-8 lg:p-10">
                <div className="space-y-2">
                  <h1 className="text-sm lg:text-3xl font-bold text-orange-600 text-center">
                    សូមស្វាគមន៍មកកាន់សាលាសំណង់
                  </h1>
                  {/* <p className="text-sm leading-relaxed text-gray-700 px-4">
                    កម្រិតសញ្ញាបត្រ និងជំនាញ
                  </p> */}
                </div>
              </div>

              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-6">
                {/* Blue Card */}
                <div className="bg-[#004e7c] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-sm font-bold leading-tight">
                      ជំនាញការដំឡើងបណ្តាញអគ្គិសនីក្នុងអគារ
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>សេម៉ាអគ្គិសនី</li>
                    <li>ការដំឡើងទូរបញ្ជារ</li>
                    <li>ប្រព័ន្ធបំភ្លឺខាងក្នុងនិងក្រៅអគារ</li>
                     <li>ការដំឡើងប្រព័ន្ធកាំមេរាសុវត្ថិភាព</li>
                    <li>ការដំឡើងប្រព័ន្ធខ្សែដី</li>
                     <li>សេម៉ាបញ្ជារម៉ូទ័រ</li>
                  </ul>
                </div>

                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-sm font-bold leading-tight">
                      ជំនាញថែទាំអគារ​ Building Maintenance (BM)
                      <br />
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>មូលដ្ជានគ្រឺះគូប្លង់</li>
                    <li>ថែទាំនិងដំឡើងប្រព័ន្ធទឺក/ភ្លើង/ម៉ាសុីនត្រជាក់</li>
                    <li>ជូសជុលនិងលាបថ្នាំពណ៌</li>
                  </ul>
                </div>

                     {/* Orange Card */}
                     <div className="bg-[#0DABAB] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-sm font-bold leading-tight">
                      ជំនាញការដំឡើងបណ្តាញបំពង់ទឹកនិងសេវាកម្ម<br/>
                      បរិក្ខាត្រជាក់
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>ការអាន និង​គូសប្លង់</li>
                    <li>ដំឡើងម៉ាសុីនត្រជាក់</li>
                    <li>ការដំឡើង និងរៀបចំប្រព័ន្ធទុយោទឹកស្អាតទឺកបង្ហូរចេញ</li>
                    <li>ដំឡើងប្រព័ន្ធពន្លត់អគ្គិភ័យ និង ផ្សារលោហ:</li>
                    <li>ដំឡើងបរិក្ខារបន្ទប់ទឹកធម្មតា និងទំនើប</li>
                    <li>ដំឡើងប្រព័ន្ធទឹកក្តៅ (ប្រើអគ្គិសនី និង​ SOLAR)</li>

                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-gray-50">
              <div className=" px-4 py-4">
                <h3 className="text-sm font-bold px-4">
                  ជំនាញទាំងអស់នៅក្នុងសាលាសំណង់
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
                      <td className="px-6 py-3 text-sm text-gray-800">ការដំេឡើងបណ្តាញអគ្គិសនីក្នុងអគារ BEW</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០២</td>
                      <td className="px-6 py-3 text-sm text-gray-800">ការដំេឡើងបណ្តាញបំពង់ទឹក និងសេវាកម្មបរិក្ខារត្រជាក់ (PAS)</td>
                    </tr>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៣</td>
                      <td className="px-6 py-3 text-sm text-gray-800"> ការថែទាំអគារ (BM)</td>
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
