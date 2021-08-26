"use strict";
function navFunc() {
  document.querySelector("html").classList.toggle("open");
}
function dropFunc() {
  document.getElementById("dropdownBox").classList.toggle("show");
}
function scroll() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector("html").classList.add("fixed");
    document.getElementById("topBtn").classList.add("fadeIn");
  } else {
    document.querySelector("html").classList.remove("fixed");
    document.getElementById("topBtn").classList.remove("fadeIn");
  }
}

const numSteps = 20.0;
let targetElement;
let prevRatio = 0.0;
// Set things up
window.addEventListener(
  "load",
  (event) => {
    targetElement = document.querySelector("#target");
    createObserver();
  },
  false
);
window.addEventListener(
  "load",
  (event) => {
    targetElement = document.querySelector("#target2");
    createObserver();
  },
  false
);
//Intersection Observer の作成
function createObserver() {
  let observer;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(targetElement);
}
//閾値比率の配列を組み立てる
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;
  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
}
//交差の変換の処理
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.classList.add("move");
    } else {
      entry.target.classList.remove("move");
    }
    prevRatio = entry.intersectionRatio;
  });
}
