import React, { useState } from 'react';
import { MenuItems } from '../layout/MenuItems';
import { Link, NavLink } from 'react-router-dom';

function Dropdown() {
  const displayBlock = {
    display:"block",
  };
  return (
    <>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={displayBlock}>
          {MenuItems.map((items,index) => <NavLink key={items.title}className="dropdown-item" to={items.path}>{items.title}</NavLink>)}
        </div>
    </>
  );
}

export default Dropdown;
