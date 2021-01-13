// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import MainView from './index';

// Mocks
// -----

jest.mock("../CardGallery", () => 'CardGallery');
jest.mock('../CategoriesDropDown', () => 'CategoriesDropDown');
jest.mock("../Hero", () => 'Hero');
jest.mock('../FilterBy', () => 'FilterBy');
jest.mock("../Checkbox", () => 'Checkbox');
jest.mock('../DropDownMenu', () => 'DropDownMenu');
jest.mock('../Button', () => 'Button');

// Internal
// --------

const getComponent = (props = {}) => renderer.create(
    <MainView {...props} />,
);

// Tests
// -----

describe('src/ts/components/MainView', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
