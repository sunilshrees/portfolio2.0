import React from 'react';
import FadeInSection from './FadeInSection';
import image from '../assets/profile-1.jpg';

const About = () => {
    const tech_stack = ['Javascript ES6+', 'React.js', 'HTML', 'CSS'];
    return (
        <div id='about'>
            <FadeInSection>
                <div className='section-header'>
                    <span className='section-title'>/ about me</span>
                </div>
                <div className='about-content'>
                    <div className='about-description'>
                        <p>
                            I am recently graduated with a Bachelor degree in
                            <b> Computer Engineering</b>. After graduation, I'm
                            fully focused in Frontend Web Development and in
                            upcoming days I'm planning to go for FullStack
                            Development.
                        </p>
                        {'Here are some technologies I have been working with:'}
                        <ul className='tech-stack'>
                            {tech_stack.map((tech_item, i) => {
                                return (
                                    <FadeInSection delay={`${i + 1}00ms`}>
                                        <li>{tech_item}</li>
                                    </FadeInSection>
                                );
                            })}
                        </ul>
                        <p>
                            Also, I'm interested in following the developments
                            of science. I also play a lot of video games.
                        </p>
                    </div>
                    <div className='about-image'>
                        <img src={image} required />
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default About;
