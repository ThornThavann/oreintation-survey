export default function ResultPage() {
  return (
    <div className="max-w-4xl mx-auto mt-3 p-6 bg-white rounded shadow space-y-8">

       <h1 className="text-2xl font-bold mb-4  text-[#4361EE]">
        តម្លៃរបស់ពិន្ទុ​ នៃចំណូលចិត្ត
      </h1>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-[#E37F0D] text-white">
          <tr>
            <th className="border px-4 py-2  w-[33.33%] text-center">
              កម្រិតទាប
            </th>
            <th className="border px-4 py-2 text-center  w-[33.33%]">
              កម្រិតមធ្យម
            </th>
            <th className="border px-4 py-2 text-center w-[33.33%]">
              កម្រិតខ្ពស់
            </th>
          </tr>
        </thead>

        <tbody className="text-center text-xl font-semibold">
          {[
            {
              low: "ពិន្ទុ ៦ - ១២",
              soso: "ពិន្ទុ ១៣ - ​១៨",
              hight: "ពិន្ទុ ១៩ - ២០",
            },
          ].map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.low}</td>
              <td className="border px-4 py-2">{item.soso}</td>
              <td className="border px-4 py-2 text-center">{item.hight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Section: Note */}
      <h1 className="text-2xl font-bold mb-4  text-[#4361EE]">
        តើកម្រងសំណួរផ្នែកណាមួយដែលមានចំនួនពិន្ទុច្រើនជាងគេ?
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-[#E37F0D] text-white">
              <tr>
                <th className="border px-4 py-2 text-left w-[5%]">ផ្នែក</th>
                <th className="border px-4 py-2 text-left  w-[75%]">
                  មុខជំនាញ
                </th>
                <th className="border px-4 py-2 text-center w-[15%]">
                  ចំនូនពិន្ទុ
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  part: 1,
                  question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)",
                  score: 80,
                },
                {
                  part: 2,
                  question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)",
                  score: 70,
                },
                {
                  part: 3,
                  question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)",
                  score: 90,
                },
                {
                  part: 4,
                  question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)",
                  score: 80,
                },
                {
                  part: 5,
                  question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)",
                  score: 70,
                },
                {
                  part: 6,
                  question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)",
                  score: 90,
                },
                {
                  part: 7,
                  question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)",
                  score: 80,
                },
                {
                  part: 8,
                  question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)",
                  score: 70,
                },
                {
                  part: 9,
                  question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)",
                  score: 90,
                },
                {
                  part: 10,
                  question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)",
                  score: 80,
                },
                {
                  part: 11,
                  question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)",
                  score: 70,
                },
                {
                  part: 12,
                  question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)",
                  score: 90,
                },
                {
                  part: 13,
                  question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)",
                  score: 80,
                },
                {
                  part: 14,
                  question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)",
                  score: 70,
                },
                {
                  part: 15,
                  question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)",
                  score: 90,
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.part}</td>
                  <td className="border px-4 py-2">{item.question}</td>
                  <td className="border px-4 py-2 text-center">{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
       {/* Section: Note */}
      <h1 className="text-2xl font-bold mb-4  text-[#4361EE]">សេចក្តីពន្យល់៖</h1>
      <div className="space-y-2 text-base leading-relaxed">
        <p>
          <span className="font-bold">កម្រិតទាប</span>៖ មានន័យថាចំណូលចិត្តរបស់អ្នកមិនសូវបង្ហាញពីសារៈសំខាន់ដែលអាចនាំរូបអ្នកឆ្ពោះទៅរកភាពជោគជ័យក្នុងការសិក្សាឬអាជីពនោះបានឡើយ។
        </p>

        <p>
          <span className="font-bold">កម្រិតមធ្យម</span>៖ បញ្ជាក់ថាចំណូលចិត្តរបស់អ្នកអាចជាការធានាថាអ្នកនឹងនាំរូបអ្នកទៅដល់ភាពជោគជ័យក្នុងការសិក្សា។ឬអាជីពប្រសិនបើមានការខិតខំប្រឹងប្រែងបន្ថែមទៀតក្នុងការបំពេញកិច្ចការនោះ។
        </p>

        <p>
          <span className="font-bold">កម្រិតខ្ពស់</span>៖ ជាប្រការល្អបំផុតប្រសិនបើអ្នកមានបំណងចាប់យកមកជំនាញសិក្សាឬអាជីពនោះពីព្រោះវាជាកត្តាមួយដែលអាចនាំឲ្យអ្នកចំពោះទៅរកភាពជោគជ័យបានដោយងាយស្រួល។
        </p>
      </div>

      {/* Section: Note */}
      <h1 className="text-2xl font-bold mb-4 text-[#4361EE]">គូរយល់ដឹង</h1>
      <div className="space-y-2 text-base leading-relaxed">
        <p>
          ប្រសិនបើលពិនិត្យឃើញថា​ កម្រងសំណូរណាមូយមានចំនួនពិន្ទុច្រើនជាងគេបំផុត​ នោះបញ្ជាក់ថា អ្នកគូរពិចារណាជ្រើសរើស 
          <span className="font-bold">មុខជំនាញសិក្សា រឺអាជីព</span>
          នោះ ពីព្រោះអ្នកមានទំនោរ និង 
          <span className="font-bold">ចូលចិត្តខ្លាំងជាងគេ។</span>
        </p>
      </div>

      {/* Section: Note */}
      <h1 className="text-2xl font-bold mb-4 text-[#4361EE]">កំណត់ចំណាំ</h1>
      <div className="space-y-2 text-base leading-relaxed">
        <p>
         -ជំនាញដែលទាមទារអោយប្អូនជាប់ថ្នាក់ទី៩ (រឺមានសញ្ញបត្រស្ពានចម្លង) → ទទួលបានសញ្ញបត្របច្ចេកទេសនិងវិជ្ជាជីវៈ C3 (សមមូលទី១២) នៅពេលចប់ពីសាលាជំនាញ។
        </p>

        <p>
         -ជំនាញដែលទាមទារអោយប្អូនជាប់ រឺធ្លាក់ថ្នាក់ទី១២​​​ → ទទួលបានសញ្ញបត្ររងបច្ចេកទេស នៅពេលចប់ពីសាលាជំនាញ។
        </p>

        <p>
         -ជំនាញដែលទាមទារអោយប្អូនជាប់ថ្នាក់ទី១២​​​ → ទទួលបានសញ្ញបត្របរិញ្ញាបត្របច្ចេកវិទ្យា នៅពេលចប់ពីសាលាជំនាញ។
        </p>

        <p>
         -ជំនាញដែលមិនទាមទារកម្រិតសញ្ញបត្របរិញ្ញាបត្រ → ជាជំនាញវគ្គខ្លី។
        </p>

        
      </div>
    </div>
  );
}
