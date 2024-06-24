import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'example@example.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'The two factor authentication status of the user',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  twoFa: boolean = false;

  @ApiProperty({
    description: 'The two factor authentication code of the user',
    example: '123456',
  })
  @IsString()
  @IsOptional()
  code_2fa: string;
}
