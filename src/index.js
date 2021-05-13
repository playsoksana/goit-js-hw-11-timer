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
// =================================
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};
//================================================================
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.finishTime = targetDate;
        this.intervalTimer = null;
    };
    timerStart() {
        this.intervalTimer = setInterval(() => {
            if (durationTime < 100) {
                clearInterval(this.intervalTimer);
            }
            const currentTime = Date.now();
            const durationTime = this.finishTime - currentTime;
            this.insertTime(transferTime(durationTime));

        }, 1000)
    };
    insertTime(time) {
        const { days, hours, mins, secs } = time;
        refs.days.innerHTML = days;
        refs.hours.innerHTML = hours;
        refs.mins.innerHTML = mins;
        refs.secs.innerHTML = secs;
    };
};

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 25, 2021 00:00:00'),
});

timer.timerStart();

