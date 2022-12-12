import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

import {AnimatePresence} from 'framer-motion'; //om detta buggar så testa med "framer-motion/dist/framer-motion"

function AnimatedRoutes(){
    const location = useLocation();


    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/**
                 * Default path to layout element
                 */}
                <Route exact path = "/" element={<Home />} />

                {/**
                 * path to the About element
                 */}
                <Route exact path = "/About" element={<About />} />
                
                {/**
                 * path to the projects
                 */}
                <Route exact path = "/projects" element={<Projects />} />
                
                {/**
                 * path to the my contat information
                 */}
                <Route exact path = "/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;