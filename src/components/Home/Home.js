import React from 'react';
import Header from '../Header/Header';
import Meals from '../Meals/Meals';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Meals></Meals>
        </div>
    );
};

export default Home;