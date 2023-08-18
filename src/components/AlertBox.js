import React from 'react';

const AlertBox = ({ message, onClose }) => {
  return (
    <div className="alert">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      {message}
    </div>
  );
};

export default AlertBox