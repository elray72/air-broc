import React from 'react';
import clsx from 'clsx';
import './_footer.scss';

interface IFooter {
  className?: string;
}

const Footer: React.FC<IFooter> = ({ className }) => {
  return (
    <footer className={clsx(className, 'footer')}>
      <div className="footer__inner">
        <div className="footer__text">A better way to enjoy every day.</div>
        <div className="footer__text">
          © Broccoli & Co. 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
