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
                <a href='/assets/Web Dev Resume.pdf' target="_blank"><Button size='lg' colorScheme='blue'>Bryan's Resume</Button></a>
                <br/><br/>
                <List></List>
            </div>
            
        </>
    );
}
