// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import OpenStatus from './index';

// Mocks
// -----

jest.mock("../../../img/closedIcon.svg", () => 'closedIcon.svg');
jest.mock("../../../img/openIcon.svg", () => 'openIcon.svg');

// Internal
// --------

const getComponent = (props = {}) => renderer.create(
    <OpenStatus {...props} />,
);

// Tests
// -----

describe('src/ts/components/OpenStatus', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
