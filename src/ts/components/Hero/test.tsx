// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Hero from './';

// Internal
// --------

const defaultProps = {
    title: 'Test Title'
};

const getComponent = (props = {}) => renderer.create(
    <Hero {...defaultProps} {...props} />,
);

// Tests
// -----

describe('src/js/App', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
