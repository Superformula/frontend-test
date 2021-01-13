// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import CategoriesDropDown from './index';

// Mocks
// -----

jest.mock("../DropDownMenu", () => 'DropDownMenu');
jest.mock("../../hooks/requestData", () => () => 1);

// Internal
// --------

const children = ['Cat1', 'Cat2', 'Cat3'];

const getComponent = (props = {}) => renderer.create(
    <CategoriesDropDown {...props} >
        { children }
    </CategoriesDropDown>,
);

// Tests
// -----

describe('src/ts/components/CategoriesDropDown', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
