import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faLeaf } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {

  const hoverStyles = `
  .group:hover .icon {
    transform: translateX(-50%);
  }

  .group .url {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    transform: translateX(-50%);
  }

  .group:hover .url {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  .group:hover .group:not(:hover) .icon {
    visibility: hidden;
  }
`;

  const iconSizeClass = "h-8 w-8";
  const textSizeClass = "text-lg";

  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6 text-white">
      <style>{hoverStyles}</style>
      <a href="#" className="sr-only">Logo</a>
      <div className="flex justify-end space-x-2 w-full">
        {/* Example: Email Icon */}
        <a href="mailto:your-email@example.com" className="group flex items-center relative">
          <FontAwesomeIcon icon={faEnvelope} size="1.5x" className={`icon ${iconSizeClass}`} />
          <span className={`url ${textSizeClass} absolute transition-all duration-500 ease-in-out transform -translate-x-1/2 left-1/2`}>
            your-email@example.com
          </span>
        </a>
        {/* ... Other icons ... */}
      </div>
    </header>
  );
}

export default NavBar;
