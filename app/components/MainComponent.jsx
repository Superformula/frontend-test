import * as React from 'react';
import { FilterBar } from './FilterBar';
import { SearchResults } from './SearchResults';

export function MainComponent() {
    return (<>
        <h1>Restaurants</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <FilterBar />
        <SearchResults />
    </>);
}
