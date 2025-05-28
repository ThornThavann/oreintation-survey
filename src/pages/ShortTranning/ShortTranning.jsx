import Header from "../../components/header";
import Footer from "../../components/footer";
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
      
      <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-base sm:text-xl">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Title */}
          <h1 className="text-lg sm:text-2xl font-bold text-orange-600 text-center mb-2">
            ជម្រើសមុខជំនាញ និងរយៈពេលបណ្តុះបណ្តាលសម្រាប់ជំនាញវគ្គខ្លី
          </h1>

          {/* Grid Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 text-sm lg:grid-cols-3 gap-8 text-center">
            {/* Skill Cards */}
            {[
              {
                icon: <FaCut className="w-8 h-8 mb-2 mx-auto text-blue-900" />,
                title: "រចនាម៉ូតសក់",
                desc: "សិក្សារយៈពេល៧ខែ (៦ខែទ្រឹស្តី និងអនុវត្តក្នុងសាលា ១ខែចុះហាត់ការក្នុងក្រុមហ៊ុន)",
              },
              {
                icon: <FaUtensils className="w-8 h-8 mb-2 mx-auto text-blue-900" />,
                title: "ចម្អិនម្ហូប",
                desc: "សិក្សារយៈពេល៤ខែ (ទ្រឹស្តី និងអនុវត្តក្នុងសាលា)",
              },
              {
                icon: <FaPaintBrush className="w-8 h-8 mb-2 mx-auto text-blue-900" />,
                title: "សេវាកម្មសម្អាងកាយ (មុខ និងក្រចក)",
                desc: "សិក្សារយៈពេល៧ខែ (៦ខែទ្រឹស្តី និងអនុវត្តក្នុងសាលា ១ខែចុះហាត់ការក្នុងក្រុមហ៊ុន)",
              },
              {
                icon: <FaSoap className="w-8 h-8 mb-2 mx-auto text-blue-900" />,
                title: "ឆុងកាហ្វេ និងដុតនំ",
                desc: "សិក្សារយៈពេល៤ខែ (ទ្រឹស្តី និងអនុវត្តក្នុងសាលា)",
              },
              {
                icon: <FaGraduationCap className="w-8 h-8 mb-2 mx-auto text-blue-900" />,
                title: "គេហកិច្ច",
                desc: "សិក្សារយៈពេល៧ខែ (៤ខែទ្រឹស្តី និងអនុវត្តក្នុងសាលា ៣ខែចុះហាត់ការក្នុងក្រុមហ៊ុន)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                {item.icon}
                <h2 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="https://www.pse.ngo/sites/default/files/images/paragraphs/formations_professionnelles.jpg"
              alt="Training 1"
              className="w-full rounded-xl shadow-lg"
            />
            <img
              src="https://www.pse.ngo/sites/default/files/coiffure_esthetique.jpg"
              alt="Training 2"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
