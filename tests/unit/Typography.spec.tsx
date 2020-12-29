/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import { Typography } from '~/components/atoms/Typography/Typography';

context('atom: typography', () => {
  it('should contain the text passed as children', () => {
    const defaultElement = 'h1';
    const text = 'Test Me';

    mount(<Typography>{text}</Typography>);

    cy
      .get(defaultElement)
      .should('be.visible')
      .should('contain', text);
  });

  it('should render the expected element if variant = "title"', () => {
    const element = 'h1';
    mount(<Typography variant="title">Hello!</Typography>);

    cy
      .get(element)
      .should('be.visible');
  });

  it('should render the expected element if variant = "subtitle"', () => {
    const element = 'h2';
    mount(<Typography variant="subtitle">Hello!</Typography>);

    cy
      .get(element)
      .should('be.visible');
  });

  it('should render the expected element if variant = "headline"', () => {
    const element = 'h3';
    mount(<Typography variant="headline">Hello!</Typography>);

    cy
      .get(element)
      .should('be.visible');
  });

  it('should render the expected element if variant = "body"', () => {
    const element = 'p';
    mount(<Typography variant="body">Hello!</Typography>);

    cy
      .get(element)
      .should('be.visible');
  });
});
