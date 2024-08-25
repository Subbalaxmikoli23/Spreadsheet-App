"use client"
// components/Spreadsheet.tsx
import React, { useState } from 'react';

const Spreadsheet: React.FC = () => {
  const numRows = 20; // Adjust to match 1000 cells (e.g., 20 rows x 50 columns)
  const numCols = 50;

  const [data, setData] = useState<string[][]>(
    Array.from({ length: numRows }, () => Array(numCols).fill(''))
  );

  const handleChange = (row: number, col: number, value: string) => {
    const newData = data.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value : cell
      )
    );
    setData(newData);
  };

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <th key={colIndex} className="border border-gray-300 p-2 bg-gray-100">
                {String.fromCharCode(65 + colIndex)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-300">
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                    className="w-full p-2 border border-gray-300"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;

