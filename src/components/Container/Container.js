import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.scss";

const Container = (props) => {
  return <div className={styles.component}>{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
