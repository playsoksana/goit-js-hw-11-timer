import './styles.css';
function transferTime(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
}
function pad(value) {
    return String(value).padStart(2, '0');
}
// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

// =================================
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),

};

const someDate = new Date('May 25, 2021 00:00:00');
const finishTime = someDate.getTime();
function timerStart() {
    const currentTime = Date.now();
    const durationTime = finishTime - currentTime;
    const { days, hours, mins, secs } = transferTime(durationTime);
    insertTime(transferTime(durationTime))

    if (durationTime < 500) {
        clearInterval(intervalTimer);
    }
};

function insertTime(time) {
    const { days, hours, mins, secs } = time;
    refs.days.innerHTML = days;
    refs.hours.innerHTML = hours;
    refs.mins.innerHTML = mins;
    refs.secs.innerHTML = secs;
};
const intervalTimer = setInterval(timerStart, 1000);