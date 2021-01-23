import React from 'react';
import './css/App.css';

import logo from './resources/notwolt.svg';
import data from './resources/discovery_page.json';

import Section from './components/Section';
import { RestaurantType, SectionType } from './types';


function toSection(section: SectionType, index: number) {
    return (
        <div key={index}> 
            <Section 
                title={section.title} 
                restaurants={section.restaurants}
            />
        </div>
    );
}

const NotWoltApp: React.FC = () => {
    const sections = data['sections'];

    return (
        <div className='app'>
            <div className='app__header'>
                <img className='app__logo' src={logo} />
            </div>
            <div className='app__body'>
                {sections.map(toSection)}
            </div>
        </div>
    );
}

export default NotWoltApp;
