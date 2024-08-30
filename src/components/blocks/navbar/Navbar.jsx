import Link from 'next/link';
import { Fragment, useRef } from 'react'; // -------- custom hook -------- //

import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown'; // -------- custom component -------- //

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink'; // -------- partial header component -------- //

import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import Language from './partials/Language';
import MiniCart from './partials/MiniCart'; // -------- data -------- //

import { demos, pages, blogsNavigation, blocksNavigation, projectsNavigation, documentionNavigation } from 'data/navigation'; // ===================================================================

// ===================================================================
const Navbar = props => {
  const {
    navClassName,
    info,
    search,
    social,
    language,
    button,
    cart,
    fancy,
    navOtherClass,
    stickyBox,
    logoAlt
  } = props;
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const renderLinks = links => {
    return links.map(item => <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />);
  }; // all main header contents


  const headerContent =
    <Fragment>
      <div className="navbar-brand w-100 ">
        <ul className="navbar-nav">
          <li className="nav-item dropdown d-flex align-items-center">
            <ListItemLink href="/" title=" CEEN | ســـــين " linkClassName="nav-link" />
          </li>
        </ul >

      </div>



    </Fragment>;
  return <Fragment>
    {stickyBox && <div style={{
      paddingTop: sticky ? navbarRef.current?.clientHeight : 0
    }} />}

    <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
      {fancy ?
        <div className="container">
          <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
            {headerContent}
          </div>
        </div> :
        <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
      }

    </nav>

    {
      /* ============= signin modal ============= */
    }
    {/* <Signin /> */}

    {
      /* ============= signup modal ============= */
    }
    {/* <Signup /> */}

    {
      /* ============= info sidebar ============= */
    }
    {/* {info && <Info />} */}

    {
      /* ============= show search box ============= */
    }
    {/* {search && <Search />} */}

    {
      /* ============= cart sidebar ============= */
    }
    {/* {cart && <MiniCart />} */}
  </Fragment>;
}; // set deafult Props


Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};
export default Navbar;