import React, { Component } from "react";
import styles from "./Carousel.module.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.increaseActiveSlide(),
      this.props.interval
    );
  }

  componentDidUnMount() {
    clearInterval(this.timer);
  }

  increaseActiveSlide() {
    let i = this.state.activeSlide;
    i >= this.props.data.length - 1 ? (i = 0) : (i += 1);
    this.setState({ activeSlide: i });
  }

  decreaseActiveSlide() {
    let i = this.state.activeSlide;
    i <= 0 ? (i = this.props.data.length - 1) : (i -= 1);
    this.setState({ activeSlide: i });
  }
  //restart Timer after user select dot
  restartTimer(i) {
    clearInterval(this.timer);
    this.timer = setInterval(
      () => this.increaseActiveSlide(),
      this.props.interval
    );
    this.setState({ activeSlide: i });
  }

  renderSlide() {
    return (
      <div className={styles.mainCarouselBlockText + " " + styles.container}>
        <p className={styles.mainCarouselCaption + " " + styles.colorWhite}>
          {this.props.data[this.state.activeSlide].caption}
        </p>
        <p className={styles.mainCarouselText + " " + styles.colorWhite}>
          {this.props.data[this.state.activeSlide].text}
        </p>
      </div>
    );
  }

  renderArrow(side) {
    return (
      <span
        className={
          styles.spanArrow +
          " " +
          (side === "left" ? styles.spanArrowLeft : styles.spanArrowRight)
        }
        onClick={
          side === "left"
            ? () => this.decreaseActiveSlide()
            : () => this.increaseActiveSlide()
        }
      >
        <svg
          className={side === "left" ? styles.arrow : styles.arrowLeft}
          width="33"
          height="16"
          viewBox="0 0 33 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM33 7L1 7L1 9L33 9L33 7Z"
            fill="white"
          />
        </svg>
      </span>
    );
  }

  renderDots() {
    return (
      <div className={styles.blockDots+" " +styles.container}>
        {this.props.data.map((item, i) => (
          <span
            key={i}
            className={
              i === this.state.activeSlide ? styles.dotActive : styles.dot
            }
            onClick={() => this.restartTimer(i)}
          ></span>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.carousel}>
        <picture className={styles.mainCarouselPicture}>
          <source srcSet="images/background.png" media="(min-width: 768px)" />
          <source srcSet="images/background_carousel.png" />
          <img
            srcSet="images/background_carousel.png"
            alt={"main page carousel"}
          />
        </picture>
        {/* TODO выровнять под flex */}
        <div className={styles.container}> 
          {this.renderArrow("right")}
          {this.renderSlide()}
          {this.renderArrow("left")}
          {this.renderDots()}
        </div>
      </div>
    );
  }
}

export default Carousel;
