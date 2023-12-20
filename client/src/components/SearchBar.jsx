import { TextField, Autocomplete } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';

const SearchBar = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(''); 
    const [currentOutput, setCurrentOutput] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/question', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: question }),
        });
        const data = await response.json();
        setAnswer(data.answer);
    };

    const typeOutAnswer = useCallback((index) => {
        if (index < answer.length) {
            setCurrentOutput(answer.substring(0, index + 1));
            setTimeout(() => typeOutAnswer(index + 1), 15);
        }
    }, [answer]); 

    useEffect(() => {
        setCurrentOutput(''); 
        if (answer) {
            typeOutAnswer(0);
        }
    }, [answer, typeOutAnswer]);

    useEffect(() => {
        setCurrentOutput(''); 
        if (answer) {
            typeOutAnswer(0);
        }
    }, [answer]);
    
    return (
        <div>
            <form onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Autocomplete
                    freeSolo
                    sx={{ flex: 1, marginRight: 1 }}
                    onInputChange={(event, newInputValue) => {
                        setQuestion(newInputValue);
                    }}
                    options={[
                        "..what's your favorite food?",
                        "..what's your tech stack?",
                        "..what tv show are you watching?",
                        "..where do you work?",
                        "..what coffee do you like?",
                        "..what do you like to do in your free time?",
                        "..what mbti are you?",
                        "..anything to your imagination!"
                    ]}
                    getOptionDisabled={(option) => option === "..anything to your imagination!"}
                    renderInput={(params) => <TextField {...params} label="talk 2 me" fullWidth />}
                    />
                <button type="submit" color="primary" variant="contained">
                    <SendIcon />
                </button>
            </form>
            <p>{currentOutput}</p>
            
        </div>
    )
}

export default SearchBar;