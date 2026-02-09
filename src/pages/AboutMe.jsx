import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <>
            <div id="about-content" className="page-content">
                <motion.img
                    id="bryan"
                    src="/images/LinkedInWeddingSmall.JPG"
                    alt="Picture of Bryan"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.div
                    id="about-text-content"
                    className="page-content"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="page-title">Bryan Schneller, BS</h2>
                    <p id="about-text">
                        I am a web developer in the Raleigh-Durham, North Carolina area with proficiency in front and back end web technologies.
                        I produce strategically-coded content with attention to issues of scale and code sustainability.
                        I strive to optimize the accessibility of my web content by continuously learning about the needs of
                        diverse individuals.  I am an inspired developer who brings passion and creativity to a development environment.
                    </p>
                </motion.div>
            </div>
        </>
    );
}
