console.log("Hello")

const daysOfTheWeek = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday'];

function updateMyCurrentDayAndTime() {
  const currentDayOfTheWeekElement = document.querySelector(
   '[data-testid=currentDayOfTheWeek]'
  );
  const currentUTCTimeElement = document.querySelector(
    '[data-testid=currentUTCTime]'
 );


 const timeNow= new Date();
 const currentDayOfTheWeek = daysOfTheWeek[timeNow.getUTCDay()];
const currentUTC = timeNow.getTime();
 currentDayOfTheWeekElement.textContent = currentDayOfTheWeek;
currentUTCTimeElement.textContent = currentUTC
 setTimeout(updateMyCurrentDayAndTime, 1000);
}

updateMyCurrentDayAndTime();