export class CreateUserDto {
  email: string;
  password: string;
  username: string;
  teamId?: number;
}

export class UpdateUserDto {
  email?: string;
  password?: string;
  username?: string;
  teamId?: number;
}
