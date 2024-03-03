import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import './TableWithCheckedCheckbox.css'; // Import your CSS file
import { ThemeProvider, createTheme } from "@mui/material/styles";
 
const theme = createTheme({
    spacing: 8, // Spacing factor
});

const Equipment21 = ({orderId}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState([
    // { sno: 1, equipment: 'Dispensing booth', idnumber: 'WH/R20/E05' , isChecked: false },
    // { sno: 2, equipment: 'Dispensing booth', idnumber: 'WH/R20/E06', isChecked: false },
    // { sno: 3, equipment: 'Dispensing booth', idnumber: 'WH/R20/E07', isChecked: false },
    // { sno: 4, equipment: 'Adam weighing balance-4 500kg', idnumber: 'WH/R20/E04', isChecked: false },
    // { sno: 5, equipment: 'Adam weighing balance-3 30kg', idnumber: 'WH/R20/E03', isChecked: false },
    // { sno: 6, equipment: 'Adam weighing balance-6 16kg', idnumber: 'WH/R20/E14', isChecked: false },
   //Add more data as needed
  ]);
  useEffect(() => {
    console.log("inside useEffect:"+orderId);
    fetch("http://localhost:5038/equipment2_1/"+orderId)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [orderId]);

  const handleUpdate = () => {
    fetch("http://localhost:5038/updateEquipment2_1", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());
    fetch("http://localhost:5038/equipment2_1/"+orderId)
      .then((data) => setData(data))
      .then(() => setIsEditable(false));
  }
  const handleCheckboxChange = (sno) => {
    setData((data) =>
      data.map((item, index) =>
        index === sno ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.equipment}</td>
                <td>{item.idnumber}</td>
                <td>
                { isEditable ? (
                    <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  ) : (
                    <input
                    type="checkbox"
                    checked={item.isChecked}
                  />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table><br />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
          <Button variant="contained" onClick={()=>{setIsEditable(true)}}>&nbsp;&nbsp; Edit &nbsp;&nbsp;</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={handleUpdate}>Update</Button>
        </div>
      </div>
  );
};

export default Equipment21;
