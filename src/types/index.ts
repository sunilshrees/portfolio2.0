import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

export type Project = {
    title: string;
    desc: string;
    techStack: string;
    link: string;
    open?: string;
};

export type SpotlightProject = {
    image: StaticImageData;
    title: string;
};

export type FadeInProps = {
    children: ReactNode;
    delay?: string;
};
