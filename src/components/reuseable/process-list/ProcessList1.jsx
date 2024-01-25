// ==============================================================
// ==============================================================
const ProcessList1 = props => {
  const {
    no,
    title,
    subtitle,
    className,
    shadow
  } = props;
  return <div className={`card ${className} ${shadow && 'shadow-lg'}`}>
      <div className="card-body p-6">
        <div className="d-flex flex-row">
          <div>
            <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
              <span className="number">{no}</span>
            </span>
          </div>

          <div>
            <h4 className="mb-1">{title}</h4>
            <p className="mb-0">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>;
};

export default ProcessList1;