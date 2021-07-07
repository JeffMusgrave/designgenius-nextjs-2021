import randomIntFromInterval from "./randomIntFromInterval";
export default function randomRadius(images, brVals, min, max) {
  return images.map(() => brVals[randomIntFromInterval(min, max)]);
}
