import React from 'react';

import '../css/section.css';

// Carousel element by Maksim Marinich: https://github.com/maxmarinich/react-alice-carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Restaurant from './Restaurant';
import { SectionType, RestaurantType } from '../types';




/*
 * Helper method for mapping list of restaurants to corresponding Carousel
 * items
 */
function toRestaurantCard(restaurant: RestaurantType, index: number) {
    return (
        <div key={index}>
            <Restaurant data={restaurant} />
        </div>
    );
}

const responsive = {
    1: { items: 1 },
    650: { items: 2 },
    975: { items: 3 },
};


//===================================================================/
/*
 * Represents a section of the discovery page containing a list
 * of restaurants filtered according to a certain rule (e.g. 'nearby',
 * 'popular', 'new' etc.)
 */
const Section: React.FC<{ data: SectionType; }> = ({ data }) => {

    const items = data.restaurants.map(toRestaurantCard);

    return (
        <div className='section'>
            <div className='section__wrapper'>
                <div className='section__header'>
                    { data.title }
                </div>
                <div className='section__body'>
                    <AliceCarousel 
                        items={items} 
                        responsive={responsive} 
                        mouseTracking
                        infinite
                    />
                </div>
            </div>
        </div>
    );
}
//===================================================================/

export default Section;
