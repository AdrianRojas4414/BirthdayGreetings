import { OurDate } from "../domain/OurDate";
import { InMemoryTransport } from "../domain/InMemoryTransport";
import { EmployeeRepository } from "../infrastructure/EmployeeRepository";
import { BirthdayService } from "../services/BirthdayService";
import { EmailMessageService } from "../infrastructure/EmailMessageService";

describe("Acceptance", () => {
  const SMTP_PORT = 25;
  const SMTP_URL = "localhost";
  const FILENAME = "employee_data.txt";
  let birthdayService;
  let transport; // = new InMemoryTransport();
  let employeeRespository;
  let emailMessageService;

  beforeEach(() => {
    transport = new InMemoryTransport();
    employeeRespository = new EmployeeRepository(FILENAME);
    emailMessageService = new EmailMessageService(SMTP_URL, SMTP_PORT, transport);
    birthdayService = new BirthdayService(employeeRespository, emailMessageService);
  });

  it("base scenario", () => {
    birthdayService.sendGreetings(new OurDate("2008/10/08"));

    expect(transport.messagesSent.length).toEqual(1);
    const message = transport.messagesSent[0];
    expect(message.text).toEqual("Happy Birthday, dear John!");
    expect(message.subject).toEqual("Happy Birthday!");
    const tos = message.to;
    expect(tos.length).toEqual(1);
    expect(tos[0]).toEqual("john.doe@foobar.com");
  });

  it("will not send emails when nobodys birthday", () => {
    birthdayService.sendGreetings(new OurDate("2008/01/01")
    );

    expect(transport.messagesSent.length).toEqual(0);
  });

  it("uses correct transport", () => {
    birthdayService.sendGreetings(new OurDate("2008/10/08"));

    const message = transport.messagesSent[0];
    expect(message.host).toEqual(SMTP_URL);
    expect(message.port).toEqual(SMTP_PORT);
  });
});
