import './styles.css';
import CountdownTimer from './js/class';

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 25, 2021 19:59:59'),
});
