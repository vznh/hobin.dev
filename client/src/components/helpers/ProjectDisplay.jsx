import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600);
// ProjectDisplay component 
const ProjectDisplay = ({ project }) => {
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

export default ProjectDisplay;