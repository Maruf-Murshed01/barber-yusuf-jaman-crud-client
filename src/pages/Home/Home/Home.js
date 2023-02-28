import React from 'react';
import Banner from '../Banner/Banner';
import BeardStyle from '../BeardStyle/BeardStyle';
import Schedule from '../Schedule/Schedule';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Schedule></Schedule>
            <BeardStyle></BeardStyle>
        </div>
    );
};

export default Home;