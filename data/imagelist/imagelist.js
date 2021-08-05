async function imageImporter(path, imageList, altVals) {
  return await Promise.all([
    await Promise.all(imageList.map((e) => import(`../../${path}${e}.jpg`))),
    await Promise.all(
      imageList.map((e) => import(`../../${path}thumbs/${e}_200.jpg`))
    ),
    altVals,
  ]);
}

const dpiPath = "public/images/portfolio/digitalprint/";
const dpiImageList = {
  WhitewaterStyle: {
    title: "Whitewater Ski Resort",
    alt: "",
    description:
      "When Whitewater Ski Resort asked for a new website, I created this design, which helped them look more exciting and sophisticated.",
  },
  arXivConcept: {
    title: "arXiv.org",
    alt: "Concept for arXiv.org",
    description:
      "How can an academic research website look serious yet stylish? Consider arXiv.org, for example. Here is how I would redesign the site to look more visually appealing, while retaining enough of the original to be recognizable.",
  },
  PML: {
    title: "Pytorch Metric Learning",
    alt: "Logo for Pytorch Metric Learning library.",
    description:
      "Even a codebase on Github can be branded with a distinctive logo design. I designed this logo with eyes to suggest artificial intelligence, and with prominent, unequal ears to suggest interconnected datasets.",
  },
  // ReebeeContestSpread: {
  //   title: "reebee Mother's Day Contest Spread",
  //   alt: "",
  //   description: "In-app contest banner artwork for reebee",
  // },
  SmallGraphicsSpread: {
    title: "Pay Per Click Ads",
    alt: "",
    description:
      "Here are some ad designs I created for several clients who wanted to advertise with Google AdWords.",
  },
  UniversitySpread: {
    title: "University of Guelph FARE",
    alt: "",
    description:
      "For this website, I used images of food and agriculture to visually communicate the focus of research for a professor at the University of Guelph. ",
  },
  WhitePaperSpread: {
    title: "KCM Whitepaper",
    alt: "",
    description:
      "How can a designer make a whitepaper look appealing? Here is an attractive design I created for a marketing whitepaper from KCM.",
  },
};

export const DPI = await imageImporter(
  dpiPath,
  Object.keys(dpiImageList),
  Object.values(dpiImageList)
);

const aaPath = "public/images/portfolio/albumart/";
const aaImageList = {
  EphemeralFirelight: {
    title: "",
    alt: "",
    description:
      "Album art for Ephemeral Fireflight, Classical Jazz Piano Solos Inspired by Debussy and Ravel, by Kevin Musgrave",
  },
  HalfTheTruthIsAWholeLieArt: {
    title: "",
    alt: "",
    description:
      "Album art for Strange & Primitive's Half The Truth is a Whole Lie",
  },

  LPOne: {
    title: "",
    alt: "",
    description: "Strange & Primitive Self Titled Album Art.",
  },
  MelodyInTheHalfLight: {
    title: "",
    alt: "",
    description: "Album art for Audiograft's Melody in the Half-Light",
  },
  SV1_03_Protection: {
    title: "",
    alt: "",
    description:
      "Single cover art for Protection, a cover by Strange & Primitive",
  },
  SV1_05_Tilt: {
    title: "",
    alt: "",
    description: "Single cover art for Tilt, a cover by Strange & Primitive",
  },
  SV1_06_ICantGiveEverythingAway: {
    title: "",
    alt: "",
    description:
      "Single cover art for I Can't Give Everything Away, a cover by Strange & Primitive",
  },
  YellowBrickRoad: {
    title: "",
    alt: "",
    description:
      "Album art for Yellow Brick Road by Alden David & Peter Triggvi",
  },
  YoudBeSoNiceToComeHomeTo: {
    title: "",
    alt: "",
    description:
      "Album art for You'd Be So Nice To Come Home To by Alden David",
  },
};

export const AA = await imageImporter(
  aaPath,
  Object.keys(aaImageList),
  Object.values(aaImageList)
);
