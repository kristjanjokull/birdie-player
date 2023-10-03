import { FC } from "react";

type ButtonProps = {
  type: "control" | "sidebar" | "big-play";
  onClick: () => void;
  title: string;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, onClick, title, children }) => {
  if (type === "big-play") {
    return (
      <button
        type="button"
        className="button button__bigPlay"
        onClick={onClick}
        title={title}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`button ${
        type === "sidebar" ? "button__sidebar" : "button__control"
      }`}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};
