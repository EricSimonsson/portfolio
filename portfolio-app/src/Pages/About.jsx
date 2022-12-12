import React, {Component} from 'react';
import{ motion } from 'framer-motion';

class About extends Component {
    
    render() {
        return (
            <motion.div 
            className="About"
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}>

                <h2>About Page</h2>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </motion.div>
        )
    }
}



export default About;