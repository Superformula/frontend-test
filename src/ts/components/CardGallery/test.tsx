// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import CardGallery from './index';

// Mocks
// -----

jest.mock("../Card", () => 'Card');

// Internal
// --------

const defaultProps = {
    data: [
        {
            id: 'Id',
            imgSrc: 'ImageSrc',
            title: 'Title',
            rating: 3,
            category: 'American',
            price: 3,
            status: 'open',
        },
        {
            id: 'Id2',
            imgSrc: 'ImageSrc2',
            title: 'Title2',
            rating: 4,
            category: 'Mexican',
            price: 2,
            status: 'closed',
        }
    ]
}

const getComponent = (props = {}) => renderer.create(
    <CardGallery {...defaultProps} {...props} />,
);

// Tests
// -----

describe('src/ts/components/CardGallery', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
