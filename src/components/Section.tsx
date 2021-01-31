import React from 'react';

import '../css/section.css';

// Carousel element by Maksim Marinich: https://github.com/maxmarinich/react-alice-carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Restaurant from './Restaurant';
import { isWide } from '../utils';
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


/* Mapping of screen sizes to the corresponding amount of elements that should
 * be shown in the carousel */
const responsive = {
    1: { items: 1 },
    560: { items: 2 },
    1300: { items: 3 },
    1800: { items: 4 }
};


//===================================================================/
/*
 * Represents a section of the discovery page containing a list
 * of restaurants in a carousel filtered according to a certain rule 
 * (e.g. 'nearby', 'popular', 'new' etc.)
 */
const Section: React.FC<{ data: SectionType; }> = ({ data }) => {

    const items = data.restaurants.map(toRestaurantCard);

    return (
        <div className='section'>
                <div role='wrapper' className={ 'section__wrapper '.concat(isWide() ? 'wrapper--85' : 'wrapper--100') }>
                    <div className={ 'noselect section__header'.concat(isWide() ? '' : ' section__header--padding') }>
                        { data.title }
                    </div>
                    <div className='section__body'>
                        <AliceCarousel 
                            items={items} 
                            responsive={responsive} 
                            mouseTracking
                            infinite
                            swipeDelta={5}
                            paddingLeft={35}
                        />
                    </div>
                </div>
        </div>
    );
}
//===================================================================/

export default Section;
