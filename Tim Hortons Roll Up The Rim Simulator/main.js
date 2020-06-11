// Tim Hortons Roll Up The Rim Simulator
"use strict";

// GLobal Variables
let numPleasePlayAgain = 0;
let numCoffee = 0;
let numDonut = 0;
let numGrandPrize = 0;

let resultsEl = document.getElementById("results");

// Event Listners
document.getElementById("mainImg").addEventListener("click", collectPrize);
document.getElementById("plus5").addEventListener("click", plus5);
document.getElementById("untilGrandPrize").addEventListener("click", untilGrandPrize);
document.getElementById("until500Donuts").addEventListener("click", until500Donuts);

("use strict");

function collectPrize() {
  // Simulate results

  // Collect Province
  let province = document.getElementById("province").value;

  if (province == "BC") {
    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1

    if (randNum <= 0.7) {
      // Collect Please Play Again
      console.log("Please PLay Again");
      numPleasePlayAgain++;
      document.getElementById("pleasePlayAgain").innerHTML = numPleasePlayAgain;
      resultsEl.innerHTML += '<img src="images/play-again.png">';
    } else if (randNum <= 0.8) {
    // Collect Coffee
    console.log("Coffee");
    numCoffee++;
    document.getElementById('coffee').innerHTML = numCoffee;
    resultsEl.innerHTML += '<img src="images/coffee.jpg">';
    } else if (randNum <= 0.9) {
    // Collect Donut
    console.log("Donut");
    numDonut++;
    document.getElementById('donut').innerHTML = numDonut;
    resultsEl.innerHTML += '<img src="images/donut.jpg">';
    } else {
    // Collect Grand Prize
    console.log("Grand Prize");
    numGrandPrize++;
    document.getElementById('grandPrize').innerHTML = numGrandPrize;
    resultsEl.innerHTML += '<img src="images/grand-prize.jpg">';
    }
  } else if (province == "AB") {
    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1

    if (randNum <= 0.15) {
      // Collect Please Play Again
      console.log("Please PLay Again");
      numPleasePlayAgain++;
      document.getElementById("pleasePlayAgain").innerHTML = numPleasePlayAgain;
      resultsEl.innerHTML += '<img src="images/play-again.png">';
    } else if (randNum <= 0.55) {
      // Collect Coffee
      console.log("Coffee");
      numCoffee++;
      document.getElementById("coffee").innerHTML = numCoffee;
      resultsEl.innerHTML += '<img src="images/coffee.jpg">';
    } else if (randNum <= 0.95) {
      // Collect Donut
    console.log("Donut");
    numDonut++;
    document.getElementById('donut').innerHTML = numDonut;
    resultsEl.innerHTML += '<img src="images/donut.jpg">';
    } else {
    // Collect Grand Prize
    console.log("Grand Prize");
    numGrandPrize++;
    document.getElementById('grandPrize').innerHTML = numGrandPrize;
    resultsEl.innerHTML += '<img src="images/grand-prize.jpg">';
    }
  } else if (province == "SK") {
    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1
    if (randNum >= 0.7) {
      // Collect Please Play Again
      console.log("Please PLay Again");
      numPleasePlayAgain++;
      document.getElementById("pleasePlayAgain").innerHTML = numPleasePlayAgain;
      resultsEl.innerHTML += '<img src="images/play-again.png">';
    } else if (randNum >= 0.71) {
      // Collect Coffee
      console.log("Coffee");
      numCoffee++;
      document.getElementById("coffee").innerHTML = numCoffee;
      resultsEl.innerHTML += '<img src="images/coffee.jpg">';
    } else if (randNum >= 0.72) {
    // Collect Donut
    console.log("Donut");
    numDonut++;
    document.getElementById('donut').innerHTML = numDonut;
    resultsEl.innerHTML += '<img src="images/donut.jpg">';
    } else {
    // Collect Grand Prize
    console.log("Grand Prize");
    numGrandPrize++;
    document.getElementById('grandPrize').innerHTML = numGrandPrize;
    resultsEl.innerHTML += '<img src="images/grand-prize.jpg">';
    }
  } else {
    alert("Please Choose A Province");
  }
  } 

  function plus5() {
    for (let n = 0; n <= 5; n++) {
      console.log(n);
      collectPrize();
    }
  }

  function untilGrandPrize() {
    let count = 0;
    while (numGrandPrize < 1) {
        collectPrize();
        count++;
    }
  }

  function until500Donuts() {
    let count = 0;
    while (numDonut < 500) {
        collectPrize();
        count++;
    }
    console.log("count" + count);
}