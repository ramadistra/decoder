import React from 'react';

function ActionLink({ onClick, payload, active, label }) {
  function handleClick(e) {
    e.preventDefault();
    onClick(payload);
  }

  return (
    <a href="#" className={active ? 'active' : ''} onClick={handleClick}>
      {label}
    </a>
  );
}

export default ActionLink;
