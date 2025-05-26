import Header from "../../components/header";
import Footer from "../../components/footer";

const SOH = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-blue-900 text-white py-3 px-4 text-start font-semibold text-khmer text-2xl">
          បដិសណ្ឋារកិច្ច
        </div>

        <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
        <div className="flex-1 p-6 sm:p-10 lg:p-12 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-orange-600 text-center leading-tight">
                  សូមស្វាគមន៍មកកាន់សាលាបដិសណ្ឋារកិច្ច
                </h1>
              </div>
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
           

              {/* Right Cards */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-start p-6 md:p-8">
                {/* Blue Card */}
                <div className="bg-[#004e7c] text-white p-6 rounded-xl w-full md:w-[350px] shadow-md">
                  <h2 className="text-2xl font-bold mb-4 leading-snug">
                    ជំនាញការិយាល័យជួរមុខ FRONT OFFICE
                  </h2>
                  <ul className="list-decimal list-inside space-y-2 text-2xl leading-relaxed">
                    <li>បដិសណ្ឋារកិច្ចទូទៅ</li>
                    <li>ជំនាញទំនាក់ទំនង</li>
                    <li>វិជ្ជាជីវះបម្រើភ្ញៀវទេសចរណ៏</li>
                    <li>ការប្រើប្រាស់កុំព្យូទ័រសម្រាប់ការិយាល័យ</li>
                    <li>ការគិតលុយពីភ្ញៀវ</li>
                  </ul>
                </div>

                {/* Orange Card */}
                <div className="bg-[#f26c23] text-white p-6 rounded-xl w-full md:w-[350px] shadow-md">
                  <h2 className="text-2xl font-bold mb-4 leading-snug">
                    ជំនាញផលិតកម្មម្ហូបអាហារ​​​ Food Production (FP)
                  </h2>
                  <ul className="list-decimal list-inside space-y-2 text-2xl leading-relaxed">
                    <li>ឯកទេសចម្អិនម្ហូប</li>
                    <li>ឯកទេសធ្វើនំ</li>
                  </ul>
                </div>

                {/* Teal Card */}
                <div className="bg-[#0DABAB] text-white p-6 rounded-xl w-full md:w-[350px] shadow-md">
                  <h2 className="text-2xl font-bold mb-4 leading-snug">
                    ជំនាញសេវាកម្មម្ហូបអាហារ និងភេសជ្ជះ
                    <br />
                    បរិក្ខាត្រជាក់
                  </h2>
                  <ul className="list-decimal list-inside space-y-2 text-2xl leading-relaxed">
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
              <div className="px-6 py-4">
                <h3 className="text-2xl font-bold px-2">
                  ជំនាញទាំងអស់នៅក្នុងសាលាបដិសណ្ឋារកិច្ច
                </h3>
              </div>

              <div className="overflow-x-auto px-6 pb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="px-6 py-3 text-left text-2xl font-semibold border border-orange-600">
                        លេខ
                      </th>
                      <th className="px-6 py-3 text-left text-2xl font-semibold border border-orange-600">
                        ជំនាញ
                      </th>
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
                        className={idx % 2 === 0 ? "bg-gray-200" : "bg-white"}
                      >
                        <td className="px-6 py-3 text-2xl text-gray-800 border border-gray-300">
                          {`០${idx + 1}`}
                        </td>
                        <td className="px-6 py-3 text-2xl text-gray-800 border border-gray-300">
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
