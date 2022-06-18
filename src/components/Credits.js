import React from 'react';

import FadeInSection from './FadeInSection';

const Credits = () => {
    return (
        <FadeInSection>
            <div id='credits'>
                <div className='ending-credits'>
                    <div>Built and designed by Sunil Shrees. </div>
                    <div>All rights reserved. © {new Date().getFullYear()}</div>
                </div>
            </div>
        </FadeInSection>
    );
};

export default Credits;
