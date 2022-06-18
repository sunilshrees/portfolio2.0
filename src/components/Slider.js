import React, { useState, useEffect } from 'react';

import '../style/slider.css';
import { AiFillLeftCircle } from 'react-icons/ai';
import { AiFillRightCircle } from 'react-icons/ai';
import image1 from '../assets/port.JPG';
import image2 from '../assets/restro.JPG';
import image3 from '../assets/ecom.JPG';

function Slider() {
    const [index, setIndex] = useState(1);

    const spotlightProjects = [
        {
            image: image1,
            title: 'portfolio',
        },
        {
            image: image2,
            title: 'restaurant',
        },
        {
            image: image3,
            title: 'ecommerce',
        },
    ];

    useEffect(() => {
        const lastIndex = spotlightProjects.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, spotlightProjects.length]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <div className='container-slider'>
            {spotlightProjects.map((im, i) => {
                let position = 'nextSlide';
                if (i === index) {
                    position = 'activeSlide';
                }
                if (
                    i === index - 1 ||
                    (index === 0 && i === spotlightProjects.length - 1)
                ) {
                    position = 'lastSlide';
                }
                return (
                    <article key={i} className={position}>
                        <img src={im.image} alt={`${im.title}`} />
                    </article>
                );
            })}

            <div className='golo'>
                <div className='prev' onClick={() => setIndex(index - 1)}>
                    <AiFillLeftCircle fill='teal' size={25} />
                </div>
            </div>
            <div className='golo'>
                <div className='next' onClick={() => setIndex(index + 1)}>
                    <AiFillRightCircle fill='teal' size={25} />
                </div>
            </div>
        </div>
    );
}

export default Slider;
