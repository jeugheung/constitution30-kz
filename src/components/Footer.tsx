import React from 'react';
import suLogo from './su-logo.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border  py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          {/* SVG логотип Satbayev University */}
          <img src={suLogo}></img>
          {/* <span>Сделано в Satbayev University</span> */}
        </div>
        <p className="text-base font-semibold text-foreground">
          &copy; {new Date().getFullYear()} Satbayev University
        </p>

      </div>
    </footer>
  );
};

export default Footer;
