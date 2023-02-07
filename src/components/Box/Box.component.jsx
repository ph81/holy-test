const Box = ({ direction }) => {
  return <div className={`box-shape ${direction}`}>{direction}</div>;
};

export default Box;
