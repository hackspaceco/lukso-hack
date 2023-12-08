import React from 'react';

export default function Input({ placeholder, ...props }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...props}
      className="superSearch-form-control"
    />
  );
}

