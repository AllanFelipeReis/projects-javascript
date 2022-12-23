// Variables
const workTitle = document.getElementById('work'),
  breakTitle = document.getElementById('break'),
  workTime = 25,
  breakTime = 5,
  pMinutes = document.getElementById('minutes'),
  pSeconds = document.getElementById('seconds');

let seconds = "00";

// Display
window.onload = () => {
  pMinutes.innerHTML = workTime;
  pSeconds.innerHTML = seconds;
  workTitle.classList.add('active');
}

// Start
const start = () => {
  // Change button
  document.getElementById('start').style.display = 'none';
  document.getElementById('reset').style.display = 'block';

  seconds = 59;

  let workMinutes = workTime - 1,
    breakMinutes = breakTime - 1,
    breakCount = 0;

  setInterval(() => {
    pMinutes.innerHTML = workMinutes;
    pSeconds.innerHTML = seconds;

    seconds--;

    if(seconds === 0) {
      workMinutes--;

      if(workMinutes === -1) {
        if(breakCount  % 2 === 0) {
          // Start break
          workMinutes = breakMinutes;
          breakCount++;
          
          // Change the painel
          workTitle.classList.remove('active');
          breakTitle.classList.add('active');
        } else {
          // Continue work
          workMinutes = workTime;
          breakCount++;

          // Change the painel
          workTitle.classList.add('active');
          breakTitle.classList.remove('active');
        }
      }

      seconds = 59;
    }

  }, 1000) // 1000 => 1s
}

const reset = () => {
  window.location.reload();
}