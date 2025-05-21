export default function Survey() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-8">
      {/* Section: Personal Info */}
      <h2 className="text-2xl font-bold text-center">Information</h2>

      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Student Name</span>
          <input
            type="text"
            name="username"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Grade</span>
          <input
            type="text"
            name="grade"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Section: School */}
      <div>
        <h3 className="text-xl font-semibold mb-2">What school are you?</h3>
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
          <option value="external">Out side</option>
          <option value="internal">inside</option>
        </select>
      </div>

      {/* Favorite Language */}
      <div>
        <h3 className="text-xl font-semibold mb-2">What is your gender</h3>
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
          <option value="external">male</option>
          <option value="internal">female</option>
          <option value="internal">other</option>
        </select>
      </div>
      {/* Table 1: skill:acco */}
      <div>
        <h3 className="text-xl font-bold mb-4">skill:acco</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">question</th>
                <th className="border px-4 py-2 text-center">1</th>
                <th className="border px-4 py-2 text-center">2</th>
                <th className="border px-4 py-2 text-center">3</th>
                <th className="border px-4 py-2 text-center">4</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-100">
                <td className="border px-4 py-2">Do you like technology?</td>
                <td className="border text-center"><input type="radio" name="q1_0" value="1" /></td>
                <td className="border text-center"><input type="radio" name="q1_0" value="2" /></td>
                <td className="border text-center"><input type="radio" name="q1_0" value="3" /></td>
                <td className="border text-center"><input type="radio" name="q1_0" value="4" /></td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border px-4 py-2">Do you like researching?</td>
                <td className="border text-center"><input type="radio" name="q1_1" value="1" /></td>
                <td className="border text-center"><input type="radio" name="q1_1" value="2" /></td>
                <td className="border text-center"><input type="radio" name="q1_1" value="3" /></td>
                <td className="border text-center"><input type="radio" name="q1_1" value="4" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: skill:admin */}
      <div>
        <h3 className="text-xl font-bold mb-4">skill:admin</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">question</th>
                <th className="border px-4 py-2 text-center">1</th>
                <th className="border px-4 py-2 text-center">2</th>
                <th className="border px-4 py-2 text-center">3</th>
                <th className="border px-4 py-2 text-center">4</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-100">
                <td className="border px-4 py-2">តើអ្នកអាចធ្វើការជាក្រុមជាមួយអ្នកដទៃបានល្អទេ?</td>
                <td className="border text-center"><input type="radio" name="q2_0" value="1" /></td>
                <td className="border text-center"><input type="radio" name="q2_0" value="2" /></td>
                <td className="border text-center"><input type="radio" name="q2_0" value="3" /></td>
                <td className="border text-center"><input type="radio" name="q2_0" value="4" /></td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border px-4 py-2">តើអ្នកចេះប្រើ Git និង GitHub ទេ?</td>
                <td className="border text-center"><input type="radio" name="q2_1" value="1" /></td>
                <td className="border text-center"><input type="radio" name="q2_1" value="2" /></td>
                <td className="border text-center"><input type="radio" name="q2_1" value="3" /></td>
                <td className="border text-center"><input type="radio" name="q2_1" value="4" /></td>
              </tr>
              {/* Add more questions as static rows here */}
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
