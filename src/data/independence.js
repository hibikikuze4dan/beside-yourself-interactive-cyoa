const independence = {
  title: "Clone Independence",
  description: "How independent are these clones from you, their creator?",
  choices: {
    reliant: {
      title: "Reliant",
      description:
        "You have to tell them what to do, and be very clear about it. They can only do a single task at a time. They have no personalities, and once their task is completed, they return to you and follow you like ducklings.",
      cost: -1,
      src: "https://i.imgur.com/AhzcLYy.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "semi-independence": {
      title: "Semi-Independence",
      description:
        "They have your personality and memories, but they are still subservient to your orders. They can be given more complex orders, and will be able to interact with people you know as if they were you.",
      cost: 0,
      src: "https://i.imgur.com/vIHbEXY.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    independent: {
      title: "Independent",
      description:
        "They have your personality, memories, and complete free will. Can you trust yourself?",
      cost: -3,
      src: "https://i.imgur.com/e6AdL8A.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
  },
};

export default independence;
