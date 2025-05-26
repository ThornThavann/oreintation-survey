import React from "react";
import Header from "../../components/header";
import {
  FaCut,
  FaUtensils,
  FaPaintBrush,
  FaSoap,
  FaGraduationCap,
} from "react-icons/fa";

export default function ShortTranning() {
  return (
    <>
      <Header />
      <div className="px-4 py-8 max-w-screen-xl mx-auto short-tranning font-sans leading-relaxed text-sm text-gray-800">
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-900 mb-8">
        ជម្រើសមុខជំនាញ និងរយៈពេលបណ្តុះបណ្តាលសម្រាប់ជំនាញវគ្គខ្លី        </h1>

        <div className="grid grid-cols-2 gap-8">
          {/* 1 */}
          <div>
            <FaCut className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">រចនាម៉ូតសក់</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
            សិក្សារយៈពេល៧ខែ (៦ខែទ្រឹស្តី និងអនុវត្តក្នុងសាលា ១ខែចុះហាត់ការក្នុងក្រុមហ៊ុន)            </p>
          </div>

          {/* 2 */}
          <div>
            <FaUtensils className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">ចម្អិនម្ហូប</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
            សិក្សារយៈពេល៤ខែ (ទ្រឹស្តី និងអនុវត្តក្នុងសាលា)            </p>
          </div>

          {/* 3 */}
          <div>
            <FaPaintBrush className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">សេវាកម្មសម្អាងកាយ (មុខ និងក្រចក)</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
            សិក្សារយៈពេល៧ខែ (៦ខែទ្រឹស្តី និងអនុវត្តក្នុងសាលា ១ខែចុះហាត់ការក្នុងក្រុមហ៊ុន)            </p>
          </div>

          {/* 4 */}
          <div>
            <FaSoap className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">ឆុងកាហ្វេ និងដុតនំ</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
            សិក្សារយៈពេល៤ខែ (ទ្រឹស្តី និងអនុវត្តក្នុងសាលា)            </p>
          </div>

          {/* 5 */}
          <div>
            <FaGraduationCap className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">គេហកិច្ច</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
            សិក្សារយៈពេល៧ខែ (៤ខែទ្រឹស្តី និងអនុវត្តក្នុងសាលា ៣ខែចុះហាត់ការក្នុងក្រុមហ៊ុន)            </p>
          </div>

          {/* 6 */}
          
        </div>

        <div className="mt-10 flex gap-4 justify-center">
          <img
            src="https://www.pse.ngo/sites/default/files/images/paragraphs/formations_professionnelles.jpg"
            alt="Training 1"
            className="w-1/2 rounded shadow-lg"
          />
          <img
            src="https://www.pse.ngo/sites/default/files/coiffure_esthetique.jpg"
            alt="Training 2"
            className="w-1/2 rounded shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
