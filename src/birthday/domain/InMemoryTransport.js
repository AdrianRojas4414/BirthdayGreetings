export class InMemoryTransport {
  constructor() {
    this.messagesSent = [];
  }
  sendMail(message) {
    this.messagesSent.push(message);
  }
}
