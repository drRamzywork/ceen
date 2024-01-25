// ==============================================================
// ==============================================================
const ProcessList2 = props => {
  const {
    no,
    title,
    subtitle,
    className
  } = props;
  return <div className="d-flex flex-row mb-6">
      <div>
        <span className={className}>
          <span className="number fs-18">{no}</span>
        </span>
      </div>

      <div>
        <h4 className="mb-1">{title}</h4>
        <p className="mb-0">{subtitle}</p>
      </div>
    </div>;
};

export default ProcessList2;