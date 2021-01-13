// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Button from './';

// Internal
// --------

const defaultProps = {
  text: 'Testing'
};

const getComponent = (props = {}) => renderer.create(
    <Button {...defaultProps} {...props} />,
);

// Tests
// -----

describe('src/ts/components/Button', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });

        describe('tier', () => {
            it('renders "secondary" correctly', () => {
                component = getComponent({ tier: 'secondary'});
                expect(component).toMatchSnapshot();
            });
        });

        describe('size', () => {
            it('renders "large" correctly', () => {
                component = getComponent({ size: 'large'});
                expect(component).toMatchSnapshot();
            });
        });

        describe('disabled', () => {
            it('renders true correctly', () => {
                component = getComponent({ disabled: true });
                expect(component).toMatchSnapshot();
            });
        });
    });

    describe('Interaction', () => {
        it('calls "onClick" correctly', () => {
            const mockFn = jest.fn();
            component = getComponent({ onClick: mockFn });
            component.root.findByType('button').props.onClick();
            expect(mockFn).toHaveBeenCalled();
        });
    });
});
