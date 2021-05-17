import './styles.css';
import CountdownTimer from './js/class';

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 28, 2021 23:12:55'),
});

