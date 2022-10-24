import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from 'reactstrap';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={'fixed-top ' + navbarColor}
        color="warning"
        expand="lg"
      >
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Home
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                About0-Us
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Our Drinks
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Contact
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                FAQ
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
              target="_blank"
              id="navbar-brand"
            >
              ADNEK• FOOD & BEVERAGES
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              ADNEK•
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/about-page" tag={Link}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Our Brands</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sustainability</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">News Feeds</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" target="_blank" id="twitter-tooltip">
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Sustainability</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Read on our approach toward a Sustainabile system.
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Careers</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook to get feeds on Careers.
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Contact</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Contact us an get to know more..
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
