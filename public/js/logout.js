// Logs out the user.
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

// Inactivity timeout code.
let timeoutId;

const startTimer = () => {
  timeoutId = window.setTimeout(doInactive, 30000)
}

const doInactive = () => {
  alert(`You've been logged out due to 30 seconds of inactivity.`);
  logout();
}

const resetTimer = () => {
  window.clearTimeout(timeoutId)
  startTimer();
}

const setupTimers = () => {
  document.addEventListener('mousemove', resetTimer, false);
  document.addEventListener('mousedown', resetTimer, false);
  document.addEventListener('keypress', resetTimer, false);
  document.addEventListener('touchmove', resetTimer, false);

  startTimer();
}

document.querySelector('#logout').addEventListener('click', logout);
document.addEventListener('DOMContentLoaded', function () {
  setupTimers();
});