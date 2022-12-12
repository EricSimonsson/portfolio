import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import{ motion } from 'framer-motion';


class Home extends Component {
    
    render() {
        return (
            <motion.div 
            className='Home'
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
            >
                <h2>Eric Simonsson</h2>
                <main>
                    <p>System developer</p>
                </main>
                <Link to={"/projects"}>
                    <button type="button" class="btn btn-secondary btn-sm">Projects</button>
                </Link>
            </motion.div>
        )
    }
}



export default Home;