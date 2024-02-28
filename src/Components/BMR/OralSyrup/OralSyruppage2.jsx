import React, { useState } from 'react';
import './TableWithCheckBox.css'; // Import your CSS file

const OralSyruppage2 = () => {
  const [data, setData] = useState([
    { id: 1, checkpoints: 'Batch Number,Manufacturing Date and Expiry Date are correctly quoted in all pages.', selectedOption: 'No', reason: '' },
    { id: 2, checkpoints: 'Raw material work order attached', selectedOption: 'No', reason: '' },
    { id: 3, checkpoints: 'Line clearance is taken prior to all amnufacturing and dispensing activities.', selectedOption: 'No', reason: '' },
    { id: 4, checkpoints: 'Dispensing carried out as per Dispensing sheet',  selectedOption: 'No', reason: ''  },
    { id: 5, checkpoints: 'Environmental condition compiles during all the manufacturing stages',  selectedOption: 'No', reason: ''   },
    { id: 6, checkpoints: 'No overwriting, wrong entries are striken out and signed.',  selectedOption: 'No', reason: ''   },
    { id: 7, checkpoints: 'All the yeild results within accepted level.',  selectedOption: 'No', reason: ''  },
    { id: 8, checkpoints: 'All the process checks comply within accepted limit.',  selectedOption: 'No', reason: ''  },
    { id: 9, checkpoints: 'All the blank spaces are filled without any gaps.',  selectedOption: 'No', reason: ''  },
    { id: 10, checkpoints: 'All required samples are collected and recorded.',  selectedOption: 'No', reason: ''  },
    { id: 11, checkpoints: 'If any deviation of process/batch deviation approval attached.',  selectedOption: 'No', reason: ''  },
    { id: 12, checkpoints: 'Batch reconciliation compiles with accepted limit.',  selectedOption: 'No', reason: ''   },
    { id: 13, checkpoints: 'Batch manufacturing record issued on date',  selectedOption: 'No', reason: ''   },
    { id: 14, checkpoints: 'Batch commenced on date',  selectedOption: 'No', reason: ''   },
    { id: 15, checkpoints: 'Batch completed on date.',  selectedOption: 'No', reason: ''  },
    { id: 16, checkpoints: 'Presence of all attatcments',  selectedOption: 'No', reason: ''  },
    { id: 17, checkpoints: 'Completed record retreived on date',  selectedOption: 'No', reason: ''   },
    
    // Add more data as needed
  ]);

  const handleOptionChange = (id, option) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, selectedOption: option } : item
      );
    });
  };

  const handleReasonChange = (id, reason) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, reason: reason } : item
      );
    });
  };

  return (
    <div>
    <h2>Batch Manufacturing Record Release Check List</h2>
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Check Points</th>
            <th>Yes</th>
            <th>No</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.checkpoints}</td>
              <td>
                <input
                  type="radio"
                  value="Yes"
                  checked={item.selectedOption === 'Yes'}
                  onChange={() => handleOptionChange(item.id, 'Yes')}
                />
              </td>
              <td>
                <input
                  type="radio"
                  value="No"
                  checked={item.selectedOption === 'No'}
                  onChange={() => handleOptionChange(item.id, 'No')}
                />
              </td>
              <td>
                {item.selectedOption === 'No' && (
                  <input
                    type="text"
                    value={item.reason}
                    onChange={(e) => handleReasonChange(item.id, e.target.value)}
                    placeholder="Reason"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default OralSyruppage2;
