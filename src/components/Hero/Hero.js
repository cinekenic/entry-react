import React from "react";
import styles from "../Hero/Hero.scss";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

const Hero = (props) => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>

    <img className={styles.image} src={props.image} alt="" />
  </header>
);

Hero.PropTypes = {
  titleText: PropTypes.node.isRequired,
};

export default Hero;