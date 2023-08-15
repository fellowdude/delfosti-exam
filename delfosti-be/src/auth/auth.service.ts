import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/users.schema';
import { handleDbException } from 'src/utils/error';
import { LoginDto } from './dto/login.dto';
import { Auth } from './schema/auth.schema';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('USER') private readonly userModel: Model<User>,
    @InjectModel('Auth')
    private readonly authModel: Model<Auth>,
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async signIn({ user_code, password }: LoginDto) {
    try {
      console.log({ user_code });
      const user = await this.userModel.findOne({ user_code }).exec();
      console.log(user);
      if (!user) throw new Error('There is no user with that username');

      if (!(await user?.isValidPassword(password)))
        throw new Error('The password is incorrect');

      const token = this.jwtService.sign(
        {
          user_id: user._id,
          role_id: user.role,
        },
        {
          privateKey: '$p5k2$1f4$secretkey',
        },
      );
      await this.authModel.create({
        user_id: user._id,
        token: token,
        is_active: true,
        create_date: Date(),
      });

      return {
        token,
      };
    } catch (error) {
      return handleDbException(error);
    }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
