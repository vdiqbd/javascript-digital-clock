const tops = document.querySelectorAll(".top");
const all = document.querySelectorAll(".opaque");
const blinker = document.querySelector(".three");
const bottoms = document.querySelectorAll(".bottom");
const middles = document.querySelectorAll(".middle");
const topLefts = document.querySelectorAll(".top-left");
const topRights = document.querySelectorAll(".top-right");
const bottomLefts = document.querySelectorAll(".bottom-left");
const bottomRights = document.querySelectorAll(".bottom-right");

const setOpacity = (...items) => {
  items.forEach((item) => {
    item.style.opacity = "100%";
  });
};

const setHours = () => {
  const now = new Date();
  const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();

  hours < 10
    ? setOpacity(
        tops[0],
        topLefts[0],
        topRights[0],
        bottoms[0],
        bottomLefts[0],
        bottomRights[0]
      )
    : setOpacity(topRights[0], bottomRights[0]);

  const newHours = hours.toString();
  if (newHours[1] === "0") {
    setOpacity(
      tops[1],
      topLefts[1],
      topRights[1],
      bottoms[1],
      bottomLefts[1],
      bottomRights[1]
    );
  } else if (newHours[1] === "1") {
    setOpacity(topRights[1], bottomRights[1]);
  } else {
    setOpacity(tops[1], topLefts[1], middles[1], bottomRights[1], bottoms[1]);
  }
};

const setMinutes = () => {
  const now = new Date();
  const minutes = now.getMinutes().toString();

  if (minutes[0] === "0") {
    setOpacity(
      tops[2],
      topLefts[2],
      topRights[2],
      bottoms[2],
      bottomLefts[2],
      bottomRights[2]
    );
  } else if (minutes[0] === "1") {
    setOpacity(topRights[2], bottomRights[2]);
  } else if (minutes[0] === "2") {
    setOpacity(tops[2], topRights[2], middles[2], bottomLefts[2], bottoms[2]);
  } else if (minutes[0] === "3") {
    setOpacity(tops[2], topRights[2], middles[2], bottomRights[2], bottoms[2]);
  } else if (minutes[0] === "4") {
    setOpacity(topLefts[2], middles[2], topRights[2], bottomRights[2]);
  } else if (minutes[0] === "5") {
    setOpacity(tops[2], topLefts[2], middles[2], bottomRights[2], bottoms[2]);
  }

  if (minutes[1] === "0") {
    setOpacity(
      tops[3],
      topLefts[3],
      topRights[3],
      bottoms[3],
      bottomLefts[3],
      bottomRights[3]
    );
  } else if (minutes[1] === "1") {
    setOpacity(topRights[3], bottomRights[3]);
  } else if (minutes[1] === "2") {
    setOpacity(tops[3], topRights[3], middles[3], bottomLefts[3], bottoms[3]);
  } else if (minutes[1] === "3") {
    setOpacity(tops[3], topRights[3], middles[3], bottomRights[3], bottoms[3]);
  } else if (minutes[1] === "4") {
    setOpacity(topLefts[3], middles[3], topRights[3], bottomRights[3]);
  } else if (minutes[1] === "5") {
    setOpacity(tops[3], topLefts[3], middles[3], bottomRights[3], bottoms[3]);
  } else if (minutes[1] === "6") {
    setOpacity(
      tops[3],
      topLefts[3],
      bottomLefts[3],
      middles[3],
      bottomRights[3],
      bottoms[3]
    );
  } else if (minutes[1] === "7") {
    setOpacity(tops[3], topRights[3], bottomRights[3]);
  } else if (minutes[1] === "8") {
    setOpacity(
      tops[3],
      topRights[3],
      topLefts[3],
      middles[3],
      bottomRights[3],
      bottomLefts[3],
      bottoms[3]
    );
  } else if (minutes[1] === "9") {
    setOpacity(
      tops[3],
      topRights[3],
      topLefts[3],
      middles[3],
      bottomRights[3],
      bottoms[3]
    );
  }
};

setInterval(() => {
  all.forEach((opaque) => {
    opaque.style.opacity = "10%";
  });

  setHours();
  setMinutes();
}, 1000);
setInterval(() => {
  blinker.classList.toggle("blink");
}, 1000);
