const { DAC } = require("@laser-dac/core");
const { Laserdock } = require("@laser-dac/laserdock");

(async () => {
  const dac = new DAC();
  dac.use(new Laserdock());
  const started = await dac.start();

  if (started) {
    const pps = 30000; // points per second
    // draw a horizontal red line from left to right in the center
    // @laser-dac/draw can help you with drawing points!
    const scene = {
      points: [
        { x: 0.1, y: 0.5, r: 1, g: 0, b: 0 },
        { x: 0.9, y: 0.5, r: 1, g: 0, b: 0 },
      ],
    };
    dac.stream(scene, pps);
  }
})();
