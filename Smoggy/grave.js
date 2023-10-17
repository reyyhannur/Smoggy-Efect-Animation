const filter = document.querySelector("#turbulence");
let frames = 1;
let rad = Math.PI / 180;
let bfx, bfy;

function freqAnimation() {
  frames += 0.2;

  bfx = 0.03;
  bfy = 0.03;

  bfx += 0.005 * Math.cos(frames * rad);
  bfy += 0.005 * Math.sin(frames * rad);

  bf = `${String(bfx)} ${String(bfy)}`;
  filter.setAttributeNS(null, "baseFrequency", bf);

  requestAnimationFrame(freqAnimation);
}

requestAnimationFrame(freqAnimation);

const root = document.documentElement;
const state = {
  bodyBg: "#111",
  textColor: "#f5f5f5",
  textSize: 10,
};

function handleCssProp(value) {
  state[this.property] = value;
  root.style.setProperty(`--${this.property}`, String(value));
}

const gui = new lil.GUI({ title: "Smoke" });
gui.addColor(state, "bodyBg").onChange(handleCssProp);
gui.addColor(state, "textColor").onChange(handleCssProp);
gui.add(state, "textSize", 1, 20, 0.1).onChange(handleCssProp);
