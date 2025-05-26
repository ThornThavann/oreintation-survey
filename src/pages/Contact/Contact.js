import React from "react";
import Header from "../../components/header";
import { FaPhone, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="px-8 py-10 max-w-7xl mx-auto font-sans text-2xl mb-6">
        {/* Page 1 Section */}
        <section className="border-orange-500 p-6 rounded-lg shadow-md space-y-6">
          <h1 className="text-3xl font-bold border-b-4 border-orange-500 w-fit text-orange-800">
            ព័ត៌មានទំនាក់ទំនង
          </h1>
          <div className="space-y-4 text-2xl text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhone className="text-orange-600" />
              <span>Phone: +855 77 777 175</span>
            </p>
            <p className="flex items-center gap-3">
              <FaFacebook className="text-blue-600" />
              <span>Facebook: PSE - POUR UN SOURIRE D’ENFANT-Cambodia</span>
            </p>
            <p className="flex items-center gap-3">
              <FaInstagram className="text-pink-500" />
              <span>Instagram: PSE - FRANCE</span>
            </p>
            <a
              href="https://www.pse.ngo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-orange-600 transition"
            >
              <FaGlobe className="text-green-700" />
              <span>Website: www.pse.ngo</span>
            </a>
          </div>
        </section>

        {/* Registration Section */}
        <section className="space-y-6 mt-10">
          <h1 className="text-3xl font-bold border-b-4 border-orange-500 w-fit">
            ការចុះឈ្មោះចូលរៀន
          </h1>
          <h2 className="text-3xl font-bold text-blue-900">
            ការចុះឈ្មោះចូលរៀន និងលក្ខខណ្ឌសម្រាប់ដំណើរការ
          </h2>

          {/* ID Card Info */}
          <div className="bg-blue-900 text-white p-4 rounded-md flex items-center space-x-4">
            <div className="text-4xl" role="img" aria-label="ID Card">
              🪪
            </div>
            <div>
              <h3 className="font-semibold">ការចុះឈ្មោះចូលរៀន៖</h3>
              <p>- ចុះឈ្មោះដើមខែ១ឆ្នាំ</p>
            </div>
          </div>

          {/* Conditions */}
          <div className="bg-orange-500 text-white p-6 rounded-md space-y-4">
            <h3 className="font-bold">លក្ខខណ្ឌចូលរៀន</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>បញ្ចប់ថ្នាក់​ អនុវិទ្យាល័យ​​ ឬ​ កំពុងសិក្សា (៧,៨,៩)</li>
              <li>បញ្ចប់ថ្នាក់​ វិទ្យាល័យ​​ ឬ​ កំពុងសិក្សា​​ (១០,១១,១២)</li>
              <li>
                មានអាយុចាប់ពី១៦ឆ្នាំឡើង សម្រាប់កម្រិតសញ្ញាបត្របច្ចេកទេស
                និងវិជ្ជាជីវៈ ១, ២ និង ៣
              </li>
              <li>
                ជាប់ថ្នាក់ទី១២ និងមានអាយុចាប់ពី១៧ ឆ្នាំឡើង
                សម្រាប់កម្រិតសញ្ញាបត្របច្ចេកទេស
              </li>
              <li>
                មានចំណាប់អារម្មណ៍ក្នុងការសិក្សា និងបណ្តុះបណ្តាលជំនាញវិជ្ជាជីវៈ
              </li>
              <li>មានសុខភាពល្អ និងអាចធ្វើការបណ្តុះបណ្តាលបាន</li>
              <li>
                មានឯកសារចុះឈ្មោះចូលរៀន (ប័ណ្ណសម្គាល់, ប័ណ្ណសុខភាព,
                រូបថត,ប័ណ្ណគ្រួសារ (ប្រសិន​បើមាន) )
              </li>
              <li>មានការយល់ព្រមពីលក្ខខណ្ឌ និងគោលការណ៍សាលា</li>
            </ul>
          </div>
        </section>

        {/* Innovation and Life Skills Section */}
        <section className="space-y-6 mt-10">
          <h2 className="text-3xl font-bold border-b-4 border-orange-500 w-fit">
            ការទទួលស្គាល់លើការបណ្តុះបណ្តាល និងឳកាស អំពីក្របខណ្ឌគុណវុឌ្ឍជាតិ{" "}
          </h2>
          <h3 className="text-blue-900 font-semibold">
            បណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ
          </h3>

          {/* Blue Box Grid */}
          <div className="bg-blue-900 text-white p-6 rounded-md grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="font-semibold">វិញ្ញាបនបត្រវិជ្ជាជីវៈ</p>
            </div>
            <div>
              <p className="font-semibold">
                សញ្ញាបត្របច្ចេកទេស និងវិជ្ជាជីវៈ​១
              </p>
            </div>
            <div>
              <p className="font-semibold">
                សញ្ញាបត្របច្ចេកទេស និងវិជ្ជាជីវៈ​២
              </p>
            </div>
            <div>
              <p className="font-semibold">
                សញ្ញាបត្របច្ចេកទេស និងវិជ្ជាជីវៈ​៣
              </p>
            </div>
            <div>
              <p className="font-semibold">សញ្ញាបត្រជាន់ខ្ពស់ បច្ចេកទេស</p>
            </div>
            <div>
              <p className="font-semibold">បរិញ្ញាបត្របច្ចេកវិទ្យា</p>
            </div>
            <div>
              <p className="font-semibold">បរិញ្ញាបត្រជាន់ខ្ពស់បច្ចេកវិទ្យា</p>
            </div>
            <div>
              <p className="font-semibold">បណ្ឌិតបច្ចេកវិទ្យា</p>
            </div>
          </div>

          {/* Light Blue Box Grid */}
          <h3 className="text-blue-900 font-semibold">
          ចំណេះដឹងទូទៅ          </h3>
          <div className="bg-cyan-100 text-gray-800 p-6 rounded-md grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="font-semibold">សមមូលថ្នាក់ទី៩</p>
            </div>
            <div>
              <p className="font-semibold">សមមូលថ្នាក់ទី១០</p>
            </div>
            <div>
              <p className="font-semibold">សមមូលថ្នាក់ទី១១</p>
            </div>
            <div>
              <p className="font-semibold">សមមូលថ្នាក់ទី១២</p>
            </div>
            <div>
              <p className="font-semibold">បរិញ្ញាបត្ររង</p>
            </div>
            <div>
              <p className="font-semibold">បរិញ្ញាបត្រ</p>
            </div>
            <div>
              <p className="font-semibold">អនុបណ្ឌិត</p>
            </div>
            <div>
              <p className="font-semibold">បណ្ឌិត</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
