import React from 'react';

import FadeInSection from './FadeInSection';

import { BsFillFolderFill } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

import Slider from './Slider';

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce App',
            desc: 'Comfy Sloth is react ecommerce app ',
            techStack: 'React.js',
            link: 'https://github.com/sunilshrees/react-estore',
            open: 'https://comfy-eshop-react.netlify.app/',
        },
        {
            title: 'Recipe App',
            desc: 'Recipe App will let you find meals for your ingredients ',
            techStack: 'React.js',
            link: 'https://github.com/sunilshrees/react-food-app',
            open: 'https://recipemart-react.netlify.app/',
        },
        {
            title: 'Portfolio',
            desc: 'Simple portfolio website',
            techStack: 'HTML,CSS,Javascript',
            link: 'https://github.com/sunilshrees/portfolio',
            open: 'https://sunilshrees.netlify.app/',
        },
        {
            title: 'Prime',
            desc: 'Prime is the landing page of Restaurant',
            techStack: 'React.js',
            link: 'https://github.com/sunilshrees/prime-restro',
        },
        {
            title: 'Github Users Search',
            desc: 'This app allows you to search any github users and display their details and so on',
            techStack: 'React.js',
            link: 'https://github.com/sunilshrees/react-search-github-users',
            open: 'https://gitusers-search.netlify.app/',
        },
        {
            title: 'House/Room Marketplace',
            desc: 'Using this app you can rent/sell room/house easily',
            techStack: 'React.js',
            open: 'https://house-room-marketplace.vercel.app/',
            link: 'https://github.com/sunilshrees/house-room-marketplace',
        },
    ];
    return (
        <div id='projects'>
            <FadeInSection>
                <div className='section-header '>
                    <span className='section-title'>/ projects</span>
                </div>
            </FadeInSection>

            {/* {spotlightProjects.map((project) => (
                    return <></>
                ))} */}
            {/* <Slider /> */}

            <div className='project-container'>
                <ul className='projects-grid'>
                    {projects.map((project, i) => (
                        <FadeInSection delay={`${i + 1}00ms`}>
                            <li className='projects-card'>
                                <div className='card-header'>
                                    <div className='folder-icon'>
                                        <BsFillFolderFill
                                            style={{
                                                fontSize: 35,
                                            }}></BsFillFolderFill>
                                    </div>
                                    <span className='external-links'>
                                        <a
                                            href={project.link}
                                            className='github-icon'>
                                            <FiGithub
                                                style={{
                                                    fontSize: 22,
                                                    color: 'var(--green-bright)',
                                                }}></FiGithub>
                                        </a>
                                        {project.open && (
                                            <a
                                                href={project.open}
                                                className='open-icon'>
                                                <AiOutlineLink
                                                    style={{
                                                        fontSize: 25,
                                                        color: 'var(--green-bright)',
                                                    }}></AiOutlineLink>
                                            </a>
                                        )}
                                    </span>
                                </div>

                                <div className='card-title'>
                                    {project.title}
                                </div>
                                <div className='card-desc'>{project.desc}</div>
                                <div className='card-tech'>
                                    {project.techStack}
                                </div>
                            </li>
                        </FadeInSection>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Projects;
