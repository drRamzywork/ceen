// -------- custom component -------- //
import { Blog8 } from 'components/blocks/blog';
import { Team9 } from 'components/blocks/team';
import { Hero32 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { CTA12 } from 'components/blocks/call-to-action';
import { About32, About33 } from 'components/blocks/about';
import { Testimonial26 } from 'components/blocks/testimonial';
import { Services34, Services18 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress'; // -------- custom hooks -------- //
``
import useLightBox from 'hooks/useLightBox';
import useProgressbar from 'hooks/useProgressbar';

const Demo32 = () => {
  // used for popup lightbox
  useLightBox(); // used for svg progress bar

  useProgressbar();
  return <div className="box-layout bg-dark">
    <PageProgress />

    {
      /* ========== header section ========== */
    }
    <header className="position-absolute w-100 pt-1">
      <Navbar info search logoAlt="logo-light" navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark caret-none" />
    </header>


    {
      /* ========== hero section ========== */
    }
    <Hero32 />

    {
      /* ========== main content ========== */
    }
    <main className="content-wrapper">

      {
        /* ========== plyr & about section ========== */
      }


      {
        /* ========== our services section ========== */
      }
      <Services18 />

      {
        /* ========== what make us section ========== */
      }
      {/* <About33 /> */}

      {
        /* ========== what make us section ========== */
      }
      {/* <Blog8 /> */}

      {
        /* ========== why choose sandbox section ========== */
      }
      {/* <Services35 /> */}

      {
        /* ========== our team section ========== */
      }
      {/* <Team9 /> */}

      {
        /* ========== testimonial & community section ========== */
      }

    </main>

    {
      /* ========== footer section ========== */
    }
    <Footer8 />
  </div>;
};

export default Demo32;