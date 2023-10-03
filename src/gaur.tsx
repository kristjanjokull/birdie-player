import { FC } from "react";
import Confetti from "react-confetti";

type Props = {
  type: "gaur" | "maur";
};

export const Gaur: FC<Props> = ({ type }) => {
  return (
    <div className="hugabuga">
      <button onClick={() => console.log("i was clicked")}>Click me</button>
      <p>Type: {type === "gaur" ? "gaur" : "maur"}</p>
      <Confetti width={120} height={120} />
    </div>
  );
};
