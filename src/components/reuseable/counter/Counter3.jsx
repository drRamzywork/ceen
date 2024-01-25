import CountUp from 'react-countup'; // ====================================================

// ====================================================
const Counter3 = ({
  title,
  number,
  Icon,
  suffix
}) => {
  return <div className="col-md-4">
      {Icon}

      <h3 className="counter">
        <CountUp end={number} {...suffix && {
        suffix
      }} />
      </h3>

      <p>{title}</p>
    </div>;
};

export default Counter3;