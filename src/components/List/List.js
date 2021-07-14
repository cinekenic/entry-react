import React from "react";
import styles from "../App/App.scss";
import Hero from "../Hero/Hero";

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero />
      </section>
    );
  }
}

export default List;
