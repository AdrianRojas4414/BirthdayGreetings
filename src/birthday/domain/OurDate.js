export class OurDate {
  constructor(yyyyMMdd) {
    this._date = new Date(yyyyMMdd);
  }

  getDay() {
    return this._date.getDate();
  }

  getMonth() {
    return 1 + this._date.getMonth();
  }

  isSameDay(anotherDate) {
    return (
      anotherDate.getDay() === this.getDay() &&
      anotherDate.getMonth() === this.getMonth()
    );
  }

  equals(obj) {
    return (
      obj instanceof OurDate && obj._date.getTime() === this._date.getTime()
    );
  }
}
