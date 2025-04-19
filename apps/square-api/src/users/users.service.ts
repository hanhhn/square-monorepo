import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserRequest } from './models/create-user';
import { UpdateUserRequest } from './models/update-user';
import { UserMapper } from './mappers/user.mapper';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUser: CreateUserRequest): Promise<UserDto> {
    // Check if username or email already exists
    const existingUser = await this.userRepository.findOne({
      where: [{ username: createUser.username }, { email: createUser.email }],
    });

    if (existingUser) {
      throw new ConflictException('Username or email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(createUser.password, 10);

    const user = this.userRepository.create({
      ...createUser,
      password: hashedPassword,
    });

    await this.userRepository.save(user);
    return UserMapper.toDto(user);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: 'ASC' | 'DESC'
  ): Promise<{ items: UserDto[]; total: number }> {
    const [users, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { [sortBy]: order },
    });

    return {
      items: users.map((user) => UserMapper.toDto(user)),
      total,
    };
  }

  async findOne(id: string): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return UserMapper.toDto(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async update(id: string, updateUser: UpdateUserRequest): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Check if username or email is being updated and if they're already taken
    if (updateUser.username || updateUser.email) {
      const existingUser = await this.userRepository.findOne({
        where: [
          { username: updateUser.username, id: Not(id) },
          { email: updateUser.email, id: Not(id) },
        ],
      });

      if (existingUser) {
        throw new ConflictException('Username or email already exists');
      }
    }

    Object.assign(user, updateUser);
    await this.userRepository.save(user);
    return UserMapper.toDto(user);
  }

  async remove(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async updateLastLogin(id: string): Promise<void> {
    await this.userRepository.update(id, {
      lastLogin: new Date(),
    });
  }
}
