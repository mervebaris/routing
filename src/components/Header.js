import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="users">Kullanıcılar</Link>
        </li>
        <li>
          <Link to="contac">İletişim</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header