// =================================================
// =================================================
const TestimonialCard1 = props => {
  const {
    name,
    review,
    designation
  } = props;
  return <div className="card shadow-lg">
      <div className="card-body">
        <blockquote className="icon mb-0">
          <p>“{review}”</p>
          <div className="blockquote-details">
            <div className="info p-0">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>;
};

export default TestimonialCard1;