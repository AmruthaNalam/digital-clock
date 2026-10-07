function updateClock() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} ${period}`;
  document.getElementById("clock").innerHTML = timeString;

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString("en-US", options);
  document.getElementById("date").textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
