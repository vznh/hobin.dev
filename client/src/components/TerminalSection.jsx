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
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600);

  const techStack = [
    { icon: (size) => <FontAwesomeIcon icon={faReact} size={size} /> },
    { icon: (size) => <FontAwesomeIcon icon={faGolang} size={size} /> },   
    { icon: (size) => <FontAwesomeIcon icon={faAws} size={size} /> },
    { icon: (size) => <FontAwesomeIcon icon={faDocker} size={size} /> },
  ];

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
            * sunshine - js, python, twilio
            * fitgpt - react, python, mongodb
            * 
            * personal:
            * spotify jukebox - rpi gpio, python, linux
            * cmore - nodejs
            * littlesaigonbeautysalon.com - typescript, react, go (for microservices)
            * hobin.dev - this portfolio: react, go, aws, netlify
            */
  const projects = [
    [
      {
        icon: faReact, 
        name: 'Music Wizard',
        company: 'Jun. 2020',
        description: 'A small mahogany box that contained a NFC reader to take in input from NFC cards; when hovered on with a NFC-card containing a certain value, it\'ll play the song associated with that card on a nearby (already connected) speaker.',
        technologies: 'RPi GPiO (3B+), Python, Linux',
      },
      {
        icon: faReact, 
        name: 'cmore',
        company: 'Sep. 2020',
        description: 'A deprecated Chrome Web Store extension that converted supported files (HTML, PDF, DOCX) to conform with bionic reading standards; helping those with dyslexia read more efficiently.',
        technologies: 'JavaScript, Python, Firebase',
      },
      {
        icon: faReact,
        name: 'hobin.dev',
        company: 'Dec. 2023',
        description: 'This website that you\'re looking at! The entire thing was built in ReactJS, MUI, and Golang for the serverless functions. It\'s hosted on AWS and Netlify.',
        technologies: 'ReactJS, Golang, AWS, Netlify; MUI'
      },
      {
        icon: faReact,
        name: 'l',
        company: 'Dec. 2023',
        description: 'My mom\'s salon website; it was built with a "techy" vibe to it, and also has a booking/scheduling system for my mom and her coworkers to understand their schedule better; they previously worked on remembering their schedule by memory!',
        technologies: 'React (TS), Golang, AWS, Netlify, MUI, TailwindCSS, Typeform'
      }
    ],
    [
      {
        icon: faReact, 
        name: 'sunshine',
        company: 'Jan. 2021',
        description: 'Made it for my mom; tapping on this NFC card on her nightstand will lead her to a website that triggers a SMS message that contains all of the daily essentials: weather, news (usa, vietnam, korea), and her schedule for her salon. Translated in primarily Vietnamese, then Korean if desired.',
        technologies: 'Go, Twilio, Amazon Web Services (Lambda)',
      },
      {
        icon: faReact, 
        name: 'fitPT',
        company: 'Jun. 2022',
        description: 'A web app that helps those looking to get into a gym without the hassle of a personal trainer. It\'ll generate a workout plan based on the user\'s intentions, goals, current body metrics, and will track their progress over time. You can also ask it to make recipes for you based on a picture of what you have in your fridge.',
        technologies: 'OpenAI API (GPT-4 Early Access), HuggingFace API, React, Python, MongoDB',
      },
    ]
  ]

  // ProjectDisplay component 
  const ProjectDisplay = ({ isMobileView, project }) => {
    const projectDisplayStyle = {
      display: 'grid',
      gridTemplateColumns: isMobileView ? '1fr' : 'auto 1fr', // Icon column only appears if not in mobile view
      gap: '10px',
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
      whiteSpace: 'normal', // Allows the text to wrap
      overflowWrap: 'break-word', // Breaks words to prevent overflow
    };

    const projectDescriptionStyle = {
        marginTop: '10px',
        whiteSpace: 'normal', // Allows the text to wrap
        overflowWrap: 'break-word', // Breaks words to prevent overflow
    };


    const techUsedStyle = {
      marginTop: '10px',
      fontWeight: 'bold',
      textDecoration: 'underline',
      whiteSpace: 'normal', // Allows the text to wrap
      overflowWrap: 'break-word', // Breaks words to prevent overflow
  };


    return (
      <div style={projectDisplayStyle}>
      {!isMobileView && (
          <FontAwesomeIcon icon={project.icon} size="2x" />
      )}
      <div>
          <div>
              <span style={projectNameStyle}>{project.name}</span>
              <span style={{ ...projectNameStyle, marginLeft: '5px', fontSize: '0.8em', fontWeight: 'lighter' }}>
                  {project.company}
              </span>
          </div>
          <p style={projectDescriptionStyle}>{project.description}</p>
          <p style={techUsedStyle}>{project.technologies}</p>
      </div>
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
            setResultText('section is broken on mobile, i\'ll fix this in a bit :p if ur reading this @ 4am');
            setShowProjects(true);
            setShowIcons(false);
            break;
        case 'what i\'ve been doing':
            setResultText('research: @seoul national university, @uc santa cruz, @carnegie mellon university. finalist for CalHacks A.I. (June)');
            setShowProjects(false);
            setShowIcons(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    // Set initial state
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
        {['my tech stack?', 'what have i made so far?', 'what i\'ve been doing'].map((option) => (
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
            {projects[0].map((project, index) => (
              <ProjectDisplay isMobileView={isMobileView} key={index} project={project} />
            ))}
          </div>
        )}
    </section>
  );  
};

export default TerminalSection;
