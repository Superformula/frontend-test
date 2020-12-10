import * as React from "react";
import Icon from "../../../shared/Icon/Icon";
import styles from "../Filters.css";

interface SelectProps {
  label: string;
  value: string;
  onSelect: (option: string) => void;
  options: string[];
  width?: string | number;
}

const useSelectState = (ref: React.RefObject<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSelect = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);

  // Detect clicks outside the select
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isOpen, toggleSelect };
};

const Select: React.FC<SelectProps> = ({ label, value, onSelect, options, width = "100px" }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const { isOpen, toggleSelect } = useSelectState(wrapperRef);

  const OptionsList = () => {
    return (
      <div className={styles.selectOptions} style={{ width }}>
        {["All", ...options].map((option: string) => (
          <SelectOption
            handleClick={() => onSelect(option)}
            key={option}
            active={option === value}
            option={option}
          />
        ))}
      </div>
    );
  };

  return (
    <div ref={wrapperRef} onClick={toggleSelect} className={styles.filter} style={{ width }}>
      <label>{value !== "All" ? value : label}</label>
      {isOpen ? <Icon name="upArrow" /> : <Icon name="downArrow" />}
      {isOpen ? <OptionsList /> : null}
    </div>
  );
};

interface SelectOptionProps {
  option: string;
  active: boolean;
  handleClick: () => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({ option, active, handleClick }) => {
  return (
    <div data-testid="selectOption" className={styles.selectOption} onClick={handleClick}>
      {active ? <Icon name="selected" /> : <Icon name="unselected" />}
      <div>{option}</div>
    </div>
  );
};

export default Select;
