const desummoning = {
  title: "Desummoning Style",
  description: "How do you get rid of the clones once you’ve made them?",
  choices: {
    anywhere: {
      title: "Anywhere",
      description:
        "Just think of the clone you want to get rid of, and they’ll disappear, leaving only the things they were holding/wearing.",
      cost: 1,
      src: "https://i.imgur.com/mkA57Km.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    touch: {
      title: "Touch",
      description: "Same as Anywhere, but you have to be touching the clone.",
      cost: 0,
      src: "https://i.imgur.com/p5dN2zZ.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    orgasm: {
      title: "Orgasm",
      description: "If the clone has an orgasm, it’ll cease to be.",
      cost: 0,
      src: "https://i.imgur.com/i0W5ljI.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    screaming_match: {
      title: "Screaming Match",
      description:
        "If the clone is defeated in a verbal argument, then it will cease to be. Defeated counts as retreating, giving up, accepting the other’s point, or saying something to the effect of 'agree to disagree'.",
      cost: 0,
      src: "https://i.imgur.com/QTEyalk.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    factory_reset: {
      title: "Factory Reset",
      description:
        "When you go to sleep, all your clones will be absorbed back into you.",
      cost: 0,
      src: "https://i.imgur.com/n2v2rV1.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    murder: {
      title: "Murder",
      description:
        "You have to kill the clone to desummon them. This is the only option for Always out.",
      cost: -1,
      src: "https://i.imgur.com/fsY4Psl.jpg",
      requirements: {
        exclude: null,
        include: ["Always Out"],
      },
    },
  },
};

export default desummoning;
