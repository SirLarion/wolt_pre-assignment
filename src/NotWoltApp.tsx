import React from 'react';

import './css/App.css';

import logo from './resources/notwolt.svg';
import data from './resources/discovery_page.json';

import Section from './components/Section';
import { SectionType } from './types';

/*
 * Helper method for mapping list of sections to corresponding divs
 */
function toSection(sectionData: SectionType, index: number) {
    return (
        <div key={index}> 
            <Section 
                data={sectionData} 
            />
        </div>
    );
}

//===================================================================/
/*
 * NotWolt - a prototype discovery page made for Wolt's Summer 2021
 * frontend job application pre-assignment
 */
const NotWoltApp: React.FC = () => {
    const sections = data['sections'];

    return (
        <div className='app'>
            <div className={ 'app__wrapper '.concat(window.innerWidth >= 1300 ? 
                    'wrapper--85' : 'wrapper--100')
            }>
                <div className='app__header'>
                    <img className='app__logo' src={logo} alt='Not Wolt' draggable={false} />
                    <div className='app__discover'>Discover</div>
                </div>
                <div className='app__body'>
                    {sections.map(toSection)}
                </div>
            </div>
        </div>
    );
}

//===================================================================/
//
export default NotWoltApp;
