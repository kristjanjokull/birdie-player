import { FC } from "react";

type ButtonType = "control" | "big-play";

type ButtonProps = {
  type: ButtonType;
  onClick: () => void;
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
  type,
  onClick,
  title,
  disabled,
  children,
}) => {
  return (
    <button
      type="button"
      className={`button ${type === "big-play" ? "button__bigPlay" : ""}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
