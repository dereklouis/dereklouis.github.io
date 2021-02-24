const React = require('react');
const { Link } = require('react-router-dom');
const { SlideMenu } = require('./SlideMenu');

let userScrolled = false;

export class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  handleClick() {
    const status = this.state.menuOpen;
    const menuButton = document.querySelector('.menu-btn');
    const slideMenu = document.getElementById('slideMenuWrapper');
    if (!status) {
      menuButton.classList.add('open');
      slideMenu.className = 'slideIn';
      this.setState({ menuOpen: true });
    } else {
      menuButton.classList.remove('open');
      slideMenu.className = 'slideOut';
      this.setState({ menuOpen: false });
    }
  }
  closeMenu() {
    const menuButton = document.querySelector('.menu-btn');
    const slideMenu = document.getElementById('slideMenuWrapper');
    menuButton.classList.remove('open');
    slideMenu.className = 'slideOut';
    this.setState({ menuOpen: false });
  }
  render() {
    window.onscroll = () => {
      const navBarWrap = document.getElementById('navBarWrap');
      if (window.scrollY <= 15 && userScrolled) navBarWrap.className = 'white';
      else if (window.scrollY > 15) {
        navBarWrap.className = 'gray';
        userScrolled = true;
      }
    };
    window.onresize = () => {
      const slideMenu = document.getElementById('slideMenuWrapper');
      if (window.innerWidth > 600) {
        slideMenu.className = 'menuHidden';
      } else if (window.innerWidth <= 600 && this.state.menuOpen) {
        slideMenu.className = 'slideIn';
      }
    };
    return (
      <>
        <SlideMenu closeMenu={this.closeMenu} />
        <div id="navBarWrap">
          <div id="navBar">
            <div class="menu-btn" onClick={this.handleClick}>
              <div class="menu-btn__burger"></div>
            </div>
            <Link className="logoLink" to="/home" onClick={this.closeMenu}>
              <div id="name">Derek Louis</div>
            </Link>
            <Link className="link" to="/home">
              <p id="navItem">Home</p>
            </Link>
            <Link className="link" to="/projects">
              <p id="navItem">Projects</p>
            </Link>
            <Link className="link" to="/about">
              <p id="navItem">About</p>
            </Link>
            <Link className="link" to="/contact">
              <p id="navItem">Contact</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}