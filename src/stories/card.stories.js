import React from "react";
import { action } from "@storybook/addon-actions";
import faker from "faker";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { ChoiceCard } from "../components/choice-card";

export default {
  title: "Choice Card",
  decorators: [withKnobs]
};

export const NoStyles = () => (
  <ChoiceCard
    cost={number("Point Cost", faker.random.number(10))}
    description={text("Card Description", faker.lorem.paragraph())}
    onClick={action("Button was clicked")}
    src={faker.image.image()}
    title={text("Card Name", faker.lorem.word())}
  />
);
