import faker from "faker";

export const generateChoices = (numChoices, onClick) => {
  const title = faker.lorem.words(faker.random.number(3));
  const description = faker.lorem.paragraph();
  const src = faker.image.image();
  const choices = Array.from(new Array(numChoices), () => {
    const cost = faker.random.number({ min: -10, max: 10 });

    return {
      cost,
      description,
      onClick,
      src,
      title
    };
  });

  return choices;
};
