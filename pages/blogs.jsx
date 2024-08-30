import Plyr from 'plyr-react';
import Image from 'next/image';

import { Navbar } from 'components/blocks/navbar';
import { BlogCard2, BlogCard3 } from 'components/reuseable/blog-cards';
import Carousel from 'components/reuseable/Carousel';
import Pagination from 'components/reuseable/Pagination';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink'; // -------- data -------- //
import axios from 'axios';
import { useState } from 'react';


const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(blogs, "BBBBBBB")

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
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">Business News</h1>
                <p className="lead px-lg-5 px-xxl-8">
                  Welcome to our journal. Here you can find the latest company news and business articles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog classic-view mt-n17">
                  <BlogCard2
                    link={`/blog-details/${blogs[1]._id}`}
                    category={blogs[1].category}
                    description={blogs[1].fullDesc}
                    title={blogs[1].title}

                    cardTop={<div className="post-slider card-img-top">
                      <div className="swiper-container dots-over">

                        <Carousel grabCursor spaceBetween={5} slidesPerView={1}>

                          {blogs.length > 0 && blogs[1].blogImagesGallery && blogs[1].blogImagesGallery.map(imageId => (
                            <>
                              <Image
                                key={imageId}
                                width={960}
                                height={600}
                                src={`https://dashboard-ashy-alpha.vercel.app/api/images/${imageId}`}
                                alt="blog image"
                                style={{ width: '100%', height: 'auto' }}
                              />
                            </>
                          ))}


                        </Carousel>
                      </div>
                    </div>} />
                  <BlogCard2 link={`blog-details/${blogs[3]._id}`} category={blogs[3].category} title={blogs[3].title} description={blogs[3].fullDesc} cardTop={<div className="card-img-top">
                    <Plyr options={{
                      loadSprite: true,
                      clickToPlay: true
                    }} source={{
                      type: 'video',
                      sources: [{
                        src: blogs[3].youtubeURL,
                        provider: 'youtube'
                      }]
                    }} />
                  </div>} />
                </div>

                <div className="blog grid grid-view">
                  <div className="row isotope gx-md-8 gy-8 mb-8">
                    {currentPosts.map(item =>
                      <>
                        <BlogCard3 {...item} key={item._id
                        } link={`/blog-details/${item._id}`

                          || '#'} />
                        {
                          console.log(item._id, "itemitem")

                        }
                      </>
                    )}


                  </div>
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  className="justify-content-start"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer8 /> */}
    </>
  )
};

export async function getStaticProps() {
  try {
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
    return {
      props: {
        blogs
      },
      revalidate: 10 // Optionally, add revalidation time in seconds
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        blogs: []
      }
    };
  }
}


export default Blogs;