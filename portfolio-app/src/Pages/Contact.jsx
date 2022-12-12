import React, {Component} from 'react';
import{ motion } from 'framer-motion';

class Contact extends Component {
    
    render() {
        return (
            <motion.div 
            className='Contact'

            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}>
                <p>Detta är kontakt</p>
            </motion.div>
        )
    }
}



export default Contact;