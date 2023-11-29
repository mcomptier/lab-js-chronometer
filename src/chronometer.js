class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback(this.currentTime);

      if (this.currentTime === 3) {
        this.stop();
      }
    }, 1000);
  }


  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime % 60);
  }  

  computeTwoDigitNumber(value) {

    const twoDigitString = value.toString().padStart(2, '0');
    return twoDigitString;
  }  

  stop() {
    {
      if (this.intervalId !== 0) {
        clearInterval(this.intervalId);
        this.intervalId = 0; 
      }
    }  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`; 
  }
}
