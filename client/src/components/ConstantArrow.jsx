import { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ConstantArrow = () => {
    const [downOpacity, setDownOpacity] = useState(0.5);
    const [upOpacity, setUpOpacity] = useState(0);

    const handleScroll = () => {
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.body.offsetHeight;

        // Handle down arrow opacity
        if (scrollPos / (docHeight - windowHeight) > 0.75) {
            setDownOpacity(0);
        } else {
            setDownOpacity(0.5);
        }

        // Handle up arrow opacity
        setUpOpacity(scrollPos > windowHeight ? 0.5 : 0);
    };

    const handleDownClick = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const nextPos = scrollPosition + windowHeight;

        window.scrollTo({
            top: nextPos,
            behavior: 'smooth',
        });
    };

    const handleUpClick = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const nextPos = scrollPosition - windowHeight;

        window.scrollTo({
            top: nextPos,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '0px', 
            right: '0px', 
            left: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            paddingBottom: '20px',
            zIndex: 1000 
        }}>
            <KeyboardArrowUpIcon 
                style={{
                    fontSize: '5em',
                    transition: 'opacity 0.3s ease-in-out', 
                    opacity: upOpacity,
                    position: 'absolute',
                    bottom: '925px', 
                }} 
                onClick={handleUpClick} 
            />
            <KeyboardArrowDownIcon 
                style={{
                    fontSize: '5em',
                    transition: 'opacity 0.3s ease-in-out', 
                    opacity: downOpacity
                }} 
                onClick={handleDownClick} 
            />
        </div>
    )
};

export default ConstantArrow;