import React from 'react';

import '../css/section.css';

//Carousel element by sag1v, https://github.com/sag1v/react-elastic-carousel
import Carousel from 'react-elastic-carousel';

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

//===================================================================/
/*
 * Represents a section of the discovery page containing a list
 * of restaurants filtered according to a certain rule (e.g. 'nearby',
 * 'popular', 'new' etc.)
 */
const Section: React.FC<{ data: SectionType; }> = ({ data }) => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 650, itemsToShow: 2, itemsToScroll: 2 },
        { width: 975, itemsToShow: 3 }
    ];

    return (
        <div className='section'>
            <div className='section__wrapper'>
                <div className='section__header'>
                    { data.title }
                </div>
                <div className='section__body'>
                    <Carousel 
                        isRTL={false} 
                        pagination={false}
                        breakPoints={breakPoints}
                    >
                        { data.restaurants.map(toRestaurantCard) }
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
//===================================================================/

export default Section;
