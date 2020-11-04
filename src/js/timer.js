
const refs = {
  timerClock: document.querySelector('#timer-1'),
};

export class CountdownTimer {
  constructor({targetDate }) {
    this.intervalId = null;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const timeClock = this.getTime(deltaTime);

      this.updateClock(timeClock);
    }, 1000);
  }

  /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Рисует интерфейс
   */
  updateClock({ days, hours, mins, secs }) {
    refs.timerClock.innerHTML = `<div class="field">
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
    <span class="label">Seconds</span>
  </div>`;
  }

  //  Высчитывает сколько в них вмещается дней/часов/минут/секунд
  //    * - Возвращает обьект со свойствами days, hours, mins, secs
  getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 06, 2020'),
  
});

timer.start();



