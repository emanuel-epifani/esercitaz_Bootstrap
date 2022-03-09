// let progressBars = $('.progress-bar');

// let percentage = 0;

// let interval = setInterval(function () {
//   percentage += 1;

//   if (percentage <= 100) {
//     progressBars.css('width', percentage + '%');
//     progressBars.text(percentage + '%');
//   } else {
//     clearInterval(interval);
//   }
// }, 100);

// ------------------------------

let progressBars = document.getElementsByClassName('progress-bar');

let percentage = 0;

let interval = setInterval(function () {
  percentage += 1;

  if (percentage <= 100) {
    for (let i = 0; i < progressBars.length; i++) {
      progressBars[i].style.width = percentage + '%';
      progressBars[i].textContent = percentage + '%';
    }
  } else {
    clearInterval(interval);
  }
}, 100);