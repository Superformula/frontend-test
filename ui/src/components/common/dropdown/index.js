/* Dropdown component based on the example from react-contexify
   https://fkhadra.github.io/react-contexify/
*/
import React, { useState, useRef } from "react";
import { Item, Menu, useContextMenu } from "react-contexify";
import cx from "clsx";
import "./dropdown.scss";
import Label from "../label";


export default ({ id, value, options, onChange, label }) => {
  const [isVisible, setVisibility] = useState(false);
  const MenuPosition = useRef();
  const triggerRef = useRef();
  const { show, hidelAll } = useContextMenu({ id });

  function getMenuPosition() {
    const { left, bottom } = triggerRef.current.getBoundingClientRect();
    MenuPosition.current = { x: left, y: bottom + 8 };
    return MenuPosition.current;
  }

  function handleMenuTrigger(e) {
    if (isVisible) {
      setVisibility(false);
      hidelAll();
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
        <Label> {value || label} </Label>
      </button>
      <Menu id={id} animation="fade" onHidden={clearVisibility}>
        {options.map(option => (
          <Item key={option} onClick={handleChange} data={{ value: option }}>
            <div>
              <span>{option}</span>
            </div>
          </Item>
        ))}
      </Menu>
    </div>
  );
};
