export class BirthdayService {
  constructor(employeeRepository, emailMessageService) {
    this.employeeRepository = employeeRepository;
    this.emailMessageService = emailMessageService;
  }

  sendGreetings(ourDate) {
    let employees = this.employeeRepository.getEmployeeByBirthDate(ourDate);
    this.emailMessageService.getEmailService(employees);
  }
}
