import Link from 'next/link';
import NextLink from '../links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';

const BlogCard3 = props => {
  const {
    title,
    category,
    brefDesc,
    link,
    mainImage
  } = props;

  console.log(mainImage, "mainImage")
  return <article className="item post col-md-6">
    <div className="card">
      <figure className="card-img-top overlay overlay-1 hover-scale">
        <Link href={`/blog/${link}`} passHref legacyBehavior>
          <FigureImage width={560} height={350} src={`https://dashboard-ashy-alpha.vercel.app/api/images/${mainImage}`} alt='hello' />
        </Link>

        <figcaption>
          <h5 className="from-top mb-0">Read More</h5>
        </figcaption>
      </figure>

      <div className="card-body">
        <div className="post-header">
          <div className="post-category text-line">
            <NextLink title={category} href="#" className="hover" />
          </div>

          <h2 className="post-title h3 mt-1 mb-3">
            <NextLink title={title} className="link-dark" href={link} />
          </h2>
        </div>

        <div className="post-content">
          <p>{brefDesc}</p>
        </div>
      </div>

      <div className="card-footer">
        <ul className="post-meta d-flex mb-0">
          <li className="post-date">
            <i className="uil uil-calendar-alt" />
            <span>14 Apr 2022</span>
          </li>

          <li className="post-comments">
            <Link href="#" passHref legacyBehavior>
              <a>
                <i className="uil uil-comment" />4
              </a>
            </Link>
          </li>

          <li className="post-likes ms-auto">
            <Link href="#" passHref legacyBehavior>
              <a>
                <i className="uil uil-heart-alt" />5
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </article>;
};

export default BlogCard3;