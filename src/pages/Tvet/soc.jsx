import Header from "../../components/header";
import Footer from "../../components/footer";

const SOC = () => {
  return (
    <>
      <Header />

      <div>
        <div className="bg-blue-900 text-white py-3 px-4 text-lg sm:text-2xl font-semibold text-khmer">
          សំណង់
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
          <div className="flex-1 p-6 sm:p-10 lg:p-12 flex items-center justify-center">
            <h1 className="text-lg sm:text-2xl font-bold text-orange-600 text-center mb-2">
              សូមស្វាគមន៍មកកាន់សាលាសំណង់
            </h1>
          </div>

          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden space-y-10">
            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4">
              {/* Card 1 */}
              <div className="bg-[#004e7c] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col text-lg sm:text-xl">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  ជំនាញការដំឡើងបណ្តាញអគ្គិសនីក្នុងអគារ
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>សេម៉ាអគ្គិសនី</li>
                  <li>ការដំឡើងទូរបញ្ជារ</li>
                  <li>ប្រព័ន្ធបំភ្លឺខាងក្នុងនិងក្រៅអគារ</li>
                  <li>ការដំឡើងប្រព័ន្ធកាំមេរាសុវត្ថិភាព</li>
                  <li>ការដំឡើងប្រព័ន្ធខ្សែដី</li>
                  <li>សេម៉ាបញ្ជារម៉ូទ័រ</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col text-lg sm:text-xl">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  ជំនាញថែទាំអគារ​ Building Maintenance (BM)
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>មូលដ្ជានគ្រឺះគូប្លង់</li>
                  <li>ថែទាំនិងដំឡើងប្រព័ន្ធទឺក/ភ្លើង/ម៉ាសុីនត្រជាក់</li>
                  <li>ជូសជុលនិងលាបថ្នាំពណ៌</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0DABAB] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col text-lg sm:text-xl">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl whitespace-pre-line">
                  ជំនាញការដំឡើងបណ្តាញបំពង់ទឹកនិងសេវាកម្ម បរិក្ខាត្រជាក់
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>ការអាន និង​គូសប្លង់</li>
                  <li>ដំឡើងម៉ាសុីនត្រជាក់</li>
                  <li>ការដំឡើង និងរៀបចំប្រព័ន្ធទុយោទឹកស្អាតទឺកបង្ហូរចេញ</li>
                  <li>ដំឡើងប្រព័ន្ធពន្លត់អគ្គិភ័យ និង ផ្សារលោហៈ</li>
                  <li>ដំឡើងបរិក្ខារបន្ទប់ទឹកធម្មតា និងទំនើប</li>
                  <li>ដំឡើងប្រព័ន្ធទឹកក្តៅ (ប្រើអគ្គិសនី និង​ SOLAR)</li>
                </ul>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4 text-center text-lg sm:text-xl">
                ជំនាញទាំងអស់នៅក្នុងសាលាសំណង់
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
                    {[
                      "ការដំឡើងបណ្តាញអគ្គិសនីក្នុងអគារ (BEW)",
                      "ការដំឡើងបណ្តាញបំពង់ទឹក និងសេវាកម្មបរិក្ខារត្រជាក់ (PAS)",
                      "ការថែទាំអគារ (BM)",
                    ].map((skill, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                      >
                        <td className="px-4 py-3 text-gray-800">{`០${idx + 1}`}</td>
                        <td className="px-4 py-3 text-gray-800">{skill}</td>
                      </tr>
                    ))}
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

export default SOC;
