import React, { Component } from "react";
import Menu from "../menu/menu";
import Logo from "../logo/logo";
import styles from "./Navbar.module.scss";
import styles_icon from "../icon/Icon.module.scss";
import Icon from "../icon/icon";
import Cart from "../icon/svg/cart";
import Profile from "../icon/svg/profile";
import Language from "../icon/svg/language";
import Search from "../icon/svg/search";
import Hamburger from "../icon/svg/hamburger";
import { connect } from "react-redux";
import { withRouter } from "next/router";

export class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  onScroll = () => {    
    
    if (typeof window !== "undefined"){
      if ((this.props.scrollY > 100 && location.pathname === "/") || (location.pathname!== "/"))
      {return `${styles.backgroundGreen}`};
    }
    
  };
 //TODO: поменять на CSS-переменные
  getSVGPath = () => {
    if (this.props.router.pathname === "/" && this.props.scrollY <= 100) {
      return styles_icon.iconSVGPathGreen;
    } else {
      return styles_icon.iconSVGPathBlack;
    }
  };
  render() {
    return (
      <div className={styles.navbarWrapper + " " + this.onScroll()}>
        <div
          className={
            styles.navbar +
            " " +
            styles.container +
            " " +
            `${styles[this.props.className]}`
          }
        >
          <Logo />
          <Menu cname={styles.menuBlock}/>
          <div>
            <div className={styles.icons}>
              <Icon className={styles.hideBlock}>
                <Profile cname={`${[this.getSVGPath()]}`} />
              </Icon>
              <Icon className={styles.blockIcon+" "+styles.hideBlock}>
                <Language cname={`${[this.getSVGPath()]}`} />
              </Icon>
              <Icon className={styles.blockIcon+" "+styles.hideBlock}>
                <Search cname={`${[this.getSVGPath()]}`}/>
              </Icon>
              <Icon className={styles.cartIcon+" "+styles.hideBlock}>
                <Cart cname={`${[this.getSVGPath()]}`}/>
              </Icon >
              <div className={styles.phones+" "+styles.hideBlock}>
                <a href="tel:+74999386692">+7-499-938-66-92</a>
                <a href="tel:88002016692">8-800-201-66-92</a>
              </div>
              <Icon className={styles.blockIcon}>
                <Hamburger cname={styles.hamburgerMenu} />
              </Icon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scrollY: state.scroll.scrollY,
});

export default withRouter(connect(mapStateToProps)(Navbar));
