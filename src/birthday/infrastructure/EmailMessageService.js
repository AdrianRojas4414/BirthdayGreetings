export class EmailMessageService{
    constructor(smtpUrl, smtpPort, transport){
        this.smtpUrl = smtpUrl;
        this.smtpPort = smtpPort;
        this.transport = transport;
    }

    getEmailService(employees){
        employees.forEach((employee) => {
            const message = {
              host: this.smtpUrl,
              port: this.smtpPort,
              from: "sender@here.com",
              to: [employee.getEmail()],
              subject: "Happy Birthday!",
              text: `Happy Birthday, dear ${employee.getFirstName()}!`,
            };
            this.transport.sendMail(message);
          });
    }
}