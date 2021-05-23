const posse = {
  title: "Clone Posse Size",
  description: "How many clones can you have out at any one time?",
  multi: false,
  choices: {
    "1": {
      title: "1",
      description: "",
      cost: -1,
      src: "https://i.imgur.com/4aZ62Pu.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "2": {
      title: "2",
      description: "",
      cost: -1,
      src: "https://i.imgur.com/3IP39Dc.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "3": {
      title: "3",
      description: "",
      cost: -1,
      src: "https://i.imgur.com/KxjImWR.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "4": {
      title: "4",
      description: "",
      cost: 0,
      src: "https://i.imgur.com/Z0chuzx.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "5": {
      title: "5",
      description: "",
      cost: 0,
      src: "https://i.imgur.com/Z8a4C5M.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "6": {
      title: "6",
      description: "",
      cost: 0,
      src: "https://i.imgur.com/ZNsxoSV.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "7": {
      title: "7",
      description: "",
      cost: 1,
      src: "https://i.imgur.com/rhMHonb.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "8": {
      title: "8",
      description: "",
      cost: 1,
      src: "https://i.imgur.com/WYF8vkC.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    limitless: {
      title: "Limitless",
      description:
        "You can create as many clones as you like. Cannot be taken with 'Always Out'",
      cost: 45,
      src: "https://i.imgur.com/R7EUizn.png",
      requirements: {
        exclude: ["Always Out"],
        include: null,
      },
    },
  },
};

export default posse;
