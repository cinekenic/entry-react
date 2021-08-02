import React from "react";
import Container from "../Container/Container";

import Hero from "../Hero/Hero";
import { faq } from "../../data/dataStore";
import styles from "./Faq.scss";

const Faq = () => {
  return (
    <Container>
      <section className={styles.component}>
        <Hero title={faq.title} image={faq.image} />
        <h2>{faq.title}</h2>
        <p>{faq.description}</p>
      </section>
    </Container>
  );
};

export default Faq;
