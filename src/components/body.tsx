import React from 'react';
import Image from 'next/image';
import '@/styles/components/_body.scss';
import '@/styles/components/_header.scss';


import Feature_1 from '../../public/images/image-computer.png'
import Feature_2 from '../../public/images/image-devices.png'

import Blacklist from '../../public/images/icon-blacklist.svg'
import Text from '../../public/images/icon-text.svg'
import Preview from '../../public/images/icon-preview.svg'

import Google from '../../public/images/logo-google.png'
import IBM from '../../public/images/logo-ibm.png'
import Microsoft from '../../public/images/logo-microsoft.png'
import Hewlett from '../../public/images/logo-hp.png'
import Vector from '../../public/images/logo-vector-graphics.png'

const Body = () => {
  return (
    <main>
      <section className="features">
        <h2>Keep track of your snippets</h2>
        <p className='features__p'>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        <div className="features__list">
          <div>
            <Image src={Feature_1} alt="Feature 1" className='  ' />
          </div>
          <div className='features__items'>
            <div className='features__items__1'>
              <h3>Quick Search</h3>
              <p>Easily search your snippets by content, category, web address, application, and more.</p>
            </div>

            <div className='features__items__1'>
              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>

            <div className='features__items__1'>
              <h3>Complete History</h3>
              <p>Retrieve any snippets from the first moment you started using the app.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <h2>Access Clipboard anywhere</h2>
        <p className='features__p'>Whether you&apos;re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
        <div className="feature__list">
          <div>
            <Image src={Feature_2} alt="Clipboard on iOS" />
          </div>
          <div>
          </div>
        </div>
      </section>
      <section className="workflow">
        <h2>Supercharge your workflow</h2>
        <p className='workflow__p'>We&apos;ve got the tools to boost your productivity.</p>
        <div className="workflow_items">
          <div className='workflow_items__list'>
            <Image src={Blacklist} alt='black list logo' />
            <h3>Create blacklists</h3>
            <p className='max-w-[350px]'>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
          </div>
          <div className='workflow_items__list'>
            <Image src={Text} alt='text logo' />
            <h3>Plain text snippets</h3>
            <p className='max-w-[300px]'>Remove unwanted formatting from copied text for a consistent look.</p>
          </div>
          <div className='workflow_items__list'>
            <Image src={Preview} alt='preview logo' />
            <h3>Sneak preview</h3>
            <p className='max-w-[300px]'>Quick preview of all snippets on your Clipboard for easy access.</p>
          </div>
        </div>
      </section>

      <section>
        <div className='logo'>
      {/* flex justify-around items-center mt-20 */}
        <Image src={Google} alt='google logo' />
        <Image src={IBM} alt='ibm logo' />
        <Image src={Microsoft} alt='microsoft logo' />
        <Image src={Hewlett} alt='hewlett logo' />
        <Image src={Vector} alt='vector logo' />
        </div>
      </section>

      <section className='workflow'>
        <h2>Clipboard for iOS and Mac OS</h2>
        <p className='workflow__p'>Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard.</p>
        <div className="download-buttons">
          <button>Download for iOS</button>
          <button>Download for Mac </button>
        </div>
      </section>
    </main>
  );
};

export default Body;
