import React, { FunctionComponent } from "react";

interface SidebarProps {
  components: FunctionComponent[];
}

export const Sidebar: React.FC<SidebarProps> = ({ components }) => {
  return (
    <div className="sidebar">
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};
