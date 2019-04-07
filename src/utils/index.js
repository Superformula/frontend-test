import React from 'react';

export const escapeHandler = (onPress) => window.addEventListener('keydown', event => {
    if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
    }

    const {key, keyIdentifier, keyCode} = event;
    let handled = false;
    if (key !== undefined && key.toLowerCase() === 'escape') {
        // Handle the event with KeyboardEvent.key and set handled true.
        handled = true;
    } else if (keyIdentifier !== undefined && keyIdentifier === 'U+001B') {
        // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
        handled = true;
    } else if (keyCode !== undefined && keyCode === 27) {
        // Handle the event with KeyboardEvent.keyCode and set handled true.
        handled = true;
    }

    if (handled) {
        // Suppress "double action" if event handled
        onPress();
        event.preventDefault();
    }
}, true);

export const safeInvoke = function* (func) {
    try {
        yield func();
    } catch (e) {
        console.error(e);
    }
};

export const buildFilterString = (filters) => {
    let filterString = '';
    const addComma = (f) => (f && f.length && filterString && filterString.length ? ', ' : '') + f;
    if (filters.category) filterString += filters.category;
    if (filters.price) filterString += addComma(filters.price);
    if (filters.open) filterString += addComma(filters.open ? 'Open Now' : '');
    return filterString === '' ? 'All' : filterString;
};
