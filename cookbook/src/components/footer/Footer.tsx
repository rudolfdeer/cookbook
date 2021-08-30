import * as React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Link to="/"><div className="logo-black" /></Link>
      <nav>
        <ul className="footer-nav-list">
          <li className="footer-nav-list-item"><Link to="/recepies">Recepies</Link></li>
          <li className="footer-nav-list-item"><Link to="/cookbooks">Cookbooks</Link></li>
          <li className="footer-nav-list-item"><Link to="/cookbooks">About us</Link></li>
          <li className="footer-nav-list-item"><a href="mailto:tomalichko@gmail.com">tomalichko@gmail.com</a></li>
          <li className="footer-nav-list-item">Study Project v2.2021</li>
          <li className="footer-nav-list-item"><a href="https://www.itechart.by/">:iTechArt</a></li>
        </ul>
      </nav>
    </footer>
  );
}