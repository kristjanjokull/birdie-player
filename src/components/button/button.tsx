import { FC } from "react";

type ButtonType = "control" | "sidebar" | "big-play";

type ButtonProps = {
  type: ButtonType;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
};

const getButtonClassName = (type: ButtonType) => {
  let className = "button ";
  switch (type) {
    case "big-play":
      className += "button__bigPlay";
      break;
    case "sidebar":
      className += "button__sidebar";
      break;
    default:
      className += "button__control";
  }
  return className;
};

export const Button: FC<ButtonProps> = ({ type, onClick, title, children }) => {
  return (
    <button
      type="button"
      className={getButtonClassName(type)}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};
