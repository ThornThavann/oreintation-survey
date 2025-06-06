import Header from "../../components/header";
import Footer from "../../components/footer";

const SOB = () => {
  return (
    <>
      <Header />
      
      <div>
        <div className="bg-blue-900 text-white py-3 px-4 text-lg sm:text-2xl font-semibold text-khmer ">
          ពាណិជ្ជសាស្រ្ត
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-lg sm:text-xl">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden space-y-10">

            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1">
                <h1 className="text-lg sm:text-2xl font-bold text-orange-600 text-center mb-2">
                  សូមស្វាគមន៍មកកាន់សាលាពាណិជ្ជសាស្រ្ត
                </h1>
                <p className="leading-relaxed text-gray-700 mt-4 text-center text-base sm:text-xl font-semibold">
                  កម្រិតសញ្ញាបត្រ និងជំនាញ
                </p>
              </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {/* Card 1 */}
              <div className="bg-[#004e7c] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  សញ្ញាបត្របច្ចេកទេស និងវិជ្ជាជីវៈ <br />
                  (TVC) សិក្សា ២​ឆ្នាំ (C1 ដល់ C3)
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>សេវាកម្មរដ្ឋបាល</li>
                  <li>សេវាកម្មគណនេយ្យ</li>
                  <li>សេវាកម្មលក់</li>
                  <li>ការអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីលើទូរស័ព្ទដៃ</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  សញ្ញាបត្រជាន់ខ្ពស់បច្ចេកទេសសិក្សា ២ឆ្នាំ
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>គណនេយ្យ</li>
                  <li>ការគ្រប់គ្រងធនធានមនុស្ស</li>
                  <li>ការគ្រប់គ្រងធុរៈកិច្ចលក់រាយ</li>
                </ul>
              </div>
            </div>

            {/* Skills Table */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4 text-center text-lg sm:text-xl">
                ជំនាញទាំងអស់នៅក្នុងសាលាពាណិជ្ជសាស្រ្ត
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
                      "សេវាកម្មរដ្ឋបាល",
                      "សេវាកម្មគណនេយ្យ",
                      "សេវាកម្មលក់",
                      "ការអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីលើទូរស័ព្ទដៃ",
                      "គណនេយ្យ",
                      "ការគ្រប់គ្រងធនធានមនុស្ស",
                      "ការគ្រប់គ្រងធុរៈកិច្ចលក់រាយ",
                    ].map((skill, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        } `}
                      >
                        <td className="px-4 py-3 text-gray-800">{`០${index + 1}`}</td>
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

export default SOB;
