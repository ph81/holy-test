import { useState } from 'react';

const Box = ({ type, direction }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div
      className={click ? `box-shape ${direction}` : `box-shape`}
      onClick={handleClick}
    >
      {type}
    </div>
  );
};

export default Box;
