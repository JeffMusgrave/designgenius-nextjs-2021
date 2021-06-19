async function imageImporter(path, imageList) {
  return await Promise.all([
    await Promise.all(imageList.map((e) => import(`../../${path}${e}.jpg`))),
    await Promise.all(
      imageList.map((e) => import(`../../${path}thumbs/${e}_200.jpg`))
    ),
  ]);
}

const dpiPath = "public/images/portfolio/digitalprint/";
const dpiImageList = [
  "arXivConcept",
  "NelsonDailyStyle",
  "PML",
  "ReebeeContestSpread",
  "SmallGraphicsSpread",
  "UniversitySpread",
  "WhitewaterStyle",
  "MosconeTileFullPage",
  "WhitePaperSpread",
];

export const DPI = await imageImporter(dpiPath, dpiImageList);

const aaPath = "public/images/portfolio/albumart/";
const aaImageList = [
  "EphemeralFirelight",
  "HalfTheTruthIsAWholeLieArt",
  "LPOne",
  "MelodyInTheHalfLight",
  "PachelbelPeace",
  "SV1_03_Protection",
  "SV1_04_NoHarm",
  "SV1_05_Tilt",
  "SV1_06_ICantGiveEverythingAway",
  "SV1_07_TheLineBeginsToBlur",
  "YellowBrickRoad",
  "YoudBeSoNiceToComeHomeTo",
];

export const AA = await imageImporter(aaPath, aaImageList);
