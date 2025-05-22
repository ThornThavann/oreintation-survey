import Button from "../../components/button";
import { Link } from "react-router-dom";

export default function Information() {
    return (
      <div className="max-w-4xl mx-auto mt-3 p-6 bg-white rounded shadow space-y-8">​    
        {/* Section: Personal Info */}
        <h2 className="text-2xl font-bold text-center" style={{ color: '#4361EE' }}>
          ព័ត៌មានផ្ទាល់ខ្លួន
        </h2>
  
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">សូមបំពេញឈ្មោះរបស់ប្អូន​ជាភាសាខ្មែរ។</span>
            <input
              type="text"
              name="username"
              className="mt-1 block w-full px-4 py-2 border  rounded-md shadow-sm focus:ring-2 "
            />
          </label>
  
          <label className="block">
            <span className="text-gray-700">សូមបំពេញអាយុរបស់ប្អូន។</span>
            <input
              type="number"
              name="age"
              className="mt-1 block w-full px-4 py-2 border  rounded-md shadow-sm focus:ring-2 "
            />
          </label>

          <label className="block">
            <span className="text-gray-700">សូមបំពេញលេខគ្រួសាររបស់ប្អូន​ (Ex:5796-4​)</span>
            <input
              type="number"
              name="age"
              className="mt-1 block w-full px-4 py-2 border  rounded-md shadow-sm "
            />
          </label>
          {}
          <div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#4361EE' }}>
            សូមជ្រើសរើសភេទរបស់ប្អូនខាងក្រោម។
          </h3>
  
          <div className="space-y-2">
            {["ប្រុស", "ស្រី", "សូមមិននិយាយ"].map((grade) => (
              <label key={grade} className="flex items-center gap-2">
                <input type="radio" name="grade" value={grade} />
                <span>{grade}</span>
              </label>
            ))}
          </div>
        </div>

        </div>
  
        {/* Section: School */}
        <div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#4361EE' }}>
            តើអ្នករៀននៅសាលាណា?
          </h3>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
            <option value="external">សាលាខាងក្រៅ</option>
            <option value="internal">ក្នុងវិទ្យាស្ថាន</option>
          </select>
        </div>
  
        {/* Section: Grade */}
        <div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#4361EE' }}>
            កម្រិតសិក្សាបច្ចុប្បន្ន៖
          </h3>
  
          <div className="space-y-2">
            {["ថ្នាក់ទី៧", "ថ្នាក់ទី៨", "ថ្នាក់ទី៩", "ថ្នាក់ទី១០", "ថ្នាក់ទី១១", "ថ្នាក់ទី១២"].map((grade) => (
              <label key={grade} className="flex items-center gap-2">
                <input type="radio" name="grade" value={grade} />
                <span>{grade}</span>
              </label>
            ))}
          </div>
        </div>
  

        <div className="text-center">
            <Link to="/Survey">
                <Button name="ចុចទីនេះ​​" />
            </Link>
        </div>
      </div>
    );
  }
  