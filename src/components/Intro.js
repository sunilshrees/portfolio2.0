import React from 'react';

import Typewriter from 'typewriter-effect';
import { FiMail } from 'react-icons/fi';
import FadeInSection from './FadeInSection';

const Intro = () => {
    return (
        <div id='intro'>
            <span className='intro-title'>
                <span className='intro-name'>
                    <Typewriter
                        options={{
                            cursor: '_',
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('hi, ')
                                .pauseFor(400)
                                .typeString(' sunil here. ')
                                .start();
                        }}
                    />
                </span>
            </span>
            <FadeInSection>
                <div className='fade'>
                    <h3>I create stuff sometimes.</h3>
                    <p>
                        I'm a Computer Engineer currently residing in Kathmandu,
                        Nepal. I have great interest in frontend development,
                        and I love to code, design and think.
                    </p>
                </div>
            </FadeInSection>
            <a href='mailto:sunil123@gmail.com' className='intro-contact'>
                <FiMail className='icon' />
                Say hi !
            </a>
        </div>
    );
};

export default Intro;
