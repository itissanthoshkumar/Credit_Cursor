// Set a launch date 30 days from now by default
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function pad(n){return String(n).padStart(2,'0')}

function updateCountdown(){
  const now = new Date();
  const diff = Math.max(0, launchDate - now);
  const secs = Math.floor(diff / 1000);
  const days = Math.floor(secs / 86400);
  const hours = Math.floor((secs % 86400) / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = secs % 60;
  document.getElementById('days').textContent = pad(days);
  document.getElementById('hours').textContent = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
  if(diff === 0){clearInterval(timer);document.getElementById('countdown').textContent='We are live!'}
}

const timer = setInterval(updateCountdown,1000);
updateCountdown();

// Simple email capture UX (no backend)
document.getElementById('notify-form').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if(!email) return;
  this.reset();
  const saved = document.createElement('p');
  saved.textContent = 'Thanks — we will notify you at ' + email + '.';
  saved.style.color = '#cfe9ff';
  saved.style.marginTop = '12px';
  this.parentNode.insertBefore(saved, this.nextSibling);
});
