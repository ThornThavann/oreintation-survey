import React from "react";
import Header from "../../components/header";

export default function Foundation() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen px-6 py-8">
        <div className="max-w-7xl mx-auto text-justify text-2xl">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            សូមស្វាគមន៍មកកាន់ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋានរបស់យើង
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន
            គឺជាកម្រិតសិក្សាមួយដែលត្រូវបានរៀបចំឡើងសម្រាប់សិស្សដែលនៅមិនទាន់រួចរាល់ក្នុងការចូលសិក្សាជំនាញ
            ឬសិស្សដែលមានអាយុមិនទាន់គ្រប់លក្ខណៈក្នុងការចូលរៀនជំនាញពិសេសៗ។
            ថ្នាក់នេះផ្តល់ឱកាសឲ្យសិស្សស្វែងយល់អំពីជំនាញផ្សេងៗ
            ដើម្បីជួយពួកគេសម្រេចចិត្តថាជំនាញណាដែលសមស្របនឹងខ្លួន
            និងត្រូវនឹងតំបន់របស់ពួកគេ។
            <br />
            <br />
            ការសិក្សានៅថ្នាក់នេះមានរយៈពេលមួយឆ្នាំ ហើយមានការបង្រៀនមុខវិជ្ជាទូទៅ
            និងកម្មវិធីផ្តោតលើការស្វែងយល់អំពីជំនាញនានា។
            វាជាជំហានដ៏ល្អសម្រាប់សិស្សក្នុងការរៀបចំខ្លួនមុនចូលជំនាញពិតប្រាកដ។
            <br />
            <br />
            ក្នុងថ្នាក់នេះ ក៏មានការបែងចែកជាកម្រិតដូចជា៖
            <br />
            <strong>កម្រិតទីមួយ</strong>៖ សម្រាប់សិស្សដែលបានបញ្ចប់អនុវិទ្យាល័យ
            ឬកំពុងសិក្សានៅវិទ្យាល័យ
            <br />
            <strong>កម្រិតទីពីរ</strong>៖
            សម្រាប់សិស្សដែលមិនទាន់បញ្ចប់អនុវិទ្យាល័យ ឬកំពុងសិក្សាថ្នាក់ក្រោមនោះ
            <br />
            <br />
            ថ្នាក់នេះគឺជាជម្រើសដ៏សមស្របសម្រាប់សិស្សដែលចង់ស្វែងយល់អំពីទិសដៅអនាគតរបស់ខ្លួនមុនធ្វើការជ្រើសរើសជំនាញ។
          </p>

          <div className="mb-8 text-center">
            <p className="text-gray-700">
              <span className="text-orange-500 font-semibold">
                មុខវិជ្ជាគោល៖
              </span>{" "}
              គណិតវិទ្យា, ភាសាខ្មែរ, គីមីវិទ្យា, ជីវវិទ្យា
            </p>
            <p className="text-gray-700">
              <span className="text-orange-500 font-semibold">
                មុខវិជ្ជាបន្ថែម៖
              </span>{" "}
              ភាសាបរទេស (អង់គ្លេស, ចិន, បារាំង), កុំព្យូទ័រ, ជំនាញទន់
              និងកម្មវិធីតម្រង់ទិស
            </p>
            <p className="text-gray-700">
              <span className="text-orange-500 font-semibold">ផ្សេងៗ៖</span>{" "}
              ចំណេះដឹងទូទៅ និងអាស៊ាន, សកម្មភាពផ្សេងៗ, សិល្បៈ, បណ្ណាល័យ និងកីឡា
            </p>
            <p className="text-gray-700">
              <span className="text-orange-500 font-semibold">
                លក្ខខណ្ឌចូលរៀន (FSD):
              </span>{" "}
              ត្រូវមានអាយុ ១៥ ឆ្នាំឡើង, សញ្ញាបត្រថ្នាក់ទី ៩ ឬស្ពានចម្លង,
              ជាសិស្សមកពីគ្រួសារ ប៉េ អេស អឺ
            </p>
            <p className="text-gray-700">ត្រូវធ្វើតេស្តមុនពេលចូលរៀន</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <img
              src="https://www.pse.ngo/sites/default/files/images/news/cambodge1.jpg"
              alt="Foundation Class 1"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://www.pointdevue.fr/storage/images/article_960/2022/12/02_POUR%20UN%20SOURIRE_PDV3880eiDGUKWYcH.jpg"
              alt="Foundation Class 2"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://cdn.kiripost.com/static/images/sala_pse_cambodia.2e16d0ba.fill-960x540.jpg"
              alt="Foundation Class 3"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
