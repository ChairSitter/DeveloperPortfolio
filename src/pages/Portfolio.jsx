import Project from "../components/Project";
import { SimpleGrid } from '@chakra-ui/react';

export default function Portfolio() {
    return (
        <>
            <h2 className="page-title">Check out my portfolio!</h2>
            <div className="page-content" id="portfolio-content">
                <SimpleGrid columns={3} spacing={10}>
                    <Project
                        projSource={'../src/assets/images/MediMinderImg.png'}
                        projAlt={'MediMinder app screenshot'}
                        projHeading={'MediMinder'}
                        projAdd={'medication app'}
                        projText={'This is a full-stack application that helps the user keep track of medication times and missed meds based on custom medication times.'}
                        projURL={'url'}
                    />
                    <Project
                        projSource={'../src/assets/images/BuyMeThingsImg.png'}
                        projAlt={'BuyMeThings app screenshot'}
                        projHeading={'Buy Me Things'}
                        projAdd={'wish list app'}
                        projText={'This full-stack application allows to create wish lists for gifts with any URL, and share them with other registered users.'}
                        projURL={'url'}
                    />
                    <Project
                        projSource={'../src/assets/images/ForecastImg.png'}
                        projAlt={'Forecast Finder app screenshot'}
                        projHeading={'Forecast Finder'}
                        projAdd={'weather app'}
                        projText={'This application utilizes the Open Weather Map API to fetch and display data for any city in the world. Stores previously searched locations.'}
                        projURL={'url'}
                    />
                    <Project
                        projSource={'../src/assets/images/RainbowImg.png'}
                        projAlt={'Rainbow Multi-Match app screenshot'}
                        projHeading={'Rainbow Multi-Match'}
                        projAdd={'betting game'}
                        projText={'This game involves quick thinking to compare the outcome of two sets of boxes based on specific combos. Multiply wisely to boost your payouts.'}
                        projURL={'url'}
                    />
                    <Project
                        projSource={'../src/assets/images/GoldRingGuessImg.png'}
                        projAlt={'Gold Ring Guess app screenshot'}
                        projHeading={'Gold Ring Guess'}
                        projAdd={'estimation game'}
                        projText={'This is a math and observation-based guessing game. Guess the value of the grid using the slider and go for the lowest total over 10 rounds.'}
                        projURL={'url'}
                    />
                    <Project
                        projSource={'../src/assets/images/CyberWarImg.png'}
                        projAlt={'Cyber War app screenshot'}
                        projHeading={'Cyber War'}
                        projAdd={'card game'}
                        projText={'This is a bidding and bluffing game. Play your cards in the right order to win the center values and cash in on bonuses for shape, number, and color.'}
                        projURL={'url'}
                    />
                </SimpleGrid>
            </div>
        </>
    );
}
