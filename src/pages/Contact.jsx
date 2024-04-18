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
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [textInput, setTextInput] = useState('');
 
    const handleNameInputChange = (e) => {
        setNameInput(e.target.value);
    }
    const handleEmailInputChange = (e) => {
        setEmailInput(e.target.value);
    }
    const handleTextInputChange = (e) => {
        setTextInput(e.target.value);
    }

    const isError = emailInput.match(['\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z']);


    return (
        <>
            <h2 className="page-title">Contact Me:</h2>
            <div id="contact-content" className="page-content">
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={nameInput} onChange={handleNameInputChange}></Input>
                    <FormControl isRequired isInvalid={isError}>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={emailInput} onChange={handleEmailInputChange}/>
                        {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormLabel>Your Message:</FormLabel>
                    <Textarea value={textInput} onChange={handleTextInputChange}></Textarea>

                    <Button colorScheme='blue'>Submit</Button>
                </FormControl>
            </div>
        </>
    );
}
