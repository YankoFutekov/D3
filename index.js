const svg = d3.select("svg");
const arc = d3.arc();

const height = +svg.attr("height");
const width = +svg.attr("width");
const eyeSpacing = 100;
const eyeOffset = -70;
const eyeRadius = 40;
const eyeBrowWidth = 70;
const eyeBrowHeight = 15;
const eyeBrowYOffset = -70;

const g = svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

const eyesG = g.append("g").attr("transform", `translate(0, ${eyeOffset})`);

const circle = eyesG
  .append("circle")
  .attr("r", height / 2)
  .attr("fill", "yellow")
  .attr("stroke", "black");

const leftEye = eyesG
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", -eyeSpacing);

const rightEye = eyesG
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", eyeSpacing);

const leftEyebrow = eyesG
  .append("rect")
  .attr("x", -eyeSpacing - eyeBrowWidth / 2)
  .attr("x", eyeBrowYOffset)
  .attr("width", eyeBrowWidth)
  .attr("height", eyeBrowHeight);

const rightEyebrow = eyesG
  .append("rect")
  .attr("x", -eyeSpacing - eyeBrowWidth / 2)
  .attr("x", eyeBrowYOffset)
  .attr("width", eyeBrowWidth)
  .attr("height", eyeBrowHeight);

const mouth = g.append("path").attr(
  "d",
  arc({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: (Math.PI * 3) / 2,
  })
);
