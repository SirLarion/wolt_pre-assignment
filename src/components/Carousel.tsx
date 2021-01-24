import React from 'react';

import { RestaurantType } from '../types';


interface Props { restaurants: RestaurantType[]; }

const CarouselContainer: React.FC<Props> = ({ restaurants }) => {
    const numVisibleRestaurants = 3;
    return (
        <div>
            Carousel
        </div>
    );
}

export default CarouselContainer;
