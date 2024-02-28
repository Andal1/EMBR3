import React, { useState } from 'react';
import './TableWithCheckedCheckbox.css'; // Import your CSS file

const Equipment21 = () => {
  const [data, setData] = useState([
    { sno: 1, equipment: 'Dispensing booth', idnumber: 'WH/R20/E05' , isChecked: false },
    { sno: 2, equipment: 'Dispensing booth', idnumber: 'WH/R20/E06', isChecked: false },
    { sno: 3, equipment: 'Dispensing booth', idnumber: 'WH/R20/E07', isChecked: false },
    { sno: 4, equipment: 'Adam weighing balance-4 500kg', idnumber: 'WH/R20/E04', isChecked: false },
    { sno: 5, equipment: 'Adam weighing balance-3 30kg', idnumber: 'WH/R20/E03', isChecked: false },
    { sno: 6, equipment: 'Adam weighing balance-6 16kg', idnumber: 'WH/R20/E14', isChecked: false },
   //Add more data as needed
  ]);

  const handleCheckboxChange = (sno) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.sno === sno ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Equipment</th>
              <th>ID Number</th>
              <th>Equipment Used</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.sno}>
                <td>{item.sno}</td>
                <td>{item.equipment}</td>
                <td>{item.idnumber}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={() => handleCheckboxChange(item.sno)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equipment21;
