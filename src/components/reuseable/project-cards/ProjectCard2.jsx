import NextLink from '../links/NextLink';
import FigureImage from 'components/reuseable/FigureImage'; // ==============================================================================

// ==============================================================================
const ProjectCard2 = props => {
  const {
    link,
    title,
    category,
    description,
    image,
    imageClassName,
    cardStyle,
    detailsStyle,
    color
  } = props;
  const catColor = color ? `text-${color}` : 'text-purple';
  const linkColor = color ? `link-${color}` : 'link-purple';
  return <div className="project item">
      <div className="row">
        <FigureImage width={image.width} height={image.height} src={image.url} className={imageClassName} />

        <div className="project-details d-flex justify-content-center flex-column" style={detailsStyle}>
          <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" style={cardStyle}>
            <div className="card-body">
              <div className="post-header">
                <div className={`post-category text-line ${catColor} mb-3`}>{category}</div>
                <h2 className="post-title mb-3">{title}</h2>
              </div>

              <div className="post-content">
                <p>{description}</p>
                <NextLink title="See Project" href={link} className={`more hover ${linkColor}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default ProjectCard2;