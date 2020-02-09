import React from "react";
import faker from "faker";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ChoiceList } from "../components/choice-list";
import { generateChoices } from "../utils/story-utils";

export default {
  title: "Choice List",
  decorators: [withKnobs]
};

export const NoStyles = () => (
  <ChoiceList
    choices={generateChoices(
      number(
        "Number of Choice Cards",
        faker.random.number({ min: 3, max: 30 })
      ),
      action("Button was clicked")
    )}
    columns={number("Number of Columns", 3)}
    title={text("Section Title", faker.lorem.words(2))}
    description={text("Description", faker.lorem.sentence())}
  />
);
