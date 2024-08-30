import NextLink from 'components/reuseable/links/NextLink';

const Hero32 = () => {
  const title = 'smarter data sharper decision , focused ';
  const on = 'on you';

  return <section className="wrapper bg-black bg-lines">
    <div className="container pt-18 pt-md-19 pb-18 pb-lg-17 text-left">
      <div className="row">
        <div data-delay="500" data-cues="zoomIn" data-interval="-200" data-group="page-title" className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
          <h2 className="h6 text-uppercase ls-xl text-white mb-5 text-center">Hello! We are <br /> CEEN | ســـــين</h2>

          <h1 className="display-1 fs-68 lh-xxs mb-8 text-white">
            {title.toUpperCase()}   {' '}
            <span className="underline-2 underline-gradient-6">
              <em>{on.toUpperCase()}</em>
            </span>{' '}
          </h1>

          <div data-delay="900" data-cues="zoomIn" data-group="page-title-buttons" className="d-flex justify-content-center mb-4">
            <span>
              <NextLink title="Explore Now" href="#hero" className="btn btn-lg btn-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default Hero32;