import Header from "../../components/header";
import Footer from "../../components/footer";

const SOH = () => {
  return (
    <>
      <Header />

      <div >
        <div className="bg-blue-900 text-white py-3 px-4 text-lg sm:text-2xl font-semibold text-khmer">
          បដិសណ្ឋារកិច្ច
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
          <div className="flex-1 p-6 sm:p-10 lg:p-12 flex items-center justify-center">
            <h1 className="text-lg sm:text-2xl font-bold text-orange-600 text-center mb-2">
              សូមស្វាគមន៍មកកាន់សាលាបដិសណ្ឋារកិច្ច
            </h1>
          </div>

          
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden space-y-10">
            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4">
              {/* Card 1 */}
              <div className="bg-[#004e7c] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col text-lg sm:text-xl">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  ជំនាញការិយាល័យជួរមុខ FRONT OFFICE
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>បដិសណ្ឋារកិច្ចទូទៅ</li>
                  <li>ជំនាញទំនាក់ទំនង</li>
                  <li>វិជ្ជាជីវះបម្រើភ្ញៀវទេសចរណ៏</li>
                  <li>ការប្រើប្រាស់កុំព្យូទ័រសម្រាប់ការិយាល័យ</li>
                  <li>ការគិតលុយពីភ្ញៀវ</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col text-lg sm:text-xl">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  ជំនាញផលិតកម្មម្ហូបអាហារ​​​ Food Production (FP)
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>ឯកទេសចម្អិនម្ហូប</li>
                  <li>ឯកទេសធ្វើនំ</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0DABAB] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col text-lg sm:text-xl">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  ជំនាញសេវាកម្មម្ហូបអាហារ និងភេសជ្ជះ បរិក្ខាត្រជាក់
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>ជំនាញផ្តល់សេវាកម្មម្ហូបអាហារនិងភេសជ្ជះ</li>
                  <li>ជំនាញស្រាក្រឡុក</li>
                  <li>ជំនាញឆុងកាហ្វេ</li>
                  <li>ជំនាញគ្រប់គ្រងស្តុក</li>
                </ul>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4 text-center text-lg sm:text-xl">
                ជំនាញទាំងអស់នៅក្នុងសាលាបដិសណ្ឋារកិច្ច
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
                      "ការិយាល័យជួរមុខ",
                      "ផលិតកម្មម្ហូបអាហារ",
                      "សេវាកម្មម្ហូបអាហារ​ និងភេសជ្ជះ",
                      "គេហះកិច្ច",
                      "រចនាម៉ូតសក់ និងសម្ភស្ស",
                      "ឆុងកាហ្វេ និងដុតនំ",
                      "ចម្អិនម្ហូប",
                    ].map((skill, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"} 
                      >
                        <td className="px-4 py-3 text-gray-800">
                          {`០${idx + 1}`}
                        </td>
                        <td className="px-4 py-3 text-gray-800">
                          {skill}
                        </td>
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

export default SOH;
