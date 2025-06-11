import React from 'react';
import suLogo from './su-logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#333333] border-t border-border  py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
        
        <p className="text-base font-semibold text-white">
          &copy; {new Date().getFullYear()} Satbayev University
        </p>

      </div>
    </footer>
  );
};

export default Footer;
