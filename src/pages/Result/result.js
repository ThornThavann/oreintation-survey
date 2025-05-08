export default function ResultPage() {
  return (
    <div className="max-w-4xl mx-auto mt-3 p-6 bg-white rounded shadow space-y-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#4361EE]">
        តើកម្រងសំណួរផ្នែកណាមួយដែលមានចំនួនពិន្ទុច្រើនជាងគេ?
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-[#E37F0D] text-white">
              <tr>
                <th className="border px-4 py-2 text-left w-[5%]">ផ្នែក</th>
                <th className="border px-4 py-2 text-left  w-[75%]">មុខជំនាញ</th>
                <th className="border px-4 py-2 text-center w-[15%]">ចំនូនពិន្ទុ</th>
              </tr>
            </thead>

            <tbody>
              {[
                { part: 1, question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)", score: 80 },
                { part: 2, question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)", score: 70 }, 
                { part: 3, question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)", score: 90 },
                { part: 4, question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)", score: 80 },
                { part: 5, question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)", score: 70 }, 
                { part: 6, question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)", score: 90 },
                { part: 7, question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)", score: 80 },
                { part: 8, question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)", score: 70 }, 
                { part: 9, question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)", score: 90 },
                { part: 10, question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)", score: 80 },
                { part: 11, question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)", score: 70 }, 
                { part: 12, question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)", score: 90 },
                { part: 13, question: "រចនាម៉ូតសក់ និងសម្ភស្ស (មិនគិតពីកម្រិតសញ្ញបត្រ)", score: 80 },
                { part: 14, question: "ការថែទាំអគារ (ជាប់ថ្នាក់ទី៩)", score: 70 }, 
                { part: 15, question: "ការិយាល័យជូរមុខ​ (ជាប់ថ្នាក់ទី៩)", score: 90 },
              ].map((item, index) => (
                <tr key={index} >

                  <td className="border px-4 py-2">{item.part}</td>
                  <td className="border px-4 py-2">{item.question}</td>
                  <td className="border px-4 py-2 text-center">{item.score}</td>
                  

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
