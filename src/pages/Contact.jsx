import React from 'react';
import linkedInLogo from '../assets/linkedin_icon.png';
import xIcon from '../assets/X_icon.png';

const Contact = () => {
  return (
    <div className='contact-info'>
      <h2>Contact Me</h2>
      <div className = 'contact-left'>
        <p>
          LinkedIn: {' '}
          <a href="https://www.linkedin.com/in/charlie-young-nz/" target="_blank" rel="noopener noreferrer">
            <img
              className="linkedin-logo"
              src={linkedInLogo}
              alt="LinkedIn Logo"
              width="30"
              height="30"
            />
          </a>
        </p>
      </div>
      <div className = 'contact-right'>
      <p>
        X: {' '}
        <a href="https://x.com/buymyfiddis" target="_blank" rel="noopener noreferrer">
          <img
            className="linkedin-logo"
            src={xIcon}
            alt="Twitter X Logo"
            width="30"
            height="30"
          />
        </a>
      </p>
      </div>
      <p>
        Email: {' '}
        <a href="mailto:4oz.developer@gmail.com">
          4oz.developer@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
