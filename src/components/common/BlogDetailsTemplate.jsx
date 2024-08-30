import Link from 'next/link';
import Image from 'next/image'; // -------- custom hook -------- //

import useLightBox from 'hooks/useLightBox'; // -------- custom component -------- //

import Carousel from 'components/reuseable/Carousel';
import ShareButton from 'components/common/ShareButton';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import BlogCommentList from 'components/common/BlogCommentList';
import { BlogCard1 } from 'components/reuseable/blog-cards'; // -------- data -------- //

const tags = [{
  id: 1,
  title: 'Still Life',
  url: '#'
}, {
  id: 2,
  title: 'Urban',
  url: '#'
}, {
  id: 3,
  title: 'Nature',
  url: '#'
}];

const blogs = [{
  id: 1,
  link: '#',
  category: 'Coding',
  date: '14 Apr 2022',
  image: '/img/photos/b4.jpg',
  title: 'Ligula tristique quis risus',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 2,
  link: '#',
  date: '14 Apr 2022',
  category: 'Workspace',
  image: '/img/photos/b5.jpg',
  title: 'Nullam id dolor elit id nibh',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 3,
  link: '#',
  date: '14 Apr 2022',
  category: 'Meeting',
  image: '/img/photos/b6.jpg',
  title: 'Ultricies fusce porta elit',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 4,
  link: '#',
  date: '14 Apr 2022',
  category: 'Business Tips',
  image: '/img/photos/b7.jpg',
  title: 'Morbi leo risus porta eget',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}];






const BlogDetailsTemplate = ({ blog, blogFilter }) => {
  // used for image lightbox

  const getImageUrl = (id) => {
    // Replace this with the actual logic to get the image URL from the ID
    return {
      url: `https://dashboard-ashy-alpha.vercel.app/api/images/${id}`,
    };
  };
  const images = blog.blogImagesGallery.map(id => ({ id, ...getImageUrl(id) }));
  const blogs = blogFilter.slice(0, 6)
  useLightBox();
  return <div className="card">
    <FigureImage width={560} height={300} src={`https://dashboard-ashy-alpha.vercel.app/api/images/${blog.mainImage[0]}`} className="card-img-top" />

    <div className="card-body">
      <div className="classic-view">
        <article className="post">
          <div className="post-content mb-5">
            <h2 className="h1 mb-4">{blog.title}</h2>

            <p>
              {blog.brefDesc}
            </p>


            <div className="row g-6 mt-3 mb-10">
              {images.map(({ id, url }) => (
                <div key={id} className="col-md-6">
                  <figure className="hover-scale rounded cursor-dark">
                    <a href={url} data-glightbox data-gallery="post">
                      <Image
                        width={460}
                        height={307}
                        src={url}
                        alt=""
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </a>
                  </figure>
                </div>
              ))}

            </div>


            <blockquote className="fs-lg my-8">
              <p>
                {blog.quote}
              </p>
              <footer className="blockquote-footer">{blog.contentWriter}</footer>
            </blockquote>

            <h3 className="h2 mb-4">
              {blog.secTitle}

            </h3>

            <p>
              {blog.fullDesc}
            </p>


          </div>

          <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
            <div>
              <ul className="list-unstyled tag-list mb-0">
                {tags.map(({
                  id,
                  title,
                  url
                }) => <li key={id}>
                    <NextLink href={url} title={title} className="btn btn-soft-ash btn-sm rounded-pill mb-0" />
                  </li>)}
              </ul>
            </div>

            <div className="mb-0 mb-md-2">
              <ShareButton btnSize="btn-sm" />
            </div>
          </div>
        </article>
      </div>

      <hr />

      <div className="author-info d-md-flex align-items-center mb-3">
        <div className="d-flex align-items-center">
          <FigureImage width={120} height={120} src="/img/avatars/u5.jpg" className="user-avatar rounded-circle overflow-hidden" />

          <div>
            <h6>
              <NextLink title="Nikolas Brooten" href="#" className="link-dark" />
            </h6>
            <span className="post-meta fs-15">Sales Manager</span>
          </div>
        </div>

        <div className="mt-3 mt-md-0 ms-auto">
          <Link href="#" passHref legacyBehavior>
            <a className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0">
              <i className="uil uil-file-alt" /> All Posts
            </a>
          </Link>
        </div>
      </div>

      <p>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
        risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum.
      </p>

      <SocialLinks className="nav social" />

      <hr />

      <h3 className="mb-6">You Might Also Like</h3>

      <div className="swiper-container blog grid-view mb-16">
        <Carousel grabCursor slidesPerView={2} navigation={false} breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          }
        }}>
          {/* {blogFilter.map(({
            _id,
            ...item
          }) => <BlogCard1 key={_id} {...item} />)} */}

          {blogs.map(({ _id, ...item }) => <BlogCard1 key={_id} _id={_id} {...item} />)}

        </Carousel>
      </div>

      <hr />

      <div id="comments">
        <h3 className="mb-6">5 Comments</h3>
        <BlogCommentList />
      </div>

      <hr />

      <form className="comment-form">
        <div className="form-floating mb-4">
          <input type="text" className="form-control" placeholder="Name*" id="c-name" />
          <label htmlFor="c-name">Name *</label>
        </div>

        <div className="form-floating mb-4">
          <input type="email" className="form-control" placeholder="Email*" id="c-email" />
          <label htmlFor="c-email">Email*</label>
        </div>

        <div className="form-floating mb-4">
          <input type="text" className="form-control" placeholder="Website" id="c-web" />
          <label htmlFor="c-web">Website</label>
        </div>

        <div className="form-floating mb-4">
          <textarea name="textarea" placeholder="Comment" className="form-control" style={{
            height: 150
          }} />
          <label>Comment *</label>
        </div>

        <button type="submit" className="btn btn-primary rounded-pill mb-0">
          Submit
        </button>
      </form>
    </div>
  </div>;
};

export default BlogDetailsTemplate;