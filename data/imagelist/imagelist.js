const path = "public/images/portfolio/digitalprint/";
const imageList = [
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

export const digPrintImages = await Promise.all(
  imageList.map((e) => import(`../../${path}${e}.jpg`))
);

// import NelsonDailyStyle from "../../public/images/portfolio/digitalprint/NelsonDailyStyle.jpg";
// import PML from "../../public/images/portfolio/digitalprint/PML.jpg";
// import ReebeeContestSpread from "../../public/images/portfolio/digitalprint/ReebeeContestSpread.jpg";
// import SmallGraphicsSpread from "../../public/images/portfolio/digitalprint/SmallGraphicsSpread.jpg";
// import UniversitySpread from "../../public/images/portfolio/digitalprint/UniversitySpread.jpg";
// import WhitewaterStyle from "../../public/images/portfolio/digitalprint/WhitewaterStyle.jpg";
// import MosconeTileFullPage from "../../public/images/portfolio/digitalprint/MosconeTileFullPage.jpg";
// import WhitePaperSpread from "../../public/images/portfolio/digitalprint/WhitePaperSpread.jpg";

// import arXivConcept_thumb from "../../public/images/portfolio/digitalprint/thumbs/arXivConcept_200.jpg";
// import NelsonDailyStyle_thumb from "../../public/images/portfolio/digitalprint/thumbs/NelsonDailyStyle_200.jpg";
// import PML_thumb from "../../public/images/portfolio/digitalprint/thumbs/PML_200.jpg";
// import ReebeeContestSpread_thumb from "../../public/images/portfolio/digitalprint/thumbs/ReebeeContestSpread_200.jpg";
// import SmallGraphicsSpread_thumb from "../../public/images/portfolio/digitalprint/thumbs/SmallGraphicsSpread_200.jpg";
// import UniversitySpread_thumb from "../../public/images/portfolio/digitalprint/thumbs/UniversitySpread_200.jpg";
// import WhitewaterStyle_thumb from "../../public/images/portfolio/digitalprint/thumbs/WhitewaterStyle_200.jpg";
// import MosconeTileFullPage_thumb from "../../public/images/portfolio/digitalprint/thumbs/MosconeTileFullPage_200.jpg";
// import WhitePaperSpread_thumb from "../../public/images/portfolio/digitalprint/thumbs/WhitePaperSpread_200.jpg";

// import EphemeralFirelight from "../../public/images/portfolio/albumart/EphemeralFirelight.jpg";
// import HalfTheTruthIsAWholeLieArt from "../../public/images/portfolio/albumart/HalfTheTruthIsAWholeLieArt.jpg";
// import LPOne from "../../public/images/portfolio/albumart/LPOne.jpg";
// import MelodyInTheHalfLight from "../../public/images/portfolio/albumart/MelodyInTheHalfLight.jpg";
// import PachelbelPeace from "../../public/images/portfolio/albumart/PachelbelPeace.jpg";
// import SV1_03_Protection from "../../public/images/portfolio/albumart/SV1_03_Protection.jpg";
// import SV1_04_NoHarm from "../../public/images/portfolio/albumart/SV1_04_NoHarm.jpg";
// import SV1_05_Tilt from "../../public/images/portfolio/albumart/SV1_05_Tilt.jpg";
// import SV1_06_ICantGiveEverythingAway from "../../public/images/portfolio/albumart/SV1_06_ICantGiveEverythingAway.jpg";
// import SV1_07_TheLineBeginsToBlur from "../../public/images/portfolio/albumart/SV1_07_TheLineBeginsToBlur.jpg";
// import YellowBrickRoad from "../../public/images/portfolio/albumart/YellowBrickRoad.jpg";
// import YoudBeSoNiceToComeHomeTo from "../../public/images/portfolio/albumart/YoudBeSoNiceToComeHomeTo.jpg";

// import EphemeralFirelight_thumb from "../../public/images/portfolio/albumart/EphemeralFirelight_200.jpg";
// import HalfTheTruthIsAWholeLieArt_thumb from "../../public/images/portfolio/albumart/HalfTheTruthIsAWholeLieArt_200.jpg";
// import LPOne_thumb from "../../public/images/portfolio/albumart/LPOne_200.jpg";
// import MelodyInTheHalfLight_thumb from "../../public/images/portfolio/albumart/MelodyInTheHalfLight_200.jpg";
// import PachelbelPeace_thumb from "../../public/images/portfolio/albumart/PachelbelPeace_200.jpg";
// import SV1_03_Protection_thumb from "../../public/images/portfolio/albumart/SV1_03_Protection_200.jpg";
// import SV1_04_NoHarm_thumb from "../../public/images/portfolio/albumart/SV1_04_NoHarm_200.jpg";
// import SV1_05_Tilt_thumb from "../../public/images/portfolio/albumart/SV1_05_Tilt_200.jpg";
// import SV1_06_ICantGiveEverythingAway_thumb from "../../public/images/portfolio/albumart/SV1_06_ICantGiveEverythingAway_200.jpg";
// import SV1_07_TheLineBeginsToBlur_thumb from "../../public/images/portfolio/albumart/SV1_07_TheLineBeginsToBlur_200.jpg";
// import YellowBrickRoad_thumb from "../../public/images/portfolio/albumart/YellowBrickRoad_200.jpg";
// import YoudBeSoNiceToComeHomeTo_thumb from "../../public/images/portfolio/albumart/YoudBeSoNiceToComeHomeTo_200.jpg";

// export let digPrintImages = [];

// import("../../public/images/portfolio/digitalprint/arXivConcept.jpg").then(
//   (module) => digPrintImages.push(module.default)
// );

// console.log("digPrintImages", digPrintImages);

// export let digPrintImages = await [
//   ,
//   import("../../public/images/portfolio/digitalprint/NelsonDailyStyle.jpg"),
//   import("../../public/images/portfolio/digitalprint/PML.jpg"),
//   import("../../public/images/portfolio/digitalprint/ReebeeContestSpread.jpg"),
//   import("../../public/images/portfolio/digitalprint/SmallGraphicsSpread.jpg"),
//   import("../../public/images/portfolio/digitalprint/UniversitySpread.jpg"),
//   import("../../public/images/portfolio/digitalprint/WhitewaterStyle.jpg"),
//   import("../../public/images/portfolio/digitalprint/MosconeTileFullPage.jpg"),
//   import("../../public/images/portfolio/digitalprint/WhitePaperSpread.jpg"),
// ];

// export const digPrintThumbs = [
//   arXivConcept_thumb,
//   NelsonDailyStyle_thumb,
//   PML_thumb,
//   ReebeeContestSpread_thumb,
//   SmallGraphicsSpread_thumb,
//   UniversitySpread_thumb,
//   WhitewaterStyle_thumb,
//   MosconeTileFullPage_thumb,
//   WhitePaperSpread_thumb,
// ];

// export const albumArtThumbs = [
//   EphemeralFirelight_thumb,
//   HalfTheTruthIsAWholeLieArt_thumb,
//   LPOne_thumb,
//   MelodyInTheHalfLight_thumb,
//   PachelbelPeace_thumb,
//   SV1_03_Protection_thumb,
//   SV1_04_NoHarm_thumb,
//   SV1_05_Tilt_thumb,
//   SV1_06_ICantGiveEverythingAway_thumb,
//   SV1_07_TheLineBeginsToBlur_thumb,
//   YellowBrickRoad_thumb,
//   YoudBeSoNiceToComeHomeTo_thumb,
// ];

// export const albumArtImages = [
//   EphemeralFirelight,
//   HalfTheTruthIsAWholeLieArt,
//   LPOne,
//   MelodyInTheHalfLight,
//   PachelbelPeace,
//   SV1_03_Protection,
//   SV1_04_NoHarm,
//   SV1_05_Tilt,
//   SV1_06_ICantGiveEverythingAway,
//   SV1_07_TheLineBeginsToBlur,
//   YellowBrickRoad,
//   YoudBeSoNiceToComeHomeTo,
// ];

// export const digPrintDir = "../../public/images/portfolio/digitalprint";
// export const digPrintImages = [
//   "arXivConcept",
//   "NelsonDailyStyle",
//   "PML",
//   "ReebeeContestSpread",
//   "SmallGraphicsSpread",
//   "UniversitySpread",
//   "WhitewaterStyle",
//   "MosconeTileFullPage",
//   "WhitePaperSpread",
// ];

// export const albumArtDir = "../../public/images/portfolio/album-art";
// export const albumArtImages = [
//   "EphemeralFirelight",
//   "HalfTheTruthIsAWholeLieArt",
//   "LPOne",
//   "MelodyInTheHalfLight",
//   "PachelbelPeace",
//   "SV1_03_Protection",
//   "SV1_04_NoHarm",
//   "SV1_05_Tilt",
//   "SV1_06_ICantGiveEverythingAway",
//   "SV1_07_TheLineBeginsToBlur",
//   "YellowBrickRoad",
//   "YoudBeSoNiceToComeHomeTo",
// ];
