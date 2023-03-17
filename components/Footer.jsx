import React from 'react'
import footerStyles from '../styles/Footer.module.css';
// import { laptopImg } from '../public/img/laptop.svg';

const Footer = () => {
  return (
    <div id="contact" className={footerStyles.footer}>
      <div className="container">
        <footer className={footerStyles.footer_cont}>
          <div className={footerStyles.footer_main}>
            <h1 className={footerStyles.footer_title}>Looking for ways to reach us?</h1>
            <img className={footerStyles.footer_img} src='/img/laptop.svg' />
          </div>
          <nav className={footerStyles.footer_nav}>
            <div className={footerStyles.block}>
              <h3 className={footerStyles.block_title}>Telephone</h3>
              <ul className={footerStyles.pri_nav}>
                <li>
                  <a className={footerStyles.nav_link} href="#">514-289-2525</a>
                </li>
              </ul>
            </div>
            <div className={footerStyles.block}>
              <h3 className={footerStyles.block_title}>Email</h3>
              <ul className={footerStyles.pri_nav}>
                <li>
                  <a className={footerStyles.nav_link} href="#">recruiting@cgr-consulting.ca</a>
                </li>
              </ul>
            </div>
            <div className={footerStyles.block}>
              <h3 className={footerStyles.block_title}>Social Media</h3>
              <ul className={footerStyles.pri_nav}>
                <li>
                  <a className={footerStyles.nav_link} href="#">Instagram</a>
                </li>
                <li>
                  <a className={footerStyles.nav_link} href="#">Facebook</a>
                </li>
                <li>
                  <a className={footerStyles.nav_link} href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className={footerStyles.block}>
              <h3 className={footerStyles.block_title}>Address</h3>
              <ul className={footerStyles.pri_nav}>
                <li>
                  <a className={footerStyles.nav_link} href="#">3621 St-Denis St.,</a>
                </li>
                <li>
                  <a className={footerStyles.nav_link} href="#">Montreal, QC, H2X 3L6</a>
                </li>
              </ul>
            </div>
          </nav>
        </footer>
      </div>
    </div >
  )
}

export default Footer;
