export class BirthdayService {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  sendGreetings(ourDate, smtpUrl, smtpPort, transport) {
    let employees = this.employeeRepository.getEmployeeByBirthDate(ourDate);
    this.getEmailService(employees, smtpUrl, smtpPort, transport);
  }
  getEmailService(employees, smtpUrl, smtpPort, transport){
    employees.forEach((employee) => {
      const message = {
        host: smtpUrl,
        port: smtpPort,
        from: "sender@here.com",
        to: [employee.getEmail()],
        subject: "Happy Birthday!",
        text: `Happy Birthday, dear ${employee.getFirstName()}!`,
      };
      transport.sendMail(message);
    });
  }
}
