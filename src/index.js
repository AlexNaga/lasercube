const { DAC } = require("@laser-dac/core");
const { Simulator } = require("@laser-dac/simulator");
const { Laserdock } = require("@laser-dac/laserdock");
const { Scene, Path } = require("@laser-dac/draw");

const scene = new Scene({ resolution: 80 });

const renderFrames = () => {
  // Should draw this cross: https://codepen.io/chrisnager/pen/armzk
  const cross = new Path({
    path: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z",
    color: [0, 1, 0],
    width: 5,
    height: 5,
  });
  scene.add(cross);
};

(async () => {
  const pointsPerSecond = 30000;
  const dac = new DAC();
  // dac.use(new Simulator());
  dac.use(new Laserdock());
  await dac.start();

  scene.start(renderFrames);
  dac.stream(scene, pointsPerSecond);
})();
