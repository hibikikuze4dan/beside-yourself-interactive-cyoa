import React from "react";
import faker from "faker";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SectionTitle } from "../components/section-title";

export default {
  title: "Section Title",
  decorators: [withKnobs]
};

export const NoStyles = () => (
  <SectionTitle
    description={text("Description", faker.lorem.sentence())}
    title={text("Title", faker.lorem.word())}
  />
);
