import React, { useState, useEffect } from 'react';

const words = ['code', 'mentor', 'cook', 'design', 'tutor'];
const colors = ['#327A32', '#808080', '#B20000', '#7F7FFF', '#E8E1EF']; // Example colors for each word

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 3000); 
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 120 : 120); 

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500); // <-- set blinking speed, in ms

    return () => clearInterval(interval);
  }, []);

  const textStyle = {
    color: colors[index],
    display: 'inline',
    position: 'relative',
    marginRight: '5px', 
    fontWeight: 'bold',
    fontSize: '3em',
    textShadow: `0px 0px 10px ${colors[index]}`,
  };

  const underscoreStyle = {
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '25px', 
    height: '1px', 
    backgroundColor: colors[index],
    opacity: blink ? 1 : 0,
    fontWeight: 'bold',
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <h1 style={textStyle}>
        <span style={{ color: 'white', }}>i</span> {words[index].substring(0, subIndex)}
        <span style={underscoreStyle}></span>
      </h1>
    </div>
  );
};

export default Typewriter;