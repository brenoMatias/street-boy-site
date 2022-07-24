import React from 'react';
import './HomeCss.css';
import Hero1 from '../../COMPONENTS/Heroes/hero1/hero1';
import Hero2 from '../../COMPONENTS/Heroes/hero2/hero2';
import Hero3 from '../../COMPONENTS/Heroes/hero3/hero3';
import Hero4 from '../../COMPONENTS/Heroes/hero4/hero4';

function Home() {
    return (
        <div>
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Hero4 />

        </div>
    )
}

export default Home;