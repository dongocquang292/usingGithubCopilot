import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: string): Promise<import("../entities/user.entity").User | null>;
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../entities/user.entity").User | null>;
    remove(id: string): Promise<void>;
}
