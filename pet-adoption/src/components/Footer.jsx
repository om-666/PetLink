// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Pet Adoption. All rights reserved.</p>
        <p className="mt-2">Designed with ❤️ Our Team</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="data:image/jpeg;base64,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" alt="Facebook" className="h-8 w-8 hover:opacity-75" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="data:image/jpeg;base64,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" alt="Twitter" className="h-8 w-8 hover:opacity-75" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="data:image/png;base64,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" alt="Instagram" className="h-8 w-8 hover:opacity-75" />
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
