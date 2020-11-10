
export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.selector = selector;
    this.targetDate = targetDate;
   
    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.getTime(deltaTime);
    }, 1000);

  }

  getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.timerMarkUp({ days, hours, mins, secs });
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

    timerMarkUp({ days, hours, mins, secs }) {
        
       const markUpDiv= `
      <div class="field">
        <span class="value" data-value="days">${days}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-value="hours">${hours}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-value="mins">${mins}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-value="secs">${secs}</span>
        <span class="label">Second</span>
      </div>`;
       
        document.querySelector(`#timer-1`).innerHTML = markUpDiv;
  }

}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 06, 2020'),
});



