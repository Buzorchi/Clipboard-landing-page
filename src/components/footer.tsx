import React from 'react';
import Image from 'next/image';
import '@/styles/components/_footer.scss';

import Logo from '../../public/images/logo.svg'
import Facebook from '../../public/images/icon-facebook.svg'
import Twitter from '../../public/images/icon-twitter.svg'
import Instagram from '../../public/images/icon-instagram.svg'


const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Image src={Logo} alt='logo' className='w-[36px] mx-auto' />
      </div>
      <div className='block md:flex gap-20 '>
      <div className='py-4 px-5'>
        <p>FAQs</p>
        <p>Contact Us</p>
      </div>
      <div className='py-4 px-5'>
        <p>Privacy Policy</p>
        <p>Press Kit</p>
      </div >
      <div  className='py-4 px-5'>
        <p>Install Guide</p>
      </div>
      </div>
      <div className='text-center justify-center items-center flex gap-5 pt-3'>
        <Image src={Facebook} alt='facebook logo' className='w-[24px] h-[24px]'/>
        <Image src={Twitter} alt='twitter logo' className='w-[24px] h-[24px]'/>
        <Image src={Instagram} alt='instagram logo' className='w-[24px] h-[24px]'/>

      </div>
    </footer>
  );
};

export default Footer;
