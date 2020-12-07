import React from 'react';

export default function ControlLayout({ handleLayoutChange }) {
  return (
    <div className="handle_layout">
      <label htmlFor="layoutCheck">Landscape</label>
      <input type="checkbox" onChange={handleLayoutChange} name="layoutCheck"/>
    </div>
  )
}