import React from 'react';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Credits from './Credits';

const Content = () => {
    return (
        <div className='content'>
            <Intro />
            <About />
            {/* <Experience /> */}
            <Projects />
            <Credits />
        </div>
    );
};

export default Content;
