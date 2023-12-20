import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws, faDocker, faGolang } from '@fortawesome/free-brands-svg-icons';

const TerminalSection = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [subIndexResult, setSubIndexResult] = useState(0);
  const [blink, setBlink] = useState(true);
  const [resultText, setResultText] = useState('');
  const [showIcons, setShowIcons] = useState(false);

  const techStack = [
    { icon: <FontAwesomeIcon icon={faReact}size="10x" /> },
    { icon: <FontAwesomeIcon icon={faGolang} size="10x" /> },   
    { icon: <FontAwesomeIcon icon={faAws} size="10x" /> },
    { icon: <FontAwesomeIcon icon={faDocker} size="10x" /> },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%', // Adjust as needed
    margin: '20px auto'
  };
  
  const fadeInAnimation = `@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }`;
  

  const iconStyle = index => ({
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    margin: '0 10px', // Adjust margins for spacing
    transform: index % 2 === 0 ? 'translateY(20px)' : 'translateY(40px)', // Adjust for wavy effect
    animation: `fadeIn 1s ease-in-out`,
    transform: index % 2 === 0 ? 'translateY(20px)' : 'translateY(40px)' // Adjust for wavy effect
  
  });
  

  const wiggleAnimation = `@keyframes wiggle {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }`;
  
  const iconHoverStyle = {
    animation: 'wiggle 0.5s ease-in-out infinite'
  };
  
  // Inline CSS for the terminal
  const terminalStyle = {
    height: '100vh',
    width: '80vw',
    color: 'white',
    padding: '2rem',
    margin: '0 auto',
    marginTop: '50vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  // Inline CSS for buttons
  const buttonStyle = {
    textAlign: 'center',
    color: 'white',
    border: '1px solid white',
    borderRadius: '0',
    padding: '6px 12px',
    margin: '0 8px',
    transition: 'border 300ms ease-in-out, color 300ms ease-in-out',
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    width: 'calc(33% - 16px)',
    flexShrink: 0,
  };

  // Hover style for buttons
  const hoverStyle = {
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.9)',
    transition: 'boxShadow 100ms ease-out',
  };

  // Inline CSS for command text
  const commandTextStyle = {
    fontSize: '1rem',
    fontFamily: 'monospace',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  };

  // Function to handle option clicks
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSubIndex(0);
    setSubIndexResult(0);
    setShowIcons(false);

    switch (option) {
        case 'my tech stack?':
            setResultText("there wasn't a nextjs icon.. pretend its there for me");
            setShowIcons(true);
            break;
        case 'what have i made so far?':
            setResultText('this is kinda under construction... it\'ll come though. pinky promise.');
            break;
        case 'notable things to know about me':
            setResultText('for now, you get one piece of information. i made this website, which was built using react, bunjs, golang, aws, and netlify');
            break;
        default: 
            break;
    }
  };

  // Typewriter effect logic for the selected option
  useEffect(() => {
    if (selectedOption && subIndex < selectedOption.length + 1) {
      const timeout = setTimeout(() => {
        setSubIndex(subIndex + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [subIndex, selectedOption]);

  // Typewriter effect logic for the result text
  useEffect(() => {
    if (resultText && subIndexResult < resultText.length + 1) {
      const timeout = setTimeout(() => {
        setSubIndexResult(subIndexResult + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [subIndexResult, resultText]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(!blink);
    }, 500);

    return () => clearInterval(interval);
  }, [blink]);

  return (
    <section style={terminalStyle}>
      <style>
        {wiggleAnimation}
        {fadeInAnimation}
      </style>
      <div style={commandTextStyle}>
        <span>$</span>
        <span>for-the-recruiters</span>
      </div>
      <div className="flex justify-between" style={{ gap: '16px' }}>
        {['my tech stack?', 'what have i made so far?', 'notable things to know about me'].map((option) => (
          <button
            key={option}
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.boxShadow = hoverStyle.boxShadow}
            onMouseOut={(e) => e.target.style.boxShadow = ''}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div style={{ ...commandTextStyle, marginTop: '16px' }}>
        <span>{`>`}</span>
        <p>
          <span style={{ fontFamily: 'monospace', fontSize: '1rem' }}>
            {selectedOption.substring(0, subIndex)}
          </span>
        </p>
      </div>
      <div>
        {selectedOption && (
          <p style={{ color: 'white', fontFamily: 'monospace' }}>
            {resultText.substring(0, subIndexResult)}
            <span style={{ opacity: blink ? 1 : 0 }}>|</span>
          </p>
        )}
      </div>
      {showIcons && (
        <div style={containerStyle}>
          {techStack.map((item, index) => (
            <div
              key={index}
              style={iconStyle(index)}
              onMouseOver={(e) => e.currentTarget.firstChild.style.animation = iconHoverStyle.animation}
              onMouseOut={(e) => e.currentTarget.firstChild.style.animation = ''}
            >
              {item.icon}
            </div>
          ))}
        </div>
      )}
    </section>
  );
  
  
};

export default TerminalSection;
