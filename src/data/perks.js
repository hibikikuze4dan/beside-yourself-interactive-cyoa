const perks = {
  title: "Clone Perks",
  description: "Your cloning abilities are stronger than you think.",
  choices: {
    shared_pleasure: {
      title: "Shared Pleasure",
      description:
        "You and your clones can feel each other’s sexual pleasure. Whether they’re masturbating or just looking at a really nice ass, you’ll all feel it. If all eight of you were to start fucking, the orgasm would be out of this world.",
      cost: 2,
      src: "https://i.imgur.com/3fY2A5w.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    shared_sleep: {
      title: "Shared Sleep",
      description:
        "If you or one of your clones is sleeping, you’ll all get the benefits of that sleep. So you can stay up whilst your clone sleeps a proper eight hours.",
      cost: 4,
      src: "https://i.imgur.com/7cqr7hl.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    shared_nutrition: {
      title: "Shared Nutrition",
      description:
        "If you or one of your clones eat, you’ll all feel full and gain nutrients from the food",
      cost: 3,
      src: "https://i.imgur.com/9t7sFIL.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    shared_good_times: {
      title: "Shared Good Times",
      description:
        "If you or one of your clones is feeling motivated, satisfied, content, or just happy, you'll all feel it.",
      cost: 4,
      src: "https://i.imgur.com/UjWQF2g.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    passed_around: {
      title: "Passed Around",
      description:
        "If one of you takes drugs, you and all your other clones can choose to feel its effects. If you're the one taking the drugs, you get to choose which clones are affected.",
      cost: 2,
      src: "https://i.imgur.com/5XdjVaF.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    palette_swap: {
      title: "Palette Swap",
      description:
        "Each of your clones can have a different hair/eye/skin colour when they pop out. You can finally prove you have a black friend. The colours must be humanly possible, so no light blue skin.",
      cost: 2,
      src: "https://i.imgur.com/pu6jgyJ.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    gender_neutral: {
      title: "Gender Neutral",
      description:
        "You can make your clones any gender you like. They can look like a male, female, or futanari version of yourself.",
      cost: 3,
      src: "https://i.imgur.com/vxyd9VM.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    wrap_around: {
      title: "Wrap Around",
      description:
        "You can now impregnate/be impregnated by your clones. You are now attracted to your clones, as are they to you. Children created this way will be healthy and relatively normal.",
      cost: 3,
      src: "https://i.imgur.com/OvAeBCz.jpg",
      requirements: {
        exclude: null,
        include: ["Gender Neutral"],
      },
    },
    telepathy: {
      title: "Telepathy",
      description:
        "The clones and you can communicate with your minds. Doesn’t matter the distance between you. This can be used to clarify instructions, have silent conversations, or to give important information.",
      cost: 3,
      src: "https://i.imgur.com/wzE8r2S.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    hive_mind: {
      title: "Hive Mind",
      description:
        "You are now completely in control of every single body at once. You have the combined consciousness, intelligence, memory capacity, etc, of all your brains. This means that you can multitask perfectly, having every single one of your bodies doing different things, or having them work in sync.",
      cost: 3,
      src: "https://i.imgur.com/sFGVtdL.png",
      requirements: {
        exclude: null,
        include: ["Telepathy"],
      },
    },
    transplant: {
      title: "Transplant",
      description:
        "Instead of creating a clone, you can create an extra body part. You can create up to one extra you’s worth of organs, limbs, bones, etc for every clone summon you’d normally do. No matter where the parts are, they're totally functional. This doesn’t work with Always on, and will be really weird with Random. These new parts cannot be de-summoned, and must be removed. If these parts are not put onto another person’s body in 24 hours after removal, then they will desummon on their own.",
      cost: 3,
      src: "https://i.imgur.com/Rc5l217.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    three_is_a_crowd: {
      title: "Three's a Crowd",
      description:
        "You can clone other people. You need to touch that other person to make a clone, as well as any other summoning parameters you already have (So if you have Random, you have to keep touching them until a clone randomly appears). The person’s clones will act exactly the same way as yours do, with all the same powers and effects. However, you can desummon their clones and give them orders. You can only create as many clones of this person as you’d be able to make of yourself though.",
      cost: 5,
      src: "https://i.imgur.com/mgMD2AX.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    sampled: {
      title: "Sampled",
      description:
        "Instead of creating their clone the moment they meet the summoning parameters, you can hang onto the clone and create it later.",
      cost: 2,
      src: "https://i.imgur.com/EFa5KM0.jpg",
      requirements: {
        exclude: null,
        include: ["Three's a Crowd"],
      },
    },
    merger: {
      title: "Merger",
      description:
        "You can create a clone that combines you and the person you touch. This new clone will have a combination of both your genetics, the average of your ages, both of your memories, skills, and a mixture of your personalities.",
      cost: 3,
      src: "https://i.imgur.com/xHBCFZi.png",
      requirements: {
        exclude: null,
        include: ["Three's a Crowd"],
      },
    },
    fractals: {
      title: "Fractals",
      description:
        "Your clones can clone themselves. Each subsequent generation of clones can create one less clone than their creator. So if you can create six clones of yourself, those clones can only create five, and then their clones can only make four, and so on.",
      cost: 5,
      src: "https://i.imgur.com/wmfWEkz.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    embiggen: {
      title: "Embiggen",
      description:
        "Instead of making a clone, you can use a clones mass to increase your size, or the size of any of your body parts. The part will still work fine, and you'll have no problem holding up the enlarged parts. You shrink the same way you'd desummon a clone.",
      cost: 3,
      src: "https://i.imgur.com/JpwZLs3.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    info_dump: {
      title: "Info Dump",
      description:
        "When you desummon a clone, you get all the memories and information that clone gathered while away from you.",
      cost: 2,
      src: "https://i.imgur.com/dtdmbGN.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    rewind_time: {
      title: "Rewind Time",
      description:
        "You can relive any of your clones’ memories as if it were actually happening. Time will stop in the real world, and you’ll be feeling/seeing/hearing everything that happened to the clone in that memory. Reliving sex has never been so easy.",
      cost: 4,
      src: "https://i.imgur.com/2Mtkea2.png",
      requirements: {
        exclude: null,
        include: ["Info Dump"],
      },
    },
    frozen: {
      title: "Frozen",
      description: "Your clones will not age after being created.",
      cost: 4,
      src: "https://i.imgur.com/KeNGfGC.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    unborn: {
      title: "Unborn",
      description:
        "Your clones cannot die, except by desummoning. Cannot be taken with Always out. Leap frogging into their bodies will not give you this ability.",
      cost: 5,
      src: "https://i.imgur.com/gbKjseW.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    leap_frog: {
      title: "Leap Frog",
      description:
        "You can jump your consciousness between your clones. All your clones will now have a C shaped birthmark somewhere on their body, and it’ll disappear when you’re in that body. The consciousness of the clone will then go into your old body, which will then have a C mark appear on it. You will leapfrog into your nearest clone automatically if you die. When you enter a clones body, you'll also be able to use that clones’ abilities, unless otherwise stated.",
      cost: 5,
      src: "https://i.imgur.com/Sy29RxJ.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    gainz: {
      title: "Gainz",
      description:
        "Any positive physical changes that affect a clone can affect you when you desummon them. Excersise, physical therapy, surgery, all of it can be made to affect you when a clone comes back.",
      cost: 4,
      src: "https://i.imgur.com/HwNn3Wy.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    out_of_town: {
      title: "Out of Town",
      description:
        "If you gained any abilities from other CYOAs, you can give your clones any combination of those abilities. However, even if you give them one of your special abilities, they'll recieve every single drawback you've taken in other CYOAs.",
      cost: 5,
      src: "https://i.imgur.com/LGLbJM3.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    edible: {
      title: "Edible",
      description:
        "Your clones are edible. Every part of their bodies can be eaten by humans, and will provide sustenance and health benefits, even if not cooked. They're also giant tortoise levels of tasty.",
      cost: 2,
      src: "https://i.imgur.com/9hn3345.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    positive: {
      title: "Positive",
      description:
        "When desummoned, the clones will explode in a shower of green light. Anyone caught in the glow will feel less stressed, more relaxed, happier, and more motivated. Cannot be taken with Neutral, Wild, or Negative. Doesn’t affect you.",
      cost: 2,
      src: "https://i.imgur.com/KDjsDlI.jpg",
      requirements: {
        exclude: ["Neutral", "Negative", "Wild"],
        include: null,
      },
    },
    neutral: {
      title: "Neutral",
      description:
        "When desummoned, the clones will explode in a shower of blue light. Anyone caught in the glow will feel very horny, and find you (or the idea of you if you aren’t there) attractive. Cannot be taken with Positive, Wild, or Negative. Doesn’t affect you.",
      cost: 2,
      src: "https://i.imgur.com/RPUj2j9.png",
      requirements: {
        exclude: ["Positive", "Negative", "Wild"],
        include: null,
      },
    },
    negative: {
      title: "Negative",
      description:
        "When desummoned, the clones will explode with the force of 100 kilos of TNT. Cannot be taken with Neutral, Wild, or Positive. Doesn’t affect you.",
      cost: 2,
      src: "https://i.imgur.com/CIgdbG6.png",
      requirements: {
        exclude: ["Positive", "Neutral", "Wild"],
        include: null,
      },
    },
    wild: {
      title: "Wild",
      description:
        "When desummoned, the clones will explode in a shower of yellow light. Anyone caught in the glow will either become more attractive to you, less attractive, or look exactly like one of your clones. Cannot be taken with Positive, Neutral, or Negative. Doesn’t affect you.",
      cost: 2,
      src: "https://i.imgur.com/jHQdmuH.jpg",
      requirements: {
        exclude: ["Positive", "Neutral", "Negative"],
        include: null,
      },
    },
    plausible_deniability: {
      title: "Plausible Deniability",
      description:
        "Anybody who sees your clones will believe it to be you. No matter what special abilities the clone has, or even if the clone is standing right next to other clones. People will not find it out of place in the slightest. However, if you are around other clones, people will address you. If you're not around, theyll address a random clone. For an extra point, this will also affect clones under the effect of palette swap.",
      cost: 2,
      src: "https://i.imgur.com/2iomTnY.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    "invisi-bill": {
      title: "Invisi-bill",
      description:
        "When you create a clone, you can choose for them to be affected by this ability. Whilst affected, nobody will be able to see, hear, smell, or register the existence of the clone. The only time they can notice what the clone has done is when the clone has left their field of vision and something is noticeably different.",
      cost: 5,
      src: "https://i.imgur.com/wBQVq2c.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    duplicate_glitch: {
      title: "Duplicate Glitch",
      description:
        "Anything you were wearing when you summoned the clone will also be worn by the clone. This includes piercings and implants, but doesn’t include anything in pockets or that you're holding. When the clone is desummoned, the duplicate items go with them.",
      cost: 2,
      src: "https://i.imgur.com/VBenq37.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    one_man_band: {
      title: "One Man Band",
      description:
        "You can give each clone a different 'voice' when you create them. This allows them to imitate one animal or instrument instead of being able to talk.",
      cost: 1,
      src: "https://i.imgur.com/QVrnzrN.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    relationship: {
      title: "Relationship",
      description:
        "Each of your clones can now be created speaking and understanding one extra language, on top of those you already know. Using Leap frog will not let you gain that language when you jump into the clone.",
      cost: 3,
      src: "https://i.imgur.com/RBxQu0l.jpg",
      requirements: {
        exclude: null,
        include: ["One Man Band"],
      },
    },
    mimicry: {
      title: "Mimicry",
      description:
        "A created clone now has the cadence, accent, and speech patterns of any one person you choose.",
      cost: 2,
      src: "https://i.imgur.com/DxCIZC7.jpg",
      requirements: {
        exclude: null,
        include: ["One Man Band"],
      },
    },
    protect_the_queen: {
      title: "Protect the Queen",
      description:
        "All clones sense when you're in danger, and will do everything they can to protect you. This even affects clones with free will.",
      cost: 3,
      src: "https://i.imgur.com/w00C6ur.png",
      requirements: {
        exclude: null,
        include: null,
      },
    },
    progenitor: {
      title: "Progenitor",
      description:
        "Your children will gradually develop your cloning abilities at the beginning of puberty. You can still desummon their clones, as well as give them orders. Until they turn 18, your orders override theirs.",
      cost: 3,
      src: "https://i.imgur.com/UZKmFW7.jpg",
      requirements: {
        exclude: null,
        include: null,
      },
    },
  },
};

export default perks;
