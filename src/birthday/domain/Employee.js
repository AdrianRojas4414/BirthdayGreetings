import { OurDate } from "./OurDate";

export class Employee {
  constructor(firstName, lastName, birthDate, email) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthDate = new OurDate(birthDate);
    this._email = email;
  }

  getFirstName() {
    return this._firstName;
  }

  getLastName() {
    return this._lastName;
  }

  getEmail() {
    return this._email;
  }

  isBirthday(today) {
    return today.isSameDay(this._birthDate);
  }

  equals(obj) {
    if (!(obj instanceof Employee)) {
      return false;
    }

    if (!this._birthDate.equals(obj._birthDate)) {
      return false;
    }
    if (this._email !== obj._email) {
      return false;
    }
    if (this._firstName !== obj._firstName) {
      return false;
    }
    return this._lastName === obj._lastName;
  }
}
