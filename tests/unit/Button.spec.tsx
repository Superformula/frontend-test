/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import { Button } from '~/components/atoms/Button/Button';

context('atom: button', () => {
  it('should call the click handler on click', () => {
    const handleClick = cy.stub().as('handleClick');

    mount(<Button onClick={handleClick}>Hello!</Button>);

    cy
      .get('@handleClick')
      .should('not.have.been.called');

    cy
      .get('button')
      .click();

    cy
      .get('@handleClick')
      .should('have.been.called');
  });
});
