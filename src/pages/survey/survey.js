import Button from "../../components/button.js";
import { Link } from "react-router-dom";

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
      {/* Section: Note */}
      <div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "#4361EE" }}>
          ចំណាំ
        </h3>

        <div className="space-y-9">
          <p className="leading-8">
            ១​ មិនចូលចិត្ត​​ (០%)
            <br />
            ២ ចូលចិត្តតិចៗ​​ ​​ (​៥០%)
            <br />
            ៣ ចូលចិត្ត​ល្មម​​ ​ (៨០%)
            <br />៤ ចូលចិត្តខ្លាំងណាស់​​ (១០០%)
          </p>
        </div>
      </div>

      <h2
        className="text-2xl font-bold text-center"
        style={{ color: "#4361EE" }}
      >
        កម្រងសំណួរស្វែងយល់អំពី ចំណូលចិត្ត
      </h2>

      <p className=" text-center">
      ដើម្បីស្វែងយល់អំពីចំណូលចិត្តរបស់អ្នកចំពោះការសិក្សាឬមុខជំនាញតម្រូវឲ្យធ្វើការឆ្លើយចំពោះកម្រងសំណួរចំនួន ១៥ ផ្នែកដែលតំណាងឲ្យអាជីពឬមុខជំនាញសិក្សាដែលមាននៅក្នុងវិទ្យាស្ថាន ប៉េ អេស​ អឺ ។ ដូច្នេះ ដើម្បីអាចជួយឲ្យដឹងថា តើអ្នកមានទំនោរនិងចំណូលចិត្តទៅលើអាជីពឬមុខជំនាញសិក្សាណាជាងគេ។សូមព្យាយាមឆ្លើយនៅកម្រងសំណួរទាំង ១៥ ផ្នែកដោយយកចិត្តទុកដាក់និងឲ្យចប់សព្វគ្រប់ព្រមទាំងស្វែងរក ពិន្ទុសរុបខ្ពស់បំផុត សម្រាប់វាយតម្លៃចំណូលចិត្តរបស់អ្នក។ សូមអរគុណសម្រាប់ការចូលរួមរបស់អ្នក។
      </p>

      {/* Table 1: គណនេយ្យ */}
      <div>
        <h3 className="text-xl font-bold mb-4">កម្រងសំណូរផ្នែកទី ១</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">សំនួរ</th>
                {[1, 2, 3, 4].map((n) => (
                  <th key={n} className="border px-4 py-2 text-center">
                    {n}
                  </th>
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
        <h3 className="text-xl font-bold mb-4">កម្រងសំណូរផ្នែកទី​ ២</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">សំនួរ</th>
                {[1, 2, 3, 4].map((n) => (
                  <th key={n} className="border px-4 py-2 text-center">
                    {n}
                  </th>
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

       {/* Table ៣: រដ្ឬាវាល */}
       <div>
        <h3 className="text-xl font-bold mb-4">កម្រងសំណូរផ្នែកទី​ ៣</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">សំនួរ</th>
                {[1, 2, 3, 4].map((n) => (
                  <th key={n} className="border px-4 py-2 text-center">
                    {n}
                  </th>
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
        <Link to="/Result">
          <Button name="បង្ហាញលទ្ធផល" />
        </Link>
      </div>
    </div>
  );
}
