import React from "react";
import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import { info } from "../../data/dataStore";
import styles from "./Info.scss";

const Info = () => (
  <Container>
    <div className={styles.component}>
      <Hero title={info.title} image={info.image} />
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
  </Container>
);

export default Info;
