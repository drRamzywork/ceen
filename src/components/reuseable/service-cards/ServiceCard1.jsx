import NextLink from '../links/NextLink'; // ===============================================================

// ===============================================================
const ServiceCard1 = props => {
  const {
    title,
    description,
    Icon,
    linkUrl,
    linkType,
    cardClassName = '',
    iconClassName
  } = props;
  return <div className="col-md-6 col-xl-3">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          <Icon className={iconClassName} />
          <h4>{title}</h4>
          <p className="mb-2">{description}</p>
          <NextLink title="Learn More" href={linkUrl} className={`more hover link-${linkType}`} />
        </div>
      </div>
    </div>;
};

export default ServiceCard1;