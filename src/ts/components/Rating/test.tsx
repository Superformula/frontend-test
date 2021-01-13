// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Rating from './index';

// Mocks
// -----

jest.mock("../../../img/emptyStar.svg", () => 'emptyStar.svg');
jest.mock("../../../img/halfStar.svg", () => 'halfStar.svg');
jest.mock("../../../img/fullStar.svg", () => 'fullStar.svg');

// Internal
// --------

const defaultProps = {
    value: 3
};

const getComponent = (props = {}) => renderer.create(
    <Rating {...defaultProps} {...props} />,
);

// Tests
// -----

describe('src/ts/components/Rating', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
