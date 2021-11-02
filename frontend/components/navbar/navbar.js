import React, { Component } from "react";
import Menu from "../menu/menu";
import Logo from "../logo";
import styles from "./Navbar.module.scss";
import Icon from "../icon/icon";
import Cart from "../icon/svg/cart";
import Profile from "../icon/svg/profile";
import Language from "../icon/svg/language";
import Search from "../icon/svg/search";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navbar +" "+ styles.container +" "+`${styles[this.props.className]}`}>
        <Logo />
        <Menu />
        <div>
          <div className={styles.icons}>
            <Icon className={styles.blockIcon}>
              <Profile />
            </Icon>
            <Icon className={styles.blockIcon}>
              <Language />
            </Icon>
            <Icon className={styles.blockIcon}>
              <Search />
            </Icon>
            <Icon className={styles.cartIcon}>
              <Cart />
            </Icon>
            <div className={styles.phones}>
              <a href="tel:+74999386692">+7-499-938-66-92</a>
              <a href="tel:88002016692">8-800-201-66-92</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
