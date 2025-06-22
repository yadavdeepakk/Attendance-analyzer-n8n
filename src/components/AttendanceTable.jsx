import  { useEffect, useState } from "react";

const AttendanceTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQycTRuegd0A9XadZjcBB2lD0ShF4o60mXeJOhWfVp8p05-I3PmPrNu_y7mmcKbJYXz5lg4Dm3CNwEo/pub?output=csv";

    fetch(sheetURL)
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.trim().split("\n");
        const headers = lines[0].split(",");
        const data = lines.slice(1).map((line) => {
          const values = line.split(",");
          return headers.reduce((obj, key, i) => {
            obj[key.trim()] = values[i]?.trim();
            return obj;
          }, {});
        });
        setRows(data);
      });
  }, []);

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Attendance Report</h2>
      <table className="min-w-full border-collapse border border-gray-300 rounded-2xl overflow-hidden shadow">
        <thead className="bg-[#00bda6] text-white">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            {/* <th className="px-4 py-2 border">Email</th> */}
            <th className="px-4 py-2 border">Check-in Time</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="even:bg-gray-100">
              <td className="px-4 py-2 border">{row.Name}</td>
              {/* <td className="px-4 py-2 border">{row.Email}</td> */}
              <td className="px-4 py-2 border">{row["Check-in Time"]}</td>
              <td className="px-4 py-2 border">{row.Date}</td>
              <td
                className={`px-4 py-2 border font-semibold ${
                  row.Status === "Absent"
                    ? "text-red-600"
                    : row.Status === "Late"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {row.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
