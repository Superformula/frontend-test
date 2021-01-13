// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import App from './';

// Internal
// --------

const getComponent = (props = {}) => renderer.create(
    <App {...props} />,
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
