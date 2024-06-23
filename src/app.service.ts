import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}

  async getHello() {
    const user = {
      email: 'coderlifesv@gmail.com',
      name: 'nativi',
    };
    await this.mailService.sendUserConfirmation(user, 'DCL22');
  }
}
