// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import DropDownMenu from './index';

// Mocks
// -----

jest.mock("../Checkbox", () => 'Checkbox');
jest.mock('../../../img/carat.svg', () => 'carat.svg');

// Internal
// --------

const children = ['Opt1', 'Opt2', 'Opt3'];

const getComponent = (props = {}) => renderer.create(
    <DropDownMenu {...props}>
        { children }
    </DropDownMenu>,
);

// Tests
// -----

describe('src/ts/components/DropDownMenu', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
