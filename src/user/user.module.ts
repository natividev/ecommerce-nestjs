import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, UserRepository],
})
export class UserModule {}
