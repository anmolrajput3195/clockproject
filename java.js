
const clock = document.querySelector('.clock');
const hourHand = clock.querySelector('.hour');
const minuteHand = clock.querySelector('.minute');
const secondHand = clock.querySelector('.second');
const numbers = clock.querySelectorAll('.number');
function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12 || 12;
    
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour');
    
    const secondDeg = (seconds / 60) * 360 + 90;
    const minuteDeg = (minutes / 60) * 360 + 90;
    const hourDeg = (hours / 12) * 360 + 90;
    
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }
  
  setInterval(setTime, 1000);
  