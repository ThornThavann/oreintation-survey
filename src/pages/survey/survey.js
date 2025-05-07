export default function Survey() {
  const questions = [
    "តើអ្នកស្គាល់ផ្នែកពិតប្រាកដនៃចំណេះដឹងរបស់អ្នកទេ?",
    "តើអ្នកអាចបែងចែក frontend និង backend បានទេ?",
    "តើអ្នកអាចពិពណ៌នាអំពីការងាររបស់អ្នក បានទេ?",
    "តើអ្នកអាចដោះស្រាយបញ្ហាដែលជាបញ្ហាធម្មតាៗ (problem-solving) បានទេ?",
    "តើអ្នកអាចធ្វើការជាក្រុមជាមួយអ្នកដទៃបានល្អទេ?",
    "តើអ្នកអាចអានឯកសារបច្ចេកទេសបានទេ?",
    "តើអ្នកចេះប្រើ Git និង GitHub ទេ?",
    "តើអ្នកស្គាល់ Framework ឬ Library មួយ?",
    "តើអ្នកអាចធ្វើការជាមួយ Database បានទេ?",
    "តើអ្នកអាចអនុវត្តអ្វីដែលបានរៀនបានទេ?",
    "តើអ្នកចេះរៀបចំគម្រោងកូដរបស់អ្នកឲ្យមានលក្ខណៈល្អទេ?",
    "តើអ្នកមានចំណេះដឹងអំពី UI/UX ទេ?",
    "តើអ្នកអាចអភិវឌ្ឍគម្រោងដោយប្រើភាសាដែលបានរៀនទេ?",
    "តើអ្នកគិតថាអ្នកអាចបន្តការសិក្សាបានទេ?",
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-8">
      {/* Section: Personal Info */}
      <h2 className="text-2xl font-bold text-center">ព័ត៌មានផ្ទាល់ខ្លួន</h2>

      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">ឈ្មោះ ៖</span>
          <input
            type="text"
            name="username"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">អាយុ ៖</span>
          <input
            type="number"
            name="age"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Section: School */}
      <div>
        <h3 className="text-xl font-semibold mb-2">តើអ្នករៀននៅសាលាណា?</h3>
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
          <option value="external">សាលាខាងក្រៅ</option>
          <option value="internal">ក្នុងវិទ្យាស្ថាន</option>
        </select>
      </div>

      {/* Section: Favorite Language */}
      <div>
        <h3 className="text-lg font-semibold mb-2">ភាសាដែលអ្នកចូលចិត្ត</h3>
        <div className="space-y-2">
          {["HTML", "CSS", "JavaScript"].map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input type="radio" name="fav_language" value={lang} />
              <span>{lang}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Table 1: គណនេយ្យ */}
      <div>
        <h3 className="text-xl font-bold mb-4">តារាងទី ១៖ គណនេយ្យ</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">សំនួរ</th>
                {[1, 2, 3, 4].map((n) => (
                  <th key={n} className="border px-4 py-2 text-center">{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {questions.map((q, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border px-4 py-2">{q}</td>
                  {[1, 2, 3, 4].map((n) => (
                    <td key={n} className="border text-center">
                      <input type="radio" name={`q1_${index}`} value={n} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: រដ្ឬាវាល */}
      <div>
        <h3 className="text-xl font-bold mb-4">តារាងទី ២៖ រដ្ឬាវាល</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">សំនួរ</th>
                {[1, 2, 3, 4].map((n) => (
                  <th key={n} className="border px-4 py-2 text-center">{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {questions.map((q, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border px-4 py-2">{q}</td>
                  {[1, 2, 3, 4].map((n) => (
                    <td key={n} className="border text-center">
                      <input type="radio" name={`q2_${index}`} value={n} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          ដាក់បញ្ជូន
        </button>
      </div>
    </div>
  );
}
