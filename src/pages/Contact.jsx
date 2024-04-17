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
    const [emailInput, setEmailInput] = useState('');
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
    const isError = emailInput.match('/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+//. [a-zA-Z]{2,}$/');

    return (
        <>
            <h2 className="page-title">Contact Me:</h2>
            <div id="contact-content" className="page-content">
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type="text"></Input>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' isInvalid={isError} value={emailInput} onChange={handleEmailInputChange} />
                    {isError ? (
                        <FormHelperText>
                            Enter your email and I will respond as soon as possible.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                    <FormLabel>Your Message:</FormLabel>
                    <Textarea></Textarea>
                    <Button colorScheme='blue'>Submit</Button>
                </FormControl>
            </div>
        </>
    );
}
