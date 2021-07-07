export default function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const CR = [];
// (function r() {
//   for (let i = 0; i < 3; i++) {
//     CR.push(randomIntFromInterval(0, 6));
//   }
//   return CR.sort(() => Math.random() - 0.5);
// })();

// const r = () => randomIntFromInterval(0, 6);
