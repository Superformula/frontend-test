import React, { Component } from "react";

import "./App.scss";

import Card from "../Card/Card";
import CardList from "../CardList/CardList";
import Divider from "../Divider/Divider";
import Hero from "../Hero/Hero";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Spacer from "../Spacer/Spacer";

const subtext = "Don't be fooled by the French name, this place oozes with Californian flair.";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SectionWrapper>
          <Hero subtext={subtext}>Restaurants</Hero>
        </SectionWrapper>

        <Spacer size="medium" />
        <Divider />
        <Spacer size="medium" />

        <SectionWrapper>
          <CardList>
            <Card
              headline="Restaurant 1, with a really long name, you know?"
              rating={3}
              category="thai"
              price="$$$$"
              status={true}
            />

            <Card
              headline="Restaurant 2"
              rating={3}
              category="thai"
              price="$$$$"
              status={true}
            />

            <Card
              headline="Restaurant 3"
              rating={3}
              category="thai"
              price="$$$$"
              status={true}
            />

            <Card
              headline="Restaurant 4"
              rating={3}
              category="thai"
              price="$$$$"
              status={true}
            />
          </CardList>
        </SectionWrapper>
      </div>
    )
  }
}

export default App;