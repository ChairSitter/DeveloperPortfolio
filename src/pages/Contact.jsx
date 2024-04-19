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

export default function Contact() {
    const [email, setEmail] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [textInput, setTextInput] = useState('');    
    const [validEmail, setValidEmail] = useState(true);
    const [validName, setValidName] = useState(true);
    const [validText, setValidText] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setValidEmail(isValid);
    };

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
        setSubmitted(false);
        setSubmitError(false);
    }
    const handleEmailFocus = () => {
        setValidEmail(true);
        setSubmitted(false);
        setSubmitError(false);
    }
    const handleTextFocus = () => {
        setValidText(true);
        setSubmitted(false);
        setSubmitError(false);
    }

    const handleSubmit = () => {
        if (validName && validText && validEmail) {
            setNameInput('')
            setTextInput('')
            setEmail('')
            setSubmitted(true);
        } else {
            setSubmitError(true);
        }
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

                    <div>
                        <FormLabel>Email:</FormLabel>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                            onFocus={handleEmailFocus}
                        />
                        {!validEmail && <p style={{ color: 'red' }}>Please enter a valid email</p>}
                    </div>

                    <FormLabel>Your Message:</FormLabel>
                    <Textarea value={textInput}
                        onChange={handleTextInputChange}
                        onBlur={handleTextBlur}
                        onFocus={handleTextFocus}></Textarea>
                    {!validText && <p style={{ color: 'red' }}>Please enter a message</p>}
                    {submitted && <p>Submitted!</p>}
                    {submitError && <p style={{ color: 'red' }}>Please complete all fields before submitting</p>}
                    <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>

                </FormControl>
            </div>
        </>
    );
}
