import * as React from "react";

import styles from "./Icon.css";

type IconName =
  | "downArrow"
  | "upArrow"
  | "selected"
  | "unselected"
  | "checkboxEmpty"
  | "checkboxFill"
  | "starEmpty"
  | "starFill"
  | "starHalf"
  | "circleFill";

interface IconProps {
  name: IconName;
  [x: string]: string;
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  switch (name) {
    case "downArrow":
      return <DownArrowIcon {...rest} />;
    case "upArrow":
      return <UpArrowIcon {...rest} />;
    case "selected":
      return <SelectedIcon {...rest} />;
    case "unselected":
      return <UnselectedIcon {...rest} />;
    case "checkboxEmpty":
      return <CheckboxEmptyIcon {...rest} />;
    case "checkboxFill":
      return <CheckboxFillIcon {...rest} />;
    case "starEmpty":
      return <StarEmptyIcon {...rest} />;
    case "starFill":
      return <StarFillIcon {...rest} />;
    case "starHalf":
      return <StarHalfIcon {...rest} />;
    case "circleFill":
      return <CircleFillIcon {...rest} />;
    default:
      return null;
  }
};

export default Icon;

interface SizableProps {
  size?: "md" | "xl";
}

const DownArrowIcon: React.FC = () => {
  return (
    <svg
      className={styles.arrow}
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
      className={styles.arrow}
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

const SelectedIcon: React.FC = () => {
  return (
    <svg
      className={styles.check}
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

const UnselectedIcon: React.FC = () => {
  return (
    <svg
      className={styles.check}
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

const CheckboxEmptyIcon: React.FC = () => {
  return (
    <svg
      data-testid="uncheckedIcon"
      className={styles.checkbox}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 426.667 426.667"
      version="1.1"
      viewBox="0 0 426.67 426.67"
      xmlSpace="preserve"
    >
      <path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333S331.2,0,213.333,0    z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667S384,119.04,384,213.333    S307.627,384,213.333,384z" />
    </svg>
  );
};

const CheckboxFillIcon: React.FC = () => {
  return (
    <svg
      data-testid="checkedIcon"
      className={styles.checkbox}
      enableBackground="new 0 0 426.667 426.667"
      version="1.1"
      viewBox="0 0 426.667 426.667"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m213.33 106.67c-58.88 0-106.67 47.787-106.67 106.67s47.787 106.67 106.67 106.67 106.67-47.787 106.67-106.67-47.787-106.67-106.67-106.67z" />
      <path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667     S384,119.04,384,213.333S307.627,384,213.333,384z" />
    </svg>
  );
};

const StarEmptyIcon: React.FC<SizableProps> = ({ size = "md" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className={`${styles.star} ${size === "xl" && styles.starXl}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
      />
    </svg>
  );
};

const StarFillIcon: React.FC<SizableProps> = ({ size = "md" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className={`${styles.star} ${size === "xl" && styles.starXl}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
};

const StarHalfIcon: React.FC<SizableProps> = ({ size = "md" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className={`${styles.star} ${size === "xl" && styles.starXl}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z"
      />
    </svg>
  );
};

interface CircleFillIconProps {
  color?: "green" | "red";
}

const CircleFillIcon: React.FC<CircleFillIconProps & SizableProps> = ({
  color = "green",
  size = "md",
}) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`${styles.circleFill} ${
        color === "green" ? styles.circleFillGreen : styles.circleFillRed
      } ${size === "xl" && styles.circleFillXl}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  );
};
