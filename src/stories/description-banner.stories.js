import React from "react";
import faker from "faker";
import { withKnobs, text } from "@storybook/addon-knobs";
import { DescriptionBanner } from "../components/description-banner";

export default {
  title: "Description Banner",
  decorators: [withKnobs]
};

export const NoStyles = () => (
  <DescriptionBanner
    description={[
      text("Description Part 1", faker.lorem.paragraphs(2)),
      text("Description Part 2", faker.lorem.sentence())
    ]}
    src={faker.image.image()}
  />
);
