import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';
import { PRISMA_ERROR_CODES } from 'src/constants';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.userRepository.createUser(createUserDto);
    } catch (error) {
      if (error.code === PRISMA_ERROR_CODES.UNIQUE_CONSTRAINT_VIOLATION) {
        throw new ConflictException('El correo electrónico ya existe');
      }

      throw error;
    }
  }

  async findAll() {
    try {
      return await this.userRepository.findAll();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.userRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.userRepository.update(id, updateUserDto);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.userRepository.remove(id);
    } catch (error) {
      throw error;
    }
  }
}
