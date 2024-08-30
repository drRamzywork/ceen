import Link from 'next/link';
import NextLink from '../links/NextLink'; // ========================================================

// ========================================================
const BlogCard2 = props => {
  const {
    cardTop,
    title,
    category,
    description,
    link
  } = props;
  return <article className="post">
    <div className="card">
      {cardTop}

      <div className="card-body">
        <div className="post-header">
          <div className="post-category text-line">
            <NextLink title={category} href="#" className="hover" />
          </div>

          <h2 className="post-title mt-1 mb-0">
            <NextLink title={title} className="link-dark" href={link} />
          </h2>
        </div>

        <div className="post-content">
          <p>{description}</p>
        </div>
      </div>

      <div className="card-footer">
        <ul className="post-meta d-flex mb-0">
          <li className="post-date">
            <i className="uil uil-calendar-alt" />
            <span>5 Jul 2024</span>
          </li>

          <li className="post-author">
            <Link href="#" passHref legacyBehavior>
              <a>
                <i className="uil uil-user" />
                <span>By Sandbox</span>
              </a>
            </Link>
          </li>

          <li className="post-comments">
            <Link href="#" passHref legacyBehavior>
              <a>
                <i className="uil uil-comment" /> 3<span> Comments</span>
              </a>
            </Link>
          </li>

          <li className="post-likes ms-auto">
            <Link href="#" passHref legacyBehavior>
              <a>
                <i className="uil uil-heart-alt" />3
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </article>;
};

export default BlogCard2;