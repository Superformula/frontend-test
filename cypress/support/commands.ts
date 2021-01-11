/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import expect from 'expect';

// Put this in cypress/support/commands.js to use everywhere
Cypress.Commands.overwrite(
  'should',
  (originalFn, subject, expectation, ...args) => {
    // See if the expectation is a string and if it is a member of Jest's expect
    if (
      typeof expectation === 'string' &&
      (expect(subject) as any)[expectation]
    ) {
      return originalFn(subject, (s: any) =>
        (expect(s) as any)[expectation](...args)
      );
    }

    return originalFn(subject, expectation, ...args);
  }
);
