import '@testing-library/jest-dom';
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Filter from '../components/filter'

/* Test: When the user clicks the Price dropdown, there should be
   a menu item with the text "$" corresponding to the price option */
test('Price options are displayed', async ()=>{
    const priceOptions = [{id:'$', name:'$'}]
    render(<Filter 
        priceOptions={priceOptions}
        categoryOptions={[]}
         />)
    //send click to price dropdown
    const elem = await screen.findByText('Price');
    fireEvent.click(elem);
    //Try to find menuitem element
    const item = await screen.findByRole('menuitem');
    expect(item).toHaveTextContent('$')

})


test('Category options are displayed', async ()=>{
    const categoryOptions = [{id:'sushi', name:'Sushi'}]
    render(<Filter 
        priceOptions={[]}
        categoryOptions={categoryOptions}
         />)

    //send click to price dropdown
    const elem = await screen.findByText('Category');
    fireEvent.click(elem);
    //Try to find menuitem element
    const item = await screen.findByRole('menuitem');
    expect(item).toHaveTextContent('Sushi')

})