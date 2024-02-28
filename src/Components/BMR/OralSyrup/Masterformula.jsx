import React, { useState } from 'react';
import './TableWithTextFields.css'; // Import your CSS file


const Masterformula = () => {
  const initialData = [
    { id: 1, name: 'Item 1', quantity: 0, price: 0, isEditing: false },
    { id: 2, name: 'Item 2', quantity: 0, price: 0, isEditing: false },
    { id: 3, name: 'Item 3', quantity: 0, price: 0, isEditing: false },
    // Add more data as needed
  ];

  const [data, setData] = useState(initialData);

  const handleInputChange = (id, field, value) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      );
    });
  };

  const handleEditToggle = (id) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      );
    });
  };

  const handleSave = (id) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      );
    });
  };

  return (
    <div>
      <h2>Table with Text Fields and Buttons</h2>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {item.isEditing ? (
                    <input
                      type="text"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(item.id, 'quantity', e.target.value)}
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td>
                  {item.isEditing ? (
                    <input
                      type="text"
                      value={item.price}
                      onChange={(e) => handleInputChange(item.id, 'price', e.target.value)}
                    />
                  ) : (
                    item.price
                  )}
                </td>
                <td>
                  {item.isEditing ? (
                    <button onClick={() => handleSave(item.id)}>Save</button>
                  ) : (
                    <button onClick={() => handleEditToggle(item.id)}>Edit</button>
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

export default Masterformula;
