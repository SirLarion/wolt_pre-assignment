import React from 'react';
import { Blurhash } from 'react-blurhash';

import imgOffline from '../resources/blurhash_offline_mask.png';

import '../css/restaurant.css';

import { RestaurantType } from '../types';


//===================================================================/

/*
 * Represents a single element (restaurant) in a Carousel
                    className={data.online ? 'restaurant__blurhash--online' : 'restaurant__blurhash--offline'}
 */
const Restaurant: React.FC<{ data: RestaurantType; }> = ({data}) => {
    return (
        <div className='restaurant'>
            <div className='restaurant__blurhash'>
                <img 
                    src={imgOffline} 
                    draggable={false}
                    className={'blurhash__mask '.concat(data.online ? 
                        'blurhash__mask--online' : 'blurhash__mask--offline'
                    )}
                />
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
