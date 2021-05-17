import { transferTime, pad } from './helper';
import markup from '../templates/markup.hbs'
const refs = {
    body: document.querySelector('.title'),
};
export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.finishTime = targetDate;
        this.intervalTimer = null;
        this.makeMarkup(this);
        this.timerStart();
    };

    timerStart() {
        this.intervalTimer = setInterval(() => {
            const currentTime = Date.now();
            const durationTime = this.finishTime - currentTime;
            if (durationTime < 900) {
                clearInterval(this.intervalTimer);
            }
            this.insertTime(transferTime(durationTime));
        }, 1000)
    };

    makeMarkup(name) {

        refs.body.insertAdjacentHTML('afterend', markup(name));

        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
        }
    }
    
    insertTime(time) {

        const { days, hours, mins, secs } = time;
        this.refs.days.innerHTML = days;
        this.refs.hours.innerHTML = hours;
        this.refs.mins.innerHTML = mins;
        this.refs.secs.innerHTML = secs;
    };

};