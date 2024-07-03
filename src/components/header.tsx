import React from 'react';
import Image from 'next/image';
import '@/styles/components/_header.scss';

import Logo from '../../public/images/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <Image src={Logo} alt="Logo" width={100} height={100} className='pt-10 sm:pt-28 sm:pb-10' />
      <h1>A history of everything you copy</h1>
      <p >Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
      <div className="download-buttons">
        <button>Download for iOS</button>
        <button>Download for Mac</button>
      </div>
    </header>
  );
};

export default Header;
