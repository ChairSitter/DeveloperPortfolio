import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react'

const EmailInput = () => {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setValidEmail(isValid);
    };

    const handleFocus = () => {
        setValidEmail(true);
    }

    return (
        <div>
            <label htmlFor="email">Email:</label>
            <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                onFocus={handleFocus}
            />
            {!validEmail && <p style={{ color: 'red' }}>Please enter a valid email</p>}
        </div>
    );
};

export default function Contact() {
    const [nameInput, setNameInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [validName, setValidName] = useState(true);
    const [validText, setValidText] = useState(true);

    const handleNameInputChange = (e) => {
        setNameInput(e.target.value);
    }
    const handleTextInputChange = (e) => {
        setTextInput(e.target.value);
    }
    const handleNameBlur = () => {
        const isValid = nameInput !== '';
        setValidName(isValid);
    }
    const handleTextBlur = () => {
        const isValid = textInput !== '';
        setValidText(isValid);
    }
    const handleNameFocus = () => {
        setValidName(true);
    }
    const handleTextFocus = () => {
        setValidText(true);
    }


    return (
        <>
            <h2 className="page-title">Contact Me:</h2>
            <div id="contact-content" className="page-content">
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" 
                    value={nameInput} 
                    onChange={handleNameInputChange} 
                    onBlur={handleNameBlur}
                    onFocus={handleNameFocus}></Input>
                    {!validName && <p style={{ color: 'red' }}>Please enter your name</p>}

                    <EmailInput></EmailInput>

                    <FormLabel>Your Message:</FormLabel>
                    <Textarea value={textInput} 
                    onChange={handleTextInputChange} 
                    onBlur={handleTextBlur}
                    onFocus={handleTextFocus}></Textarea>
                    {!validText && <p style={{ color: 'red' }}>Please enter a message</p>}

                    <Button colorScheme='blue'>Submit</Button>
                </FormControl>
            </div>
        </>
    );
}
