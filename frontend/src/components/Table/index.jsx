import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="mt-4 overflow-auto">
      <table className="w-full border-collapse border border-gray-300 min-w-max">
        <thead className="bg-gray-500 sticky top-0 z-10">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="border text-center capitalize border-gray-300 px-4 py-2 font-medium text-white"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="border text-center text-sm capitalize border-gray-300 px-4 py-2"
                  >
                    {col.render
                      ? col.render(row)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-500"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
