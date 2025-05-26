import Header from "../../components/header";
import Footer from "../../components/footer";

const SOH = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-blue-900 text-white py-2 px-2 text-start text-sm font-semibold text-khmer">
          បដិសណ្ឋារកិច្ច
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-2 sm:p-8 lg:p-10">
                <div className="space-y-2">
                  <h1 className="text-sm lg:text-3xl font-bold text-orange-600 text-center">
                    សូមស្វាគមន៍មកកាន់សាលាបដិសណ្ឋារកិច្ច
                  </h1>
                </div>
              </div>

              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-6">
                {/* Blue Card */}
                <div className="bg-[#004e7c] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-sm font-bold leading-tight">
                      ជំនាញការិយាល័យជួរមុខ FRONT OFFICE
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>បដិសណ្ឋារកិច្ចទូទៅ</li>
                    <li>ជំនាញទំនាក់ទំនង</li>
                    <li>វិជ្ជាជីវះបម្រើភ្ញៀវទេសចរណ៏</li>
                    <li> ការប្រើប្រាស់កុំព្យូទ័រសម្រាប់ការិយាល័យ</li>
                    <li> ការគិតលុយពីភ្ញៀវ</li>
                  </ul>
                </div>

                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-sm font-bold leading-tight">
                      ជំនាញផលិតកម្មម្ហូបអាហារ​​​ Food Production (FP)
                      <br />
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>ឯកទេសចម្អិនម្ហូប</li>
                    <li>ឯកទេសធ្វើនំ</li>
                  </ul>
                </div>
                {/* Orange Card */}
                <div className="bg-[#0DABAB] text-white p-2 rounded-xl w-full md:w-[350px] shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-sm font-bold leading-tight">
                      ជំនាញសេវាកម្មម្ហូបអាហារ និងភេសជ្ជះ
                      <br />
                      បរិក្ខាត្រជាក់
                    </h2>
                  </div>
                  <ul className="list-decimal list-inside leading-relaxed pl-1 mt-2 text-sm">
                    <li>ជំនាញផ្តល់សេវាកម្មម្ហូបអាហារនិងភេសជ្ជះ</li>
                    <li>ជំនាញស្រាក្រឡុក</li>
                    <li>ជំនាញឆុងកាហ្វេ</li>
                    <li>ជំនាញគ្រប់គ្រងស្តុក</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-gray-50">
              <div className=" px-4 py-4">
                <h3 className="text-sm font-bold px-4">
                  ជំនាញទាំងអស់នៅក្នុងសាលាបដិសណ្ឋារកិច្ច
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
                      <td className="px-6 py-3 text-sm text-gray-800">
                        ការិយាល័យជួរមុខ
                      </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០២</td>
                      <td className="px-6 py-3 text-sm text-gray-800">
                        ផលិតកម្មម្ហូបអាហារ
                      </td>
                    </tr>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៣</td>
                      <td className="px-6 py-3 text-sm text-gray-800">
                        {" "}
                        សេវាកម្មម្ហូបអាហារ​ និងភេសជ្ជះ
                      </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៤</td>
                      <td className="px-6 py-3 text-sm text-gray-800">
                        គេហះកិច្ច
                      </td>
                    </tr>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៥</td>
                      <td className="px-6 py-3 text-sm text-gray-800">
                        រចនាម៉ូតសក់ និងសម្ភស្ស
                      </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៦</td>
                      <td className="px-6 py-3 text-sm text-gray-800">
                        ឆុងកាហ្វេ និងដុតនំ
                      </td>
                    </tr>
                    <tr className="bg-gray-200 border-b border-gray-300">
                      <td className="px-6 py-3 text-sm text-gray-800">០៧</td>
                      <td className="px-6 py-3 text-sm text-gray-800">
                        ចម្អិនម្ហូប
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SOH;
