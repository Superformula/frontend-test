import React from "react";
import styles from "./Filters.css";

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
        {options.map((option: string) => (
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
      <label>{label}</label>
      {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
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
    <div className={styles.selectOption} onClick={handleClick}>
      {active ? <CheckFillIcon /> : <CheckEmptyIcon />}
      <div>{option}</div>
    </div>
  );
};

export default Select;

// Icons
const DownArrowIcon: React.FC = () => {
  return (
    <svg
      className={styles.arrowIcon}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m509.12 125.97c-3.838-3.838-10.055-3.838-13.893 0l-239.22 239.23-239.23-239.23c-3.838-3.838-10.055-3.838-13.893 0s-3.838 10.055 0 13.893l246.18 246.18c1.842 1.842 4.337 2.878 6.947 2.878s5.104-1.036 6.946-2.878l246.17-246.18c3.838-3.838 3.838-10.055 0-13.893z" />
    </svg>
  );
};

const UpArrowIcon: React.FC = () => {
  return (
    <svg
      className={styles.arrowIcon}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m509.12 372.08-246.17-246.18c-3.684-3.684-10.209-3.684-13.893 0l-246.18 246.18c-3.838 3.838-3.838 10.055 0 13.893s10.055 3.838 13.893 0l239.23-239.23 239.22 239.23c1.919 1.919 4.433 2.878 6.946 2.878 2.514 0 5.028-0.959 6.946-2.878 3.838-3.836 3.838-10.054 0-13.892z" />
    </svg>
  );
};

const CheckFillIcon: React.FC = () => {
  return (
    <svg
      className={styles.checkIcon}
      enableBackground="new 0 0 477.867 477.867"
      version="1.1"
      viewBox="0 0 477.87 477.87"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m238.93 0c-131.96 0-238.93 106.97-238.93 238.93s106.97 238.93 238.93 238.93 238.93-106.97 238.93-238.93c-0.14-131.9-107.03-238.79-238.93-238.93zm131.53 165.67-170.67 170.67c-6.665 6.663-17.468 6.663-24.132 0l-68.267-68.267c-6.78-6.548-6.968-17.352-0.42-24.132s17.352-6.968 24.132-0.42c0.142 0.138 0.282 0.277 0.42 0.42l56.201 56.201 158.6-158.6c6.78-6.548 17.584-6.36 24.132 0.419 6.388 6.614 6.388 17.099 0 23.713z" />
    </svg>
  );
};

const CheckEmptyIcon: React.FC = () => {
  return (
    <svg
      className={styles.checkIcon}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m256 0c-140.97 0-256 115.05-256 256 0 140.97 115.05 256 256 256 140.97 0 256-115.05 256-256 0-140.97-115.05-256-256-256zm0 482c-124.62 0-226-101.38-226-226s101.38-226 226-226 226 101.38 226 226-101.38 226-226 226z" />
    </svg>
  );
};
