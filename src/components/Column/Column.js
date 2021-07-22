import React from "react";
import styles from "./Column.scss";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import Creator from "../Creator/Creator";
import { settings } from "../../data/dataStore";

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  };
  static PropTypes = {
    title: PropTypes.node.isRequired,
    addCard: PropTypes.func,
    subtitle: PropTypes.string,
  };

  addCard(title) {
    console.log(this.state);
    this.setState((state) => ({
      cards: [
        ...this.state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
    console.log(this.state);
  }

  render() {
    console.log(this.props);
    console.log(this.state.cards);

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}

          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>

        <div>
          {this.state.cards.map(({ key, title, ...cardPrpops }) => (
            <Card key={key} title={title} {...cardPrpops} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div>
      </section>
    );
  }
}

export default Column;
