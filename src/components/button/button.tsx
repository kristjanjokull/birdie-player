import React, { FC } from "react";

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
      className={`bp-button ${type === "big-play" ? "pb-button__bigPlay" : ""}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
