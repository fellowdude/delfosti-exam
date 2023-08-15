import { Injectable, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    if (
      context.switchToHttp().getRequest().headers.authorization.split(' ')[1]
    ) {
      const jwtService = new JwtService({
        privateKey: '$p5k2$1f4$secretkey',
        publicKey: '$p5k2$1f4$secretkey',
      });
      const jwt = jwtService.verify(
        context.switchToHttp().getRequest().headers.authorization.split(' ')[1],
      );
      if (jwt) {
        return true;
      }
    }
    return false;
  }
}
