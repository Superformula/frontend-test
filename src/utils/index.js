import React from 'react';

export const svgX = (props) =>
    <svg {...props} width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path
                d="M9.1,8.1 L16.1,15.1 L15.1,16.1 L8.1,9.1 L1.1,16.1 L0,15.1 L7,8.1 L0,1.1 L1.1,0 L8.1,7 L15.1,0 L16.1,1.1 L9.1,8.1 Z"
                id="path-1"/>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <mask id="mask-1" fill="white">
                <use xlinkHref="#path-1"/>
            </mask>
            <use id="icon" fill="#000000" fillRule="nonzero" xlinkHref="#path-1"/>
        </g>
    </svg>;

export const svgDownArrow = (props) =>
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6"
         xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <polygon points="7 0.8 7.8 1.5 4 5.3 0.3 1.5 1 0.8 4 3.7" id='path-2'/>
        </defs>
        <g strokeWidth="1" fillRule="evenodd" fill="none">
            <g transform="translate(-319 -236)translate(0 42)translate(25 183)translate(78 4)translate(216 7)">
                <mask fill="white"/>
                <use fillRule="nonzero" xlinkHref="#path-2" fill="#969696"/>
            </g>
        </g>
    </svg>;

export const svgCheckMark = (props) => <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Filtering" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Filtering-(Open-fields)-2---Mobile" transform="translate(-26.000000, -477.000000)">
            <g id="cuisine" transform="translate(24.000000, 341.000000)">
                <g id="radios" transform="translate(2.000000, 72.000000)">
                    <g id="check" transform="translate(0.000000, 64.000000)">
                        <circle id="Oval" fill="#000000" cx="8" cy="8" r="8"/>
                        <polygon id="icon" fill="#FFFFFF" fillRule="nonzero"
                                 points="7.21428571 10.0738738 12.537243 4.55376999 13.462757 5.44623001 7.21428571 11.9261262 3.53724295 8.11289668 4.46275705 7.22043666"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>;


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
