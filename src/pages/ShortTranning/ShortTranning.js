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
          កម្មវិធីវិជ្ជាជីវៈ និងការងារ៖ ហាត់ប្រាណជល់ជាក់
        </h1>

        <div className="grid grid-cols-2 gap-8">
          {/* 1 */}
          <div>
            <FaCut className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">ជាងមាត់សក់</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              សិក្សារយៈពេល ១ឆ្នាំ (ជាស្រីៗ និងអតីតសិស្សសាលា ១២ឆ្នាំ; មានទីតាំងសិក្សាផ្ទាល់)
            </p>
          </div>

          {/* 2 */}
          <div>
            <FaUtensils className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">ចុងភៅធំ</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              សិក្សារយៈពេល ១ឆ្នាំ (ប្រុសស្រីទាំងអស់; មានទីតាំងសិក្សាផ្ទាល់)
            </p>
          </div>

          {/* 3 */}
          <div>
            <FaPaintBrush className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">សេវាកម្មសោភណភាព</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              សិក្សារយៈពេល ១ឆ្នាំ (ជាស្រីៗ; មានទីតាំងសិក្សាផ្ទាល់)
            </p>
          </div>

          {/* 4 */}
          <div>
            <FaSoap className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">ជាងម៉ូតូ និងជាងឥន្ទនៈ</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              សិក្សារយៈពេល ១ឆ្នាំ (ប្រុសស្រីទាំងអស់; មានទីតាំងសិក្សាផ្ទាល់)
            </p>
          </div>

          {/* 5 */}
          <div>
            <FaGraduationCap className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">ការិយាល័យ</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              សិក្សារយៈពេល ១ឆ្នាំ (ប្រុសស្រីទាំងអស់; មានការសិក្សានៅកន្លែងធ្វើការ និងថ្នាក់សិក្សា)
            </p>
          </div>

          {/* 6 */}
          <div>
            <FaGraduationCap className="text-blue-900 w-12 h-12 mb-2" />
            <p className="text-3xl font-bold text-blue-900">គណនេយ្យ</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              សិក្សារយៈពេល ១ឆ្នាំ (ប្រុសស្រីទាំងអស់; មានទីតាំងសិក្សាផ្ទាល់)
            </p>
          </div>
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
