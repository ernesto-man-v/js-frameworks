import React from 'react';
import { useSelector } from 'react-redux'

import {CategoriesSection} from '../components/Sections';

export const Categories = (props) => {

    const categories = useSelector(((state) => state.categories));
    console.log('categories', categories);

    return (
        <CategoriesSection categories={categories} />
    )
}