"use strict";
//get the bojects from HTML where we will display our countervalues
const firstCounter = document.querySelector(".firstCounter");
const secondCounter = document.querySelector(".secondCounter");
const thirdCounter = document.querySelector(".thirdCounter");
// define a function that will display and increment out countervalues
//
const counter = function (obj, initVal, lastVal, duration) {
  let startTime = null;
  //as we don't have a value of current time. So get system current time.
  let currentTime = Date.now();
  //create a step function and pass current time to it as an argument.
  const step = (currentTime) => {
    //if the start time null, assign the current time to starttime.
    if (!startTime) {
      startTime = currentTime;
    }
    const progress = Math.min((currentTime - startTime) / duration, 1);
    //calculatign value to display
    obj.textContent = Math.floor(progress * (lastVal - initVal) + initVal);
    //check the last value
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  window.requestAnimationFrame(step);
};

counter(firstCounter, 0, 4000, 4000);
counter(secondCounter, 0, 500, 4000);
counter(thirdCounter, 0, 1000, 4000);
