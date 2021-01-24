import React from 'react';
import { Blurhash } from 'react-blurhash';

import '../css/restaurant.css';

import { RestaurantType } from '../types';


//===================================================================/

/*
 * Represents a single element (restaurant) in a Carousel
 */
const Restaurant: React.FC<{ data: RestaurantType; }> = ({data}) => {
    return (
        <div className='restaurant'>
            <div className='restaurant__blurhash'>
                <Blurhash 
                    hash={data.blurhash}
                    width={300}
                    height={270}
                />
            </div>
            <div className='restaurant__title'>
                { data.name }
            </div>
        </div>
    );
}

//===================================================================/

export default Restaurant;
