// Imports
// -------

// Libraries
import React from 'react';
// Components
import Checkbox from '../Checkbox';
// Images
import carat from '../../../img/carat.svg';
// Style
import style from './style.module.css';

// Internal
// --------

export interface DropDownMenuProps {
    text?: string,
    children: string[],
    selected?: boolean,
    dimensions?: {
        width: number,
        height: number
    },
    option?: string | null,
    setOption?(arg0: string): any,
    onClick?(): any
}

const DropDownMenu:React.FC<DropDownMenuProps> = ({text='', children, selected = false, dimensions = {}, onClick = () => {},  option = null, setOption = (arg0: string) => {}}) => {
    //
    // Render

    let shownText = text;
    if (option) {
        shownText = option;
    }

    const getListItems = (child: string, idx: number) => (
            <li key={idx}>
                <Checkbox checked={ option === child } onClick={ () => setOption(child) }>
                    {child}
                </Checkbox>
            </li>
    );

    const listClassName = [style.dropDownMenuList, selected ? style.show : ''].join(' ');
    const menuStyle = {
        width: dimensions.width,
        height: dimensions.height
    };

    return (
        <div className={ style.dropDownMenu } onClick={ onClick } style={ menuStyle }>
            <div className={ style.selectedText }>
                <span>{ shownText }</span>
                <img src={ carat } alt='dropdown button' className={ [style.carat, selected ? style.rotate : ''].join(' ') }/>
            </div>
            <ul className={ listClassName }>
                { React.Children.map(children, getListItems) }
            </ul>
        </div>
    );
}

// Exports
// -------

export default DropDownMenu;
