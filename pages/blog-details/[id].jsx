

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import BlogDetailsTemplate from 'components/common/BlogDetailsTemplate';
import axios from 'axios';

const BlogDetailsOne = ({ blog, blogFilter }) => {


  return (
    <>
      <PageProgress />

      {
        /* ========== header section ========== */
      }
      <header className="wrapper bg-soft-primary">
        <Navbar search button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
          /* ========== title section ========== */
        }
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink href="#" className="hover" title={blog.category} />
                  </div>

                  <h1 className="display-1 mb-4">{blog.title}</h1>

                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>5 Jul 2022</span>
                    </li>

                    <li className="post-author">
                      <i className="uil uil-user" />
                      <NextLink href="#" className="text-reset" title={<span>{blog.contentWriter}</span>} />
                    </li>

                    <li className="post-comments">
                      <i className="uil uil-comment" />
                      <NextLink href="#" className="text-reset" title={<>
                        3 <span>Comments</span>
                      </>} />
                    </li>

                    <li className="post-likes">
                      <i className="uil uil-heart-alt" />
                      <NextLink href="#" className="text-reset" title={<>
                        3 <span>Likes</span>
                      </>} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {
          /* ========== details section ========== */
        }
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  <BlogDetailsTemplate blog={blog} blogFilter={blogFilter} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {
        /* ========== footer section ========== */
      }
      <Footer8 />
    </>
  )
};

export default BlogDetailsOne;




export async function getStaticPaths() {
  const data = JSON.stringify({
    "collection": "blogs",
    "database": "dashboard-db",
    "dataSource": "Cluster0"
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://data.mongodb-api.com/app/data-yhygn/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'Mmg9Q0QiZkSIpthlGX1zIYY7GS2NHj7iEtz16skuqlbCIJGDDIUDmyw1xLLmAGkL'
    },
    data: data
  };


  const response = await axios.request(config);
  const blogs = response.data.documents;
  // Generate paths with _id for all blogs
  const paths = blogs.map(blog => ({
    params: { id: blog._id }
  }));


  return { paths, fallback: false };


}





export async function getStaticProps({ params }) {
  try {
    const data = JSON.stringify({
      "collection": "blogs",
      "database": "dashboard-db",
      "dataSource": "Cluster0",
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://data.mongodb-api.com/app/data-yhygn/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'Mmg9Q0QiZkSIpthlGX1zIYY7GS2NHj7iEtz16skuqlbCIJGDDIUDmyw1xLLmAGkL'
      },
      data: data
    };

    const response = await axios.request(config);
    const blogFilter = response.data.documents;
    const blog = blogFilter.find((blog) => blog._id === params.id);

    return {
      props: {
        blog: blog || null,
        blogFilter: blogFilter || null,
      },
      revalidate: 10
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        blog: null,
        blogFilter: null,

      }
    };
  }
}


