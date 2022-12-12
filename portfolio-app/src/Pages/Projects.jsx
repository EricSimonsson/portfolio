import React, {Component} from 'react';
import{ motion } from 'framer-motion';

class Projects extends Component {
    
    render() {
        return (
            <motion.div 
            className='Projects'
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}>
                <p>Detta är olika projekt</p>
            </motion.div>
        )
    }
}



export default Projects;