/* Dropdown component based on the example from react-contexify
   https://fkhadra.github.io/react-contexify/
*/
import React, { useState, useRef } from "react";
import { Item, Menu, useContextMenu } from "react-contexify";
import cx from "clsx";
import "./dropdown.scss";
import Label from "../label";
import FilterOption from './filter-option.js';


export default ({ id, value, options, onChange, label }) => {
  const [isVisible, setVisibility] = useState(false);
  const MenuPosition = useRef();
  const triggerRef = useRef();
  const { show, hideAll } = useContextMenu({ id });

  function getMenuPosition() {
    const { left, bottom } = triggerRef.current.getBoundingClientRect();
    MenuPosition.current = { x: left, y: bottom + 1 };
    return MenuPosition.current;
  }

  function handleMenuTrigger(e) {
    if (isVisible) {
      setVisibility(false);
      hideAll();
      return;
    }
    setVisibility(true);
    show(e, {
      position: getMenuPosition()
    });
  }

  function handlekeyboard(e) {
    switch (e.key) {
      case "Enter":
        setVisibility(true);
        show(e, {
          position: getMenuPosition()
        });
        break;
      case "Escape":
        if (isVisible) {
          setVisibility(false);
          hidelAll();
        }
        break;
      default:
        break;
    }
  }

  function clearVisibility() {
    setVisibility(false);
  }

  function handleChange({ data }) {
    onChange(id, data.value);
  }

  
 console.log('options',options)
  const selectedName = value && options.find( o => o.id === value)?.name;

  return (
    <div>
      <button
        id={`label-${id}`}
        onClick={handleMenuTrigger}
        onKeyDown={handlekeyboard}
        className={"dropdown"}
        tabIndex={0}
        ref={triggerRef}
        aria-haspopup="true"
        aria-expanded={isVisible}
      >
        <Label className="filter-label"> {selectedName || label} </Label>
      </button>
      <Menu id={id} animation="fade" onHidden={clearVisibility}>
        {options.map(option => (
          <Item key={option.id} onClick={handleChange} data={{ value: option.id }}>
            <FilterOption isSelected={value === option.id} label={option.name}/>
          </Item>
        ))}
      </Menu>
    </div>
  );
};
