// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Checkbox from './index';

// Mocks
// -----

jest.mock('../../../img/checkedCheckbox.svg', () => 'checkedCheckbox.svg');
jest.mock('../../../img/emptyCheckbox.svg', () => 'emptyCheckbox.svg');
jest.mock('../../../img/filledCheckbox.svg', () => 'filledCheckbox.svg');

// Internal
// --------

const children = "Test";

const getComponent = (props = {}) => renderer.create(
    <Checkbox {...props} >
        { children }
    </Checkbox>,
);

// Tests
// -----

describe('src/ts/components/Checkbox', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
