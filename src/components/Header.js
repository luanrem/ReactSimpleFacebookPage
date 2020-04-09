import React from 'react';
import { MdAccountCircle } from 'react-icons/md'

import './Header.css';

function Header() {
  return (
    <>
      <div className="header" >
        <div className="inner_header" >
          <div className="logo_container" >
            <h1>facebook</h1>
          </div>

          <ul className="navigation" >
            <a href="/"><li>Meu perfil</li></a>
            <a href="/"><li><MdAccountCircle className="circle" size="2em" /></li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;