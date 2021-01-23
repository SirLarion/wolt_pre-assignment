import React from 'react';

import { RestaurantType } from '../types';

interface Props {
    title: string;
    restaurants: RestaurantType[];
}


const Section: React.FC<Props> = ({ title, restaurants }) => {
    console.log(restaurants);

    return (
        <div className='section'>
            { title }
        </div>
    );
}

export default Section;
