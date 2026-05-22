'use client';

import { useState, useEffect, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import '@/style/slider.css';
import image1 from '@/assets/port.JPG';
import image2 from '@/assets/restro.JPG';
import image3 from '@/assets/ecom.JPG';
import type { SpotlightProject } from '@/types';

const spotlightProjects: SpotlightProject[] = [
    { image: image1, title: 'portfolio' },
    { image: image2, title: 'restaurant' },
    { image: image3, title: 'ecommerce' },
];

export default function Slider() {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const lastIndex = spotlightProjects.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(slider);
    }, [index]);

    const handlePrevKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') setIndex(index - 1);
    };

    const handleNextKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') setIndex(index + 1);
    };

    return (
        <div className="container-slider">
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
                    <article key={im.title} className={position}>
                        <Image
                            src={im.image}
                            alt={im.title}
                            width={800}
                            height={300}
                            sizes="(max-width: 768px) 100vw, 800px"
                            loading="lazy"
                            className="slider-image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </article>
                );
            })}

            <div className="golo">
                <div
                    className="prev"
                    onClick={() => setIndex(index - 1)}
                    onKeyDown={handlePrevKey}
                    role="button"
                    tabIndex={0}>
                    <AiFillLeftCircle fill="teal" size={25} />
                </div>
            </div>
            <div className="golo">
                <div
                    className="next"
                    onClick={() => setIndex(index + 1)}
                    onKeyDown={handleNextKey}
                    role="button"
                    tabIndex={0}>
                    <AiFillRightCircle fill="teal" size={25} />
                </div>
            </div>
        </div>
    );
}
