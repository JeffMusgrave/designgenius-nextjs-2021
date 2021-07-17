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
  arXivConcept: "Concept for arXiv.org",
  NelsonDailyStyle: "Nelson Daily Redesign.",
  PML: "Logo for Pytorch Metric Learning library.",
  ReebeeContestSpread: "In-app contest banner artwork for reebee",
  SmallGraphicsSpread: "Pay-per-click ads for Google adwords placements",
  UniversitySpread:
    "Custom graphic design and wordpress theme development for University of Guelph FARE department",
  WhitewaterStyle: "Whitewater redesign concept.",
  MosconeTileFullPage: "Moscone Tile full page magazine ad.",
  WhitePaperSpread: "Marketing whitepaper for KCM SaaS provider.",
};

export const DPI = await imageImporter(
  dpiPath,
  Object.keys(dpiImageList),
  Object.values(dpiImageList)
);

const aaPath = "public/images/portfolio/albumart/";
const aaImageList = {
  EphemeralFirelight:
    "Album art for Ephemeral Fireflight, Classical Jazz Piano Solos Inspired by Debussy and Ravel, by Kevin Musgrave",
  HalfTheTruthIsAWholeLieArt:
    "Album art for Strange & Primitive's Half The Truth is a Whole Lie",
  LPOne: "Strange & Primitive Self Titled Album Art.",
  MelodyInTheHalfLight: "Album art for Audiograft's Melody in the Half-Light",
  PachelbelPeace: "Pachelbel Peace album art for Machiko",
  SV1_03_Protection:
    "Single cover art for Protection, a cover by Strange & Primitive",
  SV1_04_NoHarm: "Single cover art for No Harm, a cover by Strange & Primitive",
  SV1_05_Tilt: "Single cover art for Tilt, a cover by Strange & Primitive",
  SV1_06_ICantGiveEverythingAway:
    "Single cover art for I Can't Give Everything Away, a cover by Strange & Primitive",
  SV1_07_TheLineBeginsToBlur:
    "Single cover art for The Line Begins To Blur, a cover by Strange & Primitive",
  YellowBrickRoad:
    "Album art for Yellow Brick Road by Alden David & Peter Triggvi",
  YoudBeSoNiceToComeHomeTo:
    "Album art for You'd Be So Nice To Come Home To by Alden David",
};

export const AA = await imageImporter(
  aaPath,
  Object.keys(aaImageList),
  Object.values(aaImageList)
);
