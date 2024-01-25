import CountUp from 'react-countup'; // ==============================================================

// ==============================================================
const Counter4 = ({
  title,
  ...props
}) => <div className="col-md-6">
    <h3 className="counter counter-lg mb-1">
      <CountUp {...props} />
    </h3>

    <h5 className="mb-0">{title}</h5>
  </div>;

export default Counter4;