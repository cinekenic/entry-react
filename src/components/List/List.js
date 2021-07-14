import React from "react";
import styles from "../App/App.scss";

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>Things to do</h2>
      </section>
    );
  }
}

export default List;
