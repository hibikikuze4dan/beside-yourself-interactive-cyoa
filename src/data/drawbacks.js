const drawbacks = {
  title: "Clone Drawbacks",
  description: "Something about your abilities is a bit off. What is it?",
  multi: true,
  choices: {
    death_rattle: {
      title: "Death Rattle",
      description:
        "If one of your clones die, you'll feel all the sensations leading up to that death. For an extra three points, this'll also happen with every desummon.",
      cost: -4,
      src: "https://i.imgur.com/pc4157Ih.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    zombie_legion: {
      title: "Zombie Legion",
      description:
        "Your clones will slowly deteriorate the longer they exist. Both physically breaking down and mentally degrading. Their vital organs will shut down after a week.",
      cost: -5,
      src: "https://i.imgur.com/GQ2rWfx.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    friendly_stranger: {
      title: "Friendly Stranger",
      description:
        "Your clones will not speak or understand any language except the one you have given them.",
      cost: -2,
      src: "https://i.imgur.com/obnYsdC.png",
      requirements: {
        exclude: null,
        include: ["Relationship"],
      },
    },
    mirror_mirror: {
      title: "Mirror, Mirror",
      description:
        "Your clones will have one aspect of your personality reversed. The aspect is random each time, and can be something as mild as liking blue instead of red, or something as destructive as going from a pacifist to a crazed murderer.",
      cost: -3,
      src: "https://i.imgur.com/xXiw3Ow.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    tracker: {
      title: "Tracker",
      description:
        "Your clones cannot be more than 50km from you, or else they will be pushed towards you by an invisible force. For an extra point, the range  is reduced to 5km.",
      cost: -3,
      src: "https://i.imgur.com/gDUcSGr.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    close_and_personal: {
      title: "Close and Personal",
      description:
        "You cannot use a weapon to kill them. You must use your bare hands to end their life. If they die by any other means, they will remain a corpse, and be impossible to desummon.",
      cost: -4,
      src: "https://i.imgur.com/gj7EWwR.jpg",
      requirements: {
        exclude: null,
        include: ["Murder"],
      },
    },
    sterile: {
      title: "Sterile",
      description: "Your clones cannot conceive.",
      cost: -1,
      src: "https://i.imgur.com/nA88mc8.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    green_grass: {
      title: "Green Grass",
      description:
        "Your clones are always more attractive than you. If you try to leapfrog into them, your attractiveness comes with you.",
      cost: -2,
      src: "https://i.imgur.com/MYsDd5l.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    that_is_rough_buddy: {
      title: "That's Rough Buddy",
      description:
        "All your clones, upon being created, will have an existential crisis over being clones. Depending on the other abilities you’ve taken, the crisis will go better/worse.",
      cost: -4,
      src: "https://i.imgur.com/vZmYB8Z.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
  },
};

export default drawbacks;
