import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './_navbar.scss';

interface INavbar {
  children?: React.ReactNode;
  className?: string;
}

const Navbar: React.FC<INavbar> = ({ className }) => {
  return (
    <nav className={clsx(className, 'navbar')}>
      <div className="navbar__inner">
        <Link className="navbar__heading" to="/">
          Broccoli & Co.
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
