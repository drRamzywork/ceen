import Link from 'next/link';
import Image from 'next/image';
import NextLink from '../links/NextLink'; // ======================================================

// ======================================================
const BlogCard1 = ({
  date,
  mainImage,
  title,
  category,
  _id
}) => {

  return <article>
    <figure className="overlay overlay-1 hover-scale rounded mb-6">
      <Link href={`${_id}`} passHref legacyBehavior>
        <a>
          <Image width={560} height={350} src={`https://dashboard-ashy-alpha.vercel.app/api/images/${mainImage}`} alt={title} style={{
            width: '100%',
            height: 'auto'
          }} />
          <span className="bg" />
        </a>
      </Link>

      <figcaption>
        <h5 className="from-top mb-0">Read More</h5>
      </figcaption>
    </figure>

    <div className="post-header">
      <h2 className="post-title h3 mb-3">
        <NextLink title="Ligula tristique quis risus" className="link-dark" href="#" />
      </h2>
    </div>

    <div className="post-footer">
      <ul className="post-meta">
        <li className="post-date">
          <i className="uil uil-calendar-alt" />
          <span>{date}</span>
        </li>

        <li className="post-comments">
          <NextLink href="#" className="link-dark" title={<>
            <i className="uil uil-file-alt fs-15" />
            {category}
          </>} />
        </li>
      </ul>
    </div>
  </article>;
};

export default BlogCard1;