import { Button, ButtonGroup } from '@chakra-ui/react';
import List from '../components/List';

export default function Resume() {
    return (
        <>
            <h2 className="page-title">My Resume:</h2>
            <div id="resume-content" className="page-content">
                <p>
                    Please download my resume for more information, and feel free to reach out! <br/><br/>
                </p>
                <a href='https://docs.google.com/document/d/1CWRwOXdJn2QbYx8FpbBax5Ox5ThEWTmKTurA3MQRqUw/edit?usp=sharing' target="_blank"><Button size='lg' colorScheme='blue'>Bryan's Resume</Button></a>
                <br/><br/>
                <List></List>
            </div>
            
        </>
    );
}
