// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import FilterBy from './index';

// Mocks
// -----

jest.mock('../Button', () => 'Button');

// Internal
// --------

const children = "Text"

const getComponent = (props = {}) => renderer.create(
    <FilterBy {...props} >
        { children }
    </FilterBy>,
);

// Tests
// -----

describe('src/ts/components/FilterBy', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
