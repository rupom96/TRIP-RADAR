import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import Services from '../Services/Services';
import Staff from '../Staff/Staff';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Staff></Staff>
            <Contact></Contact>

        </div>
    );
};

export default Home;