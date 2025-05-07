import Result from "../../components/result";

export default function Result() {
  const items = [
    "១ រយៈពេលខ្លីកម្ចី (មិនតិចជាងប្រាំមួយខែ)",
    "២ រយៈពេលមធ្យមកម្ចី (មិនតិចជាងមួយឆ្នាំ)",
    "៣ រយៈពេលវែងកម្ចី (មិនតិចជាងបីឆ្នាំ)",
    "៤ រយៈពេលអចិន្ត្រៃយ៍កម្ចី (មិនមានកាលកំណត់)",
  ];

  return (
    <div className="max-w-4xl mx-auto mt-3 p-6 bg-white rounded shadow space-y-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#4361EE]">
        តើកម្រងសំណួរផ្នែកណាមួយដែលមានចំនួនពិន្ទុច្រើនជាងគេ?
      </h1>

      <div className="bg-[#e67e22] p-6 rounded-md shadow-md text-center text-white">
        <h2 className="text-xl mb-8">ចំនួនពិន្ទុ</h2>

        <h1 className="text-2xl font-bold mb-6">Khmer Items</h1>

        {/* Display all items with spacing */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <Result key={index} text={item} />
          ))}
        </div>

        {/* Optional Extra Notes (uncomment if needed) */}
        {/*
        <div className="text-left space-y-3 text-lg mt-6">
          <p>W: ការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ (Web mobile app development)</p>
          <p>A: គណនេយ្យ (Accounting)</p>
          <p>S: លក់ (Sell)</p>
          <p>M: ទីផ្សារ (Marketing)</p>
        </div>
        */}
      </div>
    </div>
  );
}

