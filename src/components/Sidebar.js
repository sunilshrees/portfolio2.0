import React from 'react';

import { FiInbox, FiGithub, FiLinkedin } from 'react-icons/fi';
import FadeInRightSection from './FadeInRightSection';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar'>
                <ul>
                    <FadeInRightSection delay='100ms'>
                        <li>
                            <a href='#'>/home</a>
                        </li>
                    </FadeInRightSection>

                    <FadeInRightSection delay='200ms'>
                        <li>
                            <a href='#about'>/about</a>
                        </li>
                    </FadeInRightSection>

                    {/* <li>
                            <a href='#experience'>/experience</a>
                        </li> */}

                    <FadeInRightSection delay='300ms'>
                        <li>
                            <a href='#projects'>/projects</a>
                        </li>
                    </FadeInRightSection>
                </ul>

                <div className='sidebar-logos' href='/'>
                    <a href='mailto:sunilshrees371@gmail.com'>
                        <FiInbox style={{ fontSize: 20 }}></FiInbox>
                    </a>
                    <a href='https://github.com/sunilshrees'>
                        <FiGithub style={{ fontSize: 19 }}></FiGithub>
                    </a>
                    <a href='https://www.linkedin.com/in/sunil-shrees-8a059818a/'>
                        <FiLinkedin style={{ fontSize: 21 }}></FiLinkedin>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
