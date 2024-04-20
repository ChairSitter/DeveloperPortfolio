import Project from "../components/Project";
import { SimpleGrid } from '@chakra-ui/react';

const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
}

export default function Portfolio() {
    return (
        <>
            <h2 className="page-title">Check out my projects and games:</h2>
            <div className="page-content" id="portfolio-content">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    <Project
                        projSource={'../src/assets/images/ForecastImg.png'}
                        projAlt={'Forecast Finder app screenshot'}
                        projHeading={'Forecast Finder'}
                        projAdd={'weather app'}
                        projText={'This application utilizes the Open Weather Map API to fetch and display data for any city in the world. Stores previously searched locations.'}
                        projURL={'https://chairsitter.github.io/WeatherApp/'}
                        projGH={'https://github.com/ChairSitter/WeatherApp'}
                    />
                    <Project
                        projSource={'../src/assets/images/BuyMeThingsImg.png'}
                        projAlt={'BuyMeThings app screenshot'}
                        projHeading={'Buy Me Things'}
                        projAdd={'wish list app'}
                        projText={'This full-stack application allows users to create wish lists for gifts with any URL, and share them with other registered users.'}
                        projURL={'https://smart-wish-list.onrender.com/'}
                        projGH={'https://github.com/rbenjamin4/WishList'}
                    />
                    <Project
                        projSource={'../src/assets/images/MediMinderImg.png'}
                        projAlt={'MediMinder app screenshot'}
                        projHeading={'MediMinder'}
                        projAdd={'medication app'}
                        projText={'This is a full-stack application that helps the user keep track of medication times and missed meds based on custom medication times.'}
                        projURL={'https://mediminder-e3e3cf63329a.herokuapp.com/'}
                        projGH={'https://github.com/cspecialblackberry/MediMinder-App'}
                    />
                    <Project
                        projSource={'../src/assets/images/RainbowImg.png'}
                        projAlt={'Rainbow Multi-Match app screenshot'}
                        projHeading={'Rainbow Multi-Match'}
                        projAdd={'betting game'}
                        projText={'This game involves quick thinking to compare the outcome of two sets of boxes based on specific combos. Multiply wisely to boost your payouts.'}
                        projURL={'https://chairsitter.github.io/MatchingGame/'}
                        projGH={'https://github.com/ChairSitter/MatchingGame'}
                    />
                    <Project
                        projSource={'../src/assets/images/GoldRingGuessImg.png'}
                        projAlt={'Gold Ring Guess app screenshot'}
                        projHeading={'Gold Ring Guess'}
                        projAdd={'estimation game'}
                        projText={'This is a math and observation guessing game. Guess the value of the grid using the slider and go for the lowest total difference over 10 rounds.'}
                        projURL={'https://chairsitter.github.io/Gold-Ring-Guess/'}
                        projGH={'https://github.com/ChairSitter/Gold-Ring-Guess'}
                    />
                    <Project
                        projSource={'../src/assets/images/CyberWarImg.png'}
                        projAlt={'Cyber War app screenshot'}
                        projHeading={'Cyber War'}
                        projAdd={'card game'}
                        projText={'This is a bidding and bluffing game. Play your cards in the right order to win the center values and cash in on bonuses for shape, number, and color.'}
                        projURL={'https://chairsitter.github.io/CyberWarGame/'}
                        projGH={'https://github.com/ChairSitter/CyberWarGame'}
                    />
                </SimpleGrid>
            </div>
        </>
    );
}
