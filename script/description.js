// Menu Title
let logoName = document.getElementById("logo-name");
let logoDescription = document.getElementById("logo-description");

let firstDescription = "wants you to click again.";
let descriptions = [
  "wishes he liked seafood.",
  "thinks he's a minimalist.",
  "is learning 3D modeling",
  "thinks he can code.",
  "needs to read more.",
  "cooks too much chicken.",
  "lives by Google Calendar.",
  "owns a chihuahua/lab.",
  "is 60% extroverted.",
  "is a photographer.",
  "loves spreadsheets.",
];

// performs text spazzing
let count = 0;
let prevRandom;
const loopLength = 10;

function addLogoDescription() {
  for (i = 0; i < loopLength; i++) {
    (function (i) {
      if (i === loopLength - 1) {
        //first description
        if (count === 0) {
          setTimeout(
            () => (logoDescription.innerHTML = firstDescription),
            i * 30
          );
        }
        //final result
        else {
          let currRandom = Math.floor(Math.random() * descriptions.length);

          if (currRandom === prevRandom) {
            currRandom = Math.floor(Math.random() * descriptions.length);
          } else {
            prevRandom = currRandom;
          }

          setTimeout(
            () => (logoDescription.innerHTML = descriptions[currRandom]),
            i * 30
          );
        }
      }
      // everything thing in between
      else {
        setTimeout(() => (logoDescription.innerHTML = descriptions[i]), i * 30);
      }
    })(i);
  }
  count++;
}
