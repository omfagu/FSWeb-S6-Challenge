import { useState } from "react";

const Accordeon = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
export default Accordeon;
