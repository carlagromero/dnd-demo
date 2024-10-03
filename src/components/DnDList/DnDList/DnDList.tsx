import React from "react";

interface DnDListProps {
  children: React.ReactNode;
}

const DnDList: React.FC<DnDListProps> = ({ children }) => {
  return <>{children}</>;
};

export default DnDList;
