import { EmailMessageService } from "./EmailMessageService";

export class BirthdayService {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  sendGreetings(ourDate, smtpUrl, smtpPort, transport) {
    let employees = this.employeeRepository.getEmployeeByBirthDate(ourDate);
    let emails = new EmailMessageService();

    emails.getEmailService(employees, smtpUrl, smtpPort, transport);
  }
}
