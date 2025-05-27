import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="px-8 py-10 max-w-7xl
       mx-auto font-sans"
      >
        {/* Title */}
        <h1 className="text-xl sm:text-4xl font-extrabold text-blue-900 mb-10 text-center sm:text-left leading-tight">
          អំពីអង្គការដើម្បីភាពញញឹមនៃកុមារ
        </h1>

        {/* Text and images grid */}
        <p className="text-sm sm:text-lg mb-16   leading-relaxed lg:leading-loose">
          អង្គការដើម្បីភាពញញឹមនៃកុមារ (ប៉េ អេស អឺ) មានកុមារជាង ៦៥០០ នាក់ត្រូវបាន
          មើលថែរក្សាយ៉ាងយកចិត្តទុកដាក់ជារៀងរាល់ឆ្នាំ ក្នុងនោះមានយុវជនចំនួន ៥៥០០
          នាក់ត្រូវបានមើលថែរក្សាយ៉ាងយកចិត្តទុកដាក់ជារៀងរាល់ឆ្នាំក្នុងនោះមានយុវជន
          ចំនួន ៥៥០០ នាក់ជាអតីតសិស្សដែលបច្ចុប្បន្នពួកគេ ទទួលបាននូវការងារ
          និងកុមារ ចំនួន ១២០០ នាក់ត្រូវបានជួយសង្គ្រោះចេញពីទុក្ខវេទនា
          រួមជាមួយជំនាញ​បណ្តុះ បណ្តាលវិជ្ជាជីវៈចំនួន ២០
          ត្រូវបានផ្តល់ជូនដោយឥតគិតថ្លៃ អាហារ ៦០០០ ចានត្រូវ បានផ្តល់ជូនដល់ពួកគេ
          និងការពិគ្រោះព្យាបាលជំងឺចំនួន ១៥០០ នាក់ជារៀងរាល់ សប្តាហ៍។ ប៉េ អេស អឺ
          ជាអង្គការមួយដែលមិនរកប្រាក់ចំនូលរបស់ប្រទេសបារាំងនិងបានបង្កើត ឡើងនៅឆ្នាំ
          ១៩៩៦ ក្នុងប្រទេសកម្ពុជា មានបុគ្គលិកបម្រើការងារជាង ៦០០ នាក់
          ដើម្បីចូលរួមបំពេញបេសកកម្មក្នុងការផ្តល់ជូនស្បៀងអាហារ ទីជម្រកសមរម្យ
          ការថែទាំវេជ្ជសស្ត្រ ការអប់រំចំណេះដឹងទូទៅពីថ្នាក់ទី ១ ដល់ថ្នាក់ទី ១២
          និងការបណ្តុះ បណ្តាលវិជ្ជាជីវៈជំនាញ
          និងកម្មវិធីគាំទ្រគ្រួសារដល់កុមារក្រីក្រ ងាយរងគ្រោះពីការ រំលោភបំពាន
          និងមិនបានសិក្សានៅក្នុងរាជធានីភ្នំពេញ ខេត្តសៀមរាប និងខេត្តព្រះសីហនុ
          និងតាមបណ្តាលខេត្តក្រុងនានាក្នុងប្រទេសកម្ពុជា ដោយចុះទៅដល់ទីតាំងផ្ទាល់។
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
          <img
            src="https://gdb.voanews.com/ea562594-05dd-4e26-a3e0-e2d05e393ca2_w1080_h608.jpg"
            alt="Children learning and playing at school"
            className="w-full h-64 sm:h-[400px] object-cover rounded shadow-lg"
          />
          <div className="bg-orange-500 text-white p-5 rounded shadow-lg flex items-center">
            <p className="text-sm sm:text-lg  leading-relaxed sm:leading-loose font-medium max-w-prose ">
              នាំកុមារចាកចេញពីភាពក្រីក្រទៅកាន់​ការងារអាជីព តាមរយៈកម្មវិធីអប់រំ
              និងបណ្តុះបណ្តាលជំនាញ និងកម្មវិធីគាំទ្រផ្សេងៗទៀត។
            </p>
          </div>

          <img
            src="https://www.pse.ngo/sites/default/files/images/news/20727922_1543636915694370_8187878986579341512_n.jpg"
            alt="Group of children attending training"
            className="w-full h-64 sm:h-[400px] object-cover rounded shadow-lg"
          />
          <img
            src="https://www.pse.ngo/sites/default/files/images/paragraphs/formations_professionnelles.jpg"
            alt="Vocational training in progress"
            className="w-full h-64 sm:h-[400px] object-cover rounded shadow-lg"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center mb-16">
          <div className="bg-gray-100 p-10 rounded shadow-md">
            <div className="text-lg  font-bold text-orange-600 mb-3 ">
              +៦៥០០នាក់
            </div>
            <p className="text-sm sm:text-lg text-gray-700">
              ស្ថិតក្នុងកម្មវិធីប្រចាំឆ្នាំ
            </p>
          </div>
          <div className="bg-gray-100 p-10 rounded shadow-md">
            <div className="text-lg font-bold text-orange-600 mb-3">
              +៧០០០នាក់ (+SCT)
            </div>
            <p className="text-sm sm:text-lg text-gray-700">
              បានបញ្ចប់ការបណ្តុះបណ្តាលជំនាញចាប់ពីឆ្នាំ ២០០២
            </p>
          </div>
        </div>

        {/* Training Program Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <h2 className="text-lg font-bold text-blue-900 leading-snug">
              កម្មវិធីបណ្តុះបណ្តាលជំនាញរបស់វិទ្យាស្ថាន ប៉េ អេស អឺ
            </h2>

            {/* Blue Box */}
            <div className="bg-blue-900 text-white p-8 rounded shadow-md">
              <p className="font-semibold mb-5 text-lg">
                វិស័យកំពុងបណ្តុះបណ្តាលខាងក្នុងវិទ្យាស្ថាន៖
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm">
                <li>ពាណិជ្ជសាស្ត្រ</li>
                <li>សណ្ឌាកិច្ច</li>
                <li>សំណង់</li>
                <li>មេកានិច</li>
                <li>ភាពយន្ត</li>
              </ul>
            </div>

            {/* Paperclip-style Box */}
            <div className="bg-white border-l-4 border-blue-500 p-8 rounded shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed">
                កម្មវិធីបណ្តុះបណ្តាលជាមួយសាលាខាងក្រៅដែលមានស្ទើរគ្រប់វិស័យ{" "}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="space-y-8">
            <img
              src="https://www.pse.ngo/sites/default/files/images/paragraphs/formations_professionnelles.jpg"
              alt="Vocational training classroom"
              className="w-full h-64 sm:h-[400px] object-cover rounded shadow"
            />

            <div className="bg-red-700 text-white p-8 rounded shadow">
              <p className="text-lg leading-snug sm:leading-relaxed">
                កម្មវិធីបណ្តុះបណ្តាលមានរយៈពេល
                <br />- ៤ ទៅ ៧ ខែ (វគ្គខ្លី)
                <br />- ២ ទៅ ២.៥ ឆ្នាំ (វគ្គវែង)
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
