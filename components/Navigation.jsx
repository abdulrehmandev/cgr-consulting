import React, { useEffect, useRef, useState } from 'react'
import PrimaryButton from './PrimaryButton';
import navStyles from '../styles/Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='container'>
        <header className={navStyles.nav}>
          <a><svg className={navStyles.header_logo} width="72" height="56" viewBox="0 0 72 56" data-animate="fade-up" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="#1B4ECC"><path d="M63.658 13.276c0 2.733 1.454 3.373 3.373 3.373 2.035 0 3.178-.95 3.178-3.586v-1.55l-1.609.02v1.898c0 1.454-.058 3.024-1.57 3.024-1.356 0-1.744-1.395-1.744-2.985-.02-4.264-.02-5.368 0-10.31 0-1.57.388-2.966 1.764-2.966 1.512 0 1.55 1.57 1.55 3.023v1.9h1.61V3.586C70.21.95 69.084 0 67.05 0c-1.938 0-3.392.64-3.392 3.373v9.903zM63.658 32.641c0 2.733 1.686 3.372 3.624 3.372 2.035 0 3.373-.95 3.373-3.585V27.95h-3.78v.484l2.152-.29c.02.6.02 4.36.02 4.496 0 1.648-.175 3.179-1.784 3.179-1.434 0-1.977-1.066-1.977-2.83a943.67 943.67 0 010-10.466c0-1.764.465-2.965 1.996-2.965 1.512 0 1.764 1.376 1.764 3.023v1.706h1.609V22.95c0-2.616-1.338-3.585-3.373-3.585-1.938 0-3.624.64-3.624 3.372v9.904zM65.422 55.165V48.07h1.59c.115 0 .31 0 .426-.019l1.821 7.113h1.667l-2.054-7.346c1.55-.562 1.667-2.577 1.667-4.36 0-3.063-.485-4.536-3.43-4.536h-3.315v16.242h1.628zm1.706-16.048c1.724 0 1.821 2.675 1.821 4.322 0 1.648-.155 4.458-1.822 4.458h-1.705v-8.78h1.706z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M.247 54.997C.15 38.843.19 19.687.174.188c1.497-.06 3.63-.15 5.452 0 .188 18.708.005 36.05.218 53.064 3.311.303 6.744.135 10.177.146 14.516.048 29.296-.045 42.597.073.01.633.04.853 0 1.453-17.748.188-39.344.026-58.371.073z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.4 48.019H7.297c-.073-15.088-.145-31.783 0-47.904 1.89.049 3.761-.063 5.38.073.164 16.657.088 30.156.144 46.085 15.714.381 31.52-.009 45.65.219.326.183.06.959.146 1.38a.503.503 0 01-.217.147z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 40.968c-.006-12.909-.18-26.176 0-40.853 1.613.07 3.685-.109 5.379.073.166 13.156.013 27.869.145 39.18 12.148.232 24.915.074 38.672.146.262.262-.026.906.072 1.453-14.679.138-30.4.196-44.268 0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.4 34.063c-.173-12.52-.092-22.191-.073-33.875 2.027-.14 3.688-.037 5.38 0 .282 9.283.082 21.246.144 32.203 10.026.29 20.429.048 31.694.145.066.387.202 1.254 0 1.453-11.298.19-24.474.123-37.145.074z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.233 27.084c-.002-9.494.013-17.925 0-26.896 1.566-.115 3.691-.097 5.452 0 .207 8.058-.062 17.094.145 25.224 8.035.337 16.608.053 24.715.145.11.327.129 1.13 0 1.454-10.695.205-19.939.094-30.312.073z"></path><path d="M50.913 20.178c-5.38 0-10.647.037-15.702-.073.04-6.78-.051-13.913 0-19.917 1.559-.102 3.408-.067 5.307 0 .218 6.259-.017 12.603.145 18.39 5.37.323 12.281.062 17.882.146.155.306.035.886.073 1.308a.518.518 0 01-.218.146h-7.487z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.4 13.345c-5.52-.057-11.156.082-16.357-.073-.08-4.327.002-8.71-.072-13.084 1.742-.023 3.697-.13 5.378 0 .184 4-.005 8.11.146 11.485 3.724.24 7.216-.072 11.05.146.154.306.034.885.072 1.308a.367.367 0 01-.218.218z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h72v55.518H0z"></path></clipPath></defs></svg></a>
          <nav
            className={navStyles.links_cont}
            aria_hidden={isOpen ? 'false' : 'true'}
          >
            <ul className={navStyles.pri_nav}>
              <li>
                <a href="#main" className={navStyles.nav_link}>About Us</a>
              </li>
              <li>
                <a href="#main" className={navStyles.nav_link}>Our Mission</a>
              </li>
              <li>
                <a href="#main" className={navStyles.nav_link}>Contact Us</a>
              </li>
            </ul>
            <PrimaryButton>Join the team</PrimaryButton>
          </nav>
          <PrimaryButton
            className={navStyles.toggle}
            onClick={() => { setIsOpen(!isOpen) }}
          >
            {isOpen ? 'close' : 'menu'}
          </PrimaryButton>
        </header>
      </div>
    </div>
  );
};

export default Navigation;
