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
  const [showProjects, setShowProjects] = useState(false);

  const techStack = [
    { icon: (size) => <FontAwesomeIcon icon={faReact} size={size} /> },
    { icon: (size) => <FontAwesomeIcon icon={faGolang} size={size} /> },   
    { icon: (size) => <FontAwesomeIcon icon={faAws} size={size} /> },
    { icon: (size) => <FontAwesomeIcon icon={faDocker} size={size} /> },
  ];

  const projects = [
    {
      icon: faReact, 
      name: 'fitGPT',
      company: '',
      description: 'This is a description of Project 1.',
      technologies: 'React, Redux, Node.js',
    },
    {
      icon: faReact, 
      name: 'Project 2',
      company: 'Company A',
      description: 'This is a description of Project 1.',
      technologies: 'React, Redux, Node.js',
    },
    {
      icon: faReact, 
      name: 'Project 3',
      company: 'Company A',
      description: 'This is a description of Project 1.',
      technologies: 'React, Redux, Node.js',
    },
    {
      icon: faReact, 
      name: 'Project 4',
      company: 'Company A',
      description: 'This is a description of Project 1.',
      technologies: 'React, Redux, Node.js',
    },
  ]

  const ProjectDisplay = ({ project }) => {
    const projectStyle = {
      backgroundColor: '#000000',
      color: '#E5E4E2',
      padding: '20px',
      margin: '10px',
      width: 'calc(50% - 20px)', // 2 per row with space
      boxSizing: 'border-box',
      fontFamily: 'monospace',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    };
  
    const projectNameStyle = {
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: '#FAF9F6', // accent color for project name
    };
  
    const projectDescriptionStyle = {
      marginTop: '10px',
    };
  
    const techUsedStyle = {
      marginTop: '10px',
      fontWeight: 'bold',
      textDecoration: 'underline',
    };
  
    return (
      <div style={projectStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FontAwesomeIcon icon={project.icon} size="2x" />
          <div>
            <span style={projectNameStyle}>{project.name}</span>
            <span style={{ marginLeft: '5px', fontSize: '0.8em', fontWeight: 'lighter' }}>
              {project.company}
            </span>
          </div>
        </div>
        <p style={projectDescriptionStyle}>{project.description}</p>
        <p style={techUsedStyle}>{project.technologies}</p>
      </div>
    );
  };
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%', // Adjusted for better responsiveness
    margin: '20px auto',
    flexWrap: 'wrap', // Allows icons to wrap on smaller screens
  };
  
  const fadeInAnimation = `@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }`;

  const iconStyle = index => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    margin: '0 10px', 
  });

  const iconSize = window.innerWidth < 600 ? '5x' : '10x'; // Adjust icon size based on screen width

  const wiggleAnimation = `@keyframes wiggle {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }`;
  
  const iconHoverStyle = {
    animation: 'wiggle 0.5s ease-in-out infinite'
  };
  
  // * inline CSS for the terminal
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

  // * inline CSS for buttons
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

  // * hover style for buttons
  const hoverStyle = {
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.9)',
    transition: 'boxShadow 100ms ease-out',
  };

  // * inline CSS for command text
  const commandTextStyle = {
    fontSize: '1rem',
    fontFamily: 'monospace',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  };


  // * funct to handle option clicks
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSubIndex(0);
    setSubIndexResult(0);
    setShowIcons(false);

    switch (option) {
        case 'my tech stack?':
            setResultText("i use these technologies for my personal projects the most!");
            setShowIcons(true);
            setShowProjects(false);
            break;
        case 'what have i made so far?':
            setResultText('this is kinda under construction... it\'ll come though. pinky promise.');
            /*
            * research:
            * cmu: ml pattern-based recognition using a convolutional neural network - python, tensorflow ; helped detect patterns within neural signals to better understand and interpret the generalization of thinking processes
            * ucsc: using generative image modeling to generate images based off of user-generated prompts - python, tensorflow, pytorch : all from inspiration from DALL-E
            * 
            * hackathon:
            * inventree - reactjs, tailwindcss, python, mongodb
            * lovelang - reactjs, tailwindcss, python (for AI/ML), NodeJS for reg backend, dynamodb (finalist)
            * skincare.io - nextjs, react, python (for AI/ML), node for backend, dynamodb
            * slugmaps - react native, typescript, aws, docker
            * 
            * personal:
            * spotify jukebox - rpi gpio, python, linux
            * cmore - nodejs
            * littlesaigonbeautysalon.com - typescript, react, go (for microservices)
            * hobin.dev - this portfolio: react, go, aws, netlify
            * sunshine - js, python, twilio
            * fitgpt - react, python, mongodb
            * skimmer - python, rpigpio ; this is kinda illegal!
            */
            setShowProjects(true);
            setShowIcons(false);
            break;
        case 'short-term/long-term goals':
            setResultText('for now, you get one piece of information. i made this website, which was built using react, bunjs, golang, aws, and netlify');
            break;
        default: 
            break;
    }
  };

  /* 
  * typewriter effect 
  * by jason son
  */
  useEffect(() => {
    if (selectedOption && subIndex < selectedOption.length + 1) {
      const timeout = setTimeout(() => {
        setSubIndex(subIndex + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [subIndex, selectedOption]);

  useEffect(() => {
    if (resultText && subIndexResult < resultText.length + 1) {
      const timeout = setTimeout(() => {
        setSubIndexResult(subIndexResult + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [subIndexResult, resultText]);

  // * blinking cursor effect
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
        {['my tech stack?', 'what have i made so far?', 'short-term/long-term goals'].map((option) => (
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
                {item.icon(iconSize)}   
              </div>
            ))}
          </div>
        )}
        {showProjects && (
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%', margin: '0 auto' }}>
            {projects.map((project, index) => (
              <ProjectDisplay key={index} project={project} />
            ))}
          </div>
        )}
    </section>
  );
  
  
};

export default TerminalSection;
