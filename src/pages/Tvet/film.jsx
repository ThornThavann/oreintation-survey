import Header from "../../components/header";
import Footer from "../../components/footer";

const FILM = () => {
  return (
    <>
      <Header />

      <div>
        {/* Title Bar */}
        <div className="bg-blue-900 text-white py-3 px-4 text-lg sm:text-2xl font-semibold text-khmer">
          ភាពយន្ត
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-lg sm:text-xl">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden space-y-10">

            {/* Welcome Text */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1">
                <h1 className="text-lg sm:text-2xl font-bold text-orange-600 text-center mb-2">
                  សូមស្វាគមន៍មកកាន់សាលាភាពយន្ត
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
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl flex items-center gap-2">
                  បរិញ្ញាបត្រ (BD) - សិក្សា ៣ ឆ្នាំ
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>ឯកទេសថតភាពយន្ត</li>
                  <li>ឯកទេសកាត់ត និងកែពណ៌ភាពយន្ត</li>
                  <li>វិស្វករសំលេងក្នុងភាពយន្ត</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f26c23] text-white p-6 rounded-2xl w-full md:w-[350px] shadow-lg flex flex-col">
                <h2 className="font-semibold mb-4 leading-tight text-base sm:text-xl">
                  លក្ខណៈវិនិច្ឆ័យចូលរៀន
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base flex-1">
                  <li>ប្រឡងជាប់ថ្នាក់ទី១២ រឺសញ្ញាបត្រដែលមានតម្លៃស្មើ</li>
                  <li>កម្រិតភាសាអង់គ្លេសល្អបង្គូរ</li>
                </ul>
              </div>
            </div>

            {/* Skills Table */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4 text-center text-lg sm:text-xl">
                ជំនាញទាំងអស់នៅក្នុងសាលាភាពយន្ត
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
                      "ជំនាញថតភាពយន្ត",
                      "ជំនាញកាត់តភាពយន្ត",
                      "ជំនាញកែពណ៌ភាពយន្ត",
                      "វិស្វករសំលេងក្នុងភាពយន្ត",
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

export default FILM;
