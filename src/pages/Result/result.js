export default function ResultPage() {
  return (
    <div className="max-w-4xl mx-auto mt-3 p-6 bg-white rounded shadow space-y-8">

      <div>
        <h2>result student</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-[#E37F0D] text-white">
              <tr>
                <th className="border px-4 py-2 text-left w-[5%]">No</th>
                <th className="border px-4 py-2 text-left  w-[75%]">
                  Skill
                </th>
                <th className="border px-4 py-2 text-center w-[15%]">
                  Total Raing
                </th>
              </tr>
            </thead>

            
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">acount</td>
                  <td className="border px-4 py-2 text-center">20</td>
                </tr>
         
          </table>
        </div>
      </div>
     
    </div>
  );
}
