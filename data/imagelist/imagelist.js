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
  arXivConcept: {
    title: "arXiv.org",
    alt: "An exploration into the venerable blah blah",
    description: "Concept for arXiv.org",
  },
  PML: {
    title: "Pytorch Metric Learning",
    alt: "Logo for Pytorch Metric Learning library.",
    description: "lorem ipsum",
  },
  // ReebeeContestSpread: {
  //   title: "reebee Mother's Day Contest Spread",
  //   alt: "",
  //   description: "In-app contest banner artwork for reebee",
  // },
  SmallGraphicsSpread: {
    title: "Pay Per Click Ads",
    alt: "",
    description: "Pay-per-click ads for Google adwords placements",
  },
  UniversitySpread: {
    title: "University of Guelph FARE",
    alt: "",
    description:
      "Custom graphic design and wordpress theme development for University of Guelph FARE department",
  },

  WhitewaterStyle: {
    title: "Whitewater Ski Resort",
    alt: "",
    description: "Whitewater redesign concept.",
  },
  WhitePaperSpread: {
    title: "KCM Whitepaper",
    alt: "",
    description: "Marketing whitepaper for KCM SaaS provider.",
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
